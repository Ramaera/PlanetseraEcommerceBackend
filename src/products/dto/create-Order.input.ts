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
  cartItemid:string
 


  }
