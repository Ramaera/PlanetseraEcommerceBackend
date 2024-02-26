import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class RewardCode {
  @Field(() => String, { description: 'rewardCode' })
  rewardCode: string;
}
