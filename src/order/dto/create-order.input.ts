import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateOrderInput {
  @Field(() => Float)
  orderAmount: number;

  @Field()
  buyerId: string;

  @Field()
  cartId: string;

  @Field()
  AddressId: number;

  @Field()
  ShippingCost: number;
}
