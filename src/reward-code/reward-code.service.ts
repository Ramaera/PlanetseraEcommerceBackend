import { Injectable } from '@nestjs/common';
import { CreateRewardCodeInput } from './dto/create-reward-code.input';
import { UpdateRewardCodeInput } from './dto/update-reward-code.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class RewardCodeService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateRewardCodeInput) {
    const rewardCodeData = await this.prisma.rewardCode.create({
      data: {
        rewardCode: data.rewardCode,
        userId: data.userId,

      },
    });
    return rewardCodeData;
  }

  async findAllRewardCodesByUserId(userId: string) {
    const RewardCode = await this.prisma.rewardCode.findMany({
      where: {
        userId: userId,
      },
      
    });
    return RewardCode;
  }
 

  findAll() {
    return `This action returns all rewardCode`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rewardCode`;
  }

  update(id: number, updateRewardCodeInput: UpdateRewardCodeInput) {
    return `This action updates a #${id} rewardCode`;
  }

  remove(id: number) {
    return `This action removes a #${id} rewardCode`;
  }
}
