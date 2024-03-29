import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateOrderInputs {
  @Field(() => Float, {})
  orderAmount: number;

  @Field()
  buyerId: string;

  @Field()
  cartId: string;

  @Field()
  paymentID: string;

  @Field()
  AddressId: number;

  @Field()
  ShippingCost: number;
}
