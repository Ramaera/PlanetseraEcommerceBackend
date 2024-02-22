import { InputType, Int, Field } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-scalars';
import { json } from 'stream/consumers';



@InputType()
export class CartOperationInput {
  @Field() 
  cartItemId:string

  @Field()
  operation:string
  
  @Field()
  qty: number;

}
