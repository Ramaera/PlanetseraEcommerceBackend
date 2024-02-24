import { ObjectType, Field, Int,Float, registerEnumType } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-scalars';
import { ProductVariant } from './productVariant.entity';
import { AddressData } from 'src/users/models/address.model';
import { OrderItems } from './orderItem.entity';
import { OrderStatus,  } from '@prisma/client';

registerEnumType(OrderStatus, {
    name: 'Status',
    description: 'Order Status',
  });




@ObjectType()
export class AllOrdersData {

   
  @Field(()=>AddressData,{nullable:true})
  address: AddressData

  @Field(()=>[OrderItems],{nullable:true}) 
  orderItems: OrderItems[] | null;

  @Field(()=>Float,{})
  orderAmount:number

  @Field()
  orderDate:Date

  @Field()
  id:string

  @Field()
  ShippingCost:number

  @Field()
  status:OrderStatus
 



} 


  



