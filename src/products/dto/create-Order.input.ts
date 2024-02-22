import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateOrderInput {

  @Field({nullable:true})
  orderDate: Date;

  @Field(() => Float,{}) 
  orderAmount: number;

  @Field()
  buyerId:string
  
  @Field()
  cartId:string

  @Field()
  AddressId:string
  
  @Field()
  paymentType:string

  @Field()
  paymentDetails:string

  @Field()
  ShippingCost:string
 


  }
