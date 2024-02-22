import { InputType, Field, ObjectType } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-scalars';

@ObjectType()
export class AddressData {


  @Field(() => String)
  addresId?: string;

  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  mobileNumber?: string;

  @Field(() => String, { nullable: true })
  buyerId?: string;

  @Field(() => [GraphQLJSONObject])
  address?: any;
}
