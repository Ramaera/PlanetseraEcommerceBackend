import { InputType, Int, Field, Float } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-scalars';

@InputType()
export class CreateShipRocketDetailInput {

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

}
