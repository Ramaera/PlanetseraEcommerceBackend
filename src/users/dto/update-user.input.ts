import { InputType, Field } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-scalars';

@InputType()
export class UpdateUserInput {
  @Field(() => [GraphQLJSONObject], { nullable: true })
  address?: any;
}
