import { ObjectType, Field, Int } from '@nestjs/graphql';


@ObjectType()
export class RewardCode {


  @Field(() => String, { description: 'rewardCode', })
  rewardCode: string;

  @Field(() => String, { description: 'id', })
  id: string;

  @Field(() => String, { description: 'Date', })
  createdAt: string;

}
