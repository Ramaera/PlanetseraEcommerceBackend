import { InputType, Int, Field, Float } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-scalars';

@InputType()
export class CreateOrderInput {
  @Field(() => Float)
  orderAmount: number;

  @Field()
  buyerId: string;

  @Field()
  cartId: string;

  @Field(() => [GraphQLJSONObject], { nullable: true })
  metaData?: any;

  @Field()
  AddressId: number;

  @Field()
  ShippingCost: number;

  @Field({ nullable: true })
  discountedAmount?: number;

  @Field({ nullable: true })
  discountCode?: string;
}
