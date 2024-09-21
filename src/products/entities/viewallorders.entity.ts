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
import { User } from 'src/users/models/user.model';
import { ShipRocketOrderDetails } from 'src/shiprocketoo/entities/shiprocketDetail.entity';

registerEnumType(OrderStatus, {
  name: 'Status',
  description: 'Order Status',
});

@ObjectType()
export class AllOrdersData {
  @Field(() => AddressData, { nullable: true })
  address: AddressData;

  @Field(() => User, { nullable: true })
  user: User;

  @Field(() => [PaymentData], { nullable: true })
  Payment: PaymentData[];

  @Field(() => [OrderItems], { nullable: true })
  orderItems: OrderItems[] | null;

  @Field(() => [ShipRocketOrderDetails], { nullable: true })
  shipRocketDetails: ShipRocketOrderDetails;

  @Field(() => BuyerData, { nullable: true })
  Buyer: BuyerData;

  @Field(() => Float, {})
  orderAmount: number;

  @Field({ nullable: true })
  discountedAmount?: number;

  @Field({ nullable: true })
  discountCode?: string;

  @Field()
  orderDate: Date;

  @Field()
  id: string;

  @Field({ nullable: true })
  ShippingCost: number;

  @Field(() => OrderStatus)
  status: OrderStatus;

  @Field(() => [GraphQLJSONObject], { nullable: true })
  metaData?: any;
}
