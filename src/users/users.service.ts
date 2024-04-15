import { PrismaService } from 'nestjs-prisma';
import { Injectable, BadRequestException } from '@nestjs/common';
import { PasswordService } from '../auth/password.service';
import { ChangePasswordInput } from './dto/change-password.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UpdateShippingInput } from './dto/update-shippingType.input';
import { UpdateUserAgency } from './dto/update-user-agency.input';
import { CreateBuyerAddressInput } from './dto/create-buyer-address.input';
import { UpdateBuyerAddressInput } from './dto/update-buyer-address.input';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private passwordService: PasswordService,
  ) {}

  async getUser(userId) {
    const user = await this.prisma.user.findFirst({
      where: {
        id: userId,
      },
      include: {
        buyer: {
          include: {
            Cart: true,
          },
        },
      },
    });
    return user;
  }
  updateUser(userId: string, newUserData: UpdateUserInput) {
    return this.prisma.user.update({
      data: newUserData,
      where: {
        id: userId,
      },
    });
  }

  async updateUserAgency(userId: string, newUserData: UpdateUserAgency) {
    return await this.prisma.user.update({
      data: newUserData,
      where: {
        id: userId,
      },
    });
  }

  async updateBuyer(userId, updatedData: UpdateUserInput) {
    const data = await this.prisma.buyer.update({
      where: {
        userId,
      },
      data: {
        addresses: updatedData.address,
      },
    });
    return data;
  }

  async addAddress(addInput: CreateBuyerAddressInput) {
    const data = await this.prisma.address.create({
      data: {
        buyerId: addInput.buyerId,
        name: addInput.name,
        mobileNumber: addInput.mobileNumber,
        address: addInput.address,
      },
    });
    return data;
  }


  async updateAddress(updateInput: UpdateBuyerAddressInput) {
    const data = await this.prisma.address.update({
      where: {
        addresId: updateInput.AddresId, // Assuming you have the address ID in your input
      },
      data: {
        name: updateInput.name,
        mobileNumber: updateInput.mobileNumber,
        address: updateInput.address,
      },
    });
    return data;
  }
  

  async changePassword(
    userId: string,
    userPassword: string,
    changePassword: ChangePasswordInput,
  ) {
    const passwordValid = await this.passwordService.validatePassword(
      changePassword.oldPassword,
      userPassword,
    );

    if (!passwordValid) {
      throw new BadRequestException('Invalid password');
    }

    const hashedPassword = await this.passwordService.hashPassword(
      changePassword.newPassword,
    );

    return this.prisma.user.update({
      data: {
        password: hashedPassword,
      },
      where: { id: userId },
    });
  }
}
