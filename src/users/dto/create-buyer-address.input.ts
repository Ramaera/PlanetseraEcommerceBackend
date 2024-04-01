import { InputType, Field } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-scalars';

@InputType()

export class CreateBuyerAddressInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  mobileNumber?: string;

  @Field({ nullable: true })
  buyerId?: string;

  @Field(() => [GraphQLJSONObject])
  address?: any;
}
