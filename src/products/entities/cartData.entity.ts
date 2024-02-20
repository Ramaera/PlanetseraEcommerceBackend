import { ObjectType, Field, Int } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-scalars';
import { ProductVariant } from './productVariant.entity';

@ObjectType()
export class Cart {

 
    @Field()
    id:string

    @Field(()=>String)
    buyerId : string;

    

    @Field(()=>[CartItems])
    cartItem : CartItems[]
  

}

@ObjectType()
class CartItems {
    @Field()
    id:string

    @Field(()=>Int)
    qty : number;

    @Field(()=>String,{nullable:true})
    name:string

    @Field(()=>Int)
    productVariantId : number
}