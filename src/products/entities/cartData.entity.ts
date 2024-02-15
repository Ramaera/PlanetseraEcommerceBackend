import { ObjectType, Field, Int } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-scalars';
import { ProductVariant } from './productVariant.entity';

@ObjectType()
export class Cart {

    @Field(()=>(Int))
    itemCount : number;
  
    @Field()
    subTotal:number
    
  
    @Field()
    buyerId   : string
  
    @Field(()=>(Int))
    productVariantId : number
  
    @Field()
    checkedOut: Boolean
   


}
