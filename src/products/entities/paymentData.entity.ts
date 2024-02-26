import { ObjectType, Field, Int } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-scalars';
import { ProductVariant } from './productVariant.entity';

@ObjectType()
export class PaymentData {
  @Field()
  paymentId: string;

  @Field()
  orderId: number;

  @Field()
  dateOfPayment: Date;

  @Field(() => String, { nullable: true })
  buyerId: string;
}
