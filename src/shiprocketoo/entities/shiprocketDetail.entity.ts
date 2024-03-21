import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class ShipRocketOrderDetails {

  @Field({nullable:true})
  orderId: number;

  @Field({nullable:true})
  shiprocket_OrderId: number;

  @Field({nullable:true})
  shiprocket_ShipmentId: number;

  @Field({nullable:true})
  shiprocket_status: string;

  @Field({nullable:true})
  shiprocket_status_code: boolean;

}
