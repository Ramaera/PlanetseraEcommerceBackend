import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RewardCodeService } from './reward-code.service';
import { RewardCode } from './entities/reward-code.entity';
import { CreateRewardCodeInput } from './dto/create-reward-code.input';
import { UpdateRewardCodeInput } from './dto/update-reward-code.input';

@Resolver(() => RewardCode)
export class RewardCodeResolver {
  constructor(private readonly rewardCodeService: RewardCodeService) {}

  @Mutation(() => RewardCode)
  createRewardCode(@Args('data') createRewardCodeInput: CreateRewardCodeInput) {
    return this.rewardCodeService.create(createRewardCodeInput);
  }

  @Query(() => [RewardCode], { name: 'getRewardCode' })
  async findAllRewardCodesByUserId(@Args('userId') userId: string) {
    return this.rewardCodeService.findAllRewardCodesByUserId(userId);
  }



}
