import { ObjectType, Field, Int } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-scalars';
import { ProductVariant } from './productVariant.entity';

@ObjectType()
export class Cart {

    @Field(()=>[Int])
    itemCount : number[];
  
    @Field()
    subTotal:number

    
    @Field(() => [[GraphQLJSONObject]], { nullable: true })
    cartItem?: any[];

    @Field()
    buyerId   : string
  
    @Field(()=>[Int])
    productVariantIds : number[]
  
    @Field()
    checkedOut: Boolean
   


}
