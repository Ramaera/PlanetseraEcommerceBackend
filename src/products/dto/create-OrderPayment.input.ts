import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateOrderPayment {
  @Field()
  paymentId: string;

  @Field()
  orderId: number;

  @Field(() => String, { nullable: true })
  buyerId: string;
}
