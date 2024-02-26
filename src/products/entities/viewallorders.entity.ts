import {
  ObjectType,
  Field,
  Int,
  Float,
  registerEnumType,
} from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-scalars';
import { ProductVariant } from './productVariant.entity';
import { AddressData } from 'src/users/models/address.model';
import { OrderItems } from 'src/order/entities/orderItem.entity';
import { PaymentData } from './paymentData.entity';
import { OrderStatus } from '@prisma/client';
import { BuyerData } from 'src/users/models/buyer.model';

registerEnumType(OrderStatus, {
  name: 'Status',
  description: 'Order Status',
});

@ObjectType()
export class AllOrdersData {

  @Field(() => AddressData, { nullable: true })
  address: AddressData;

  @Field(() => [PaymentData], { nullable: true })
  Payment: PaymentData[];

  @Field(() => [OrderItems], { nullable: true })
  orderItems: OrderItems[] | null;

  @Field(() => BuyerData, { nullable: true })
  Buyer: BuyerData

  @Field(() => Float, {})
  orderAmount: number;

  @Field()
  orderDate: Date;

  @Field()
  id: string;

  @Field()
  ShippingCost: number;

  @Field()
  status: OrderStatus;
}
