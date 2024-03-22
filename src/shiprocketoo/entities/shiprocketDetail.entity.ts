import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-scalars';

@ObjectType()
export class ShipRocketOrderDetails {

  @Field()
  id: string;

  @Field()
  orderId: number;

  @Field()
  shiprocket_OrderId: number;

  @Field()
  shiprocket_ShipmentId: number;

  @Field()
  shiprocket_status: string;

  @Field()
  shiprocket_status_code: number;

  @Field(() => [GraphQLJSONObject], { nullable: true })
  metaData?: any;

}
