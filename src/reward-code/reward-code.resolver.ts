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

  // @Query(() => [RewardCode], { name: 'rewardCode' })
  // findAll() {
  //   return this.rewardCodeService.findAll();
  // }

  // @Query(() => RewardCode, { name: 'rewardCode' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.rewardCodeService.findOne(id);
  // }

  // @Mutation(() => RewardCode)
  // updateRewardCode(
  //   @Args('updateRewardCodeInput') updateRewardCodeInput: UpdateRewardCodeInput,
  // ) {
  //   return this.rewardCodeService.update(
  //     updateRewardCodeInput.id,
  //     updateRewardCodeInput,
  //   );
  // }

  // @Mutation(() => RewardCode)
  // removeRewardCode(@Args('id', { type: () => Int }) id: number) {
  //   return this.rewardCodeService.remove(id);
  // }
}
