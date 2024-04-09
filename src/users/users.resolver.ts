import { PrismaService } from 'nestjs-prisma';
import {
  Resolver,
  Query,
  Parent,
  Mutation,
  Args,
  ResolveField,
} from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { UserEntity } from '../common/decorators/user.decorator';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { UsersService } from './users.service';
import { User } from './models/user.model';
import { ChangePasswordInput } from './dto/change-password.input';
import { UpdateUserInput } from './dto/update-user.input';
import { BuyerData } from './models/buyer.model';
import { AddressData } from './models/address.model';
import { UpdateShippingInput } from './dto/update-shippingType.input';
import { ShippingData } from './models/shipping.model';
import { MessageOutput } from 'src/products/entities/message.entity';
import { UpdateUserAgency } from './dto/update-user-agency.input';
import { CreateBuyerAddressInput } from './dto/create-buyer-address.input';
import { UpdateBuyerAddressInput } from './dto/update-buyer-address.input';

@Resolver(() => User)
// @UseGuards(GqlAuthGuard)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    private prisma: PrismaService,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => User)
  async me(@UserEntity() user: User): Promise<User> {
    const _user = await this.usersService.getUser(user.id);
    return _user;
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => BuyerData)
  async getBuyer(@UserEntity() user: User) {
    return await this.prisma.buyer.findUnique({
      where: {
        userId: user.id,
      },
    });
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => User)
  async updateUser(
    @UserEntity() user: User,
    @Args('data') newUserData: UpdateUserInput,
  ) {
    return this.usersService.updateUser(user.id, newUserData);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => User)
  async updateUserAgencyCode(
    @UserEntity() user: User,
    @Args('data') newUserData: UpdateUserAgency,
  ) {
    return this.usersService.updateUserAgency(user.id, newUserData);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => User)
  async changePassword(
    @UserEntity() user: User,
    @Args('data') changePassword: ChangePasswordInput,
  ) {
    return this.usersService.changePassword(
      user.id,
      user.password,
      changePassword,
    );
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => User)
  async updateBuyer(
    @UserEntity() user: User,
    @Args('data') data: UpdateUserInput,
  ) {
    return this.usersService.updateBuyer(user.id, data);
  }

  @Mutation(() => AddressData)
  async addAddress(@Args('data') data: CreateBuyerAddressInput) {
    return this.usersService.addAddress(data);
  }


  @Mutation(() => AddressData)
  async updateAddress(@Args('data') data: UpdateBuyerAddressInput) {
    return this.usersService.updateAddress(data);
  }

  @Query(() => [AddressData])
  async getBuyerAddress(@Args('buyerId') buyerId: string) {
    return await this.prisma.address.findMany({
      where: {
        buyerId: buyerId,
      },
    });
  }


}
