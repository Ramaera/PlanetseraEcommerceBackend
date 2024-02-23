import { ObjectType, Field, Int,Float } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-scalars';
import { ProductVariant } from './productVariant.entity';
import { AddressData } from 'src/users/models/address.model';
import { OrderItems } from './orderItem.entity';






@ObjectType()
 class OrderData {

   
  @Field()
  address: AddressData;

  @Field()
  orderDate: Date;

  @Field()
  buyerId:string


 



} 

@ObjectType()
export class Order {

   
  @Field(()=>[OrderData],{nullable:true})
  newOrder: OrderData[] | null;

  @Field(()=>[OrderItems],{nullable:true}) 
  orderItems: OrderItems[] | null;

  



}
