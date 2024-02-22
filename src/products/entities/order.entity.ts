import { ObjectType, Field, Int,Float } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-scalars';
import { ProductVariant } from './productVariant.entity';

@ObjectType()
export class Order {

   
  @Field()
  orderDate: Date;

  @Field(() => Float) 
  orderAmount: number;

  @Field()
  buyerId:string

  @Field()
  cartItemid:string
 



}
