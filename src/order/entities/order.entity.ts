import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-scalars';

import { AddressData } from 'src/users/models/address.model';
import { OrderItems } from './orderItem.entity';

@ObjectType()
class OrderData {
  @Field()
  id: number;

  @Field()
  address: AddressData;

  @Field()
  orderDate: Date;

  @Field()
  buyerId: string;

  @Field()
  discountedAmount: number;

  @Field()
  discountCode: string;

 
}

@ObjectType()
export class Order {
  @Field(() => OrderData, { nullable: true })
  newOrder: OrderData;

  @Field(() => [OrderItems], { nullable: true })
  orderItems: OrderItems[] | null;
}
