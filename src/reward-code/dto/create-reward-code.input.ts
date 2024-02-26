import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRewardCodeInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  rewardCode: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  userId: string;
}
