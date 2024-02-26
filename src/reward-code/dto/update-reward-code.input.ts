import { CreateRewardCodeInput } from './create-reward-code.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRewardCodeInput extends PartialType(CreateRewardCodeInput) {
  @Field(() => Int)
  id: number;
}
