import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class ShipRocketOrderDetails {


  @Field()
  id:string

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
