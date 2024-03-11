import { ObjectType, Field, Int } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-scalars';
import { ProductVariant } from './productVariant.entity';

@ObjectType()
export  class allProducts{

@Field()
id:string

@Field()
title:string;

@Field()
description:string

@Field(()=>[String])
category:string[]

@Field()
Amazon:boolean
 
@Field()
Flipkart:boolean

@Field()
productImageUrl:string

@Field()
productUrl:string

@Field({nullable:true})
type:string

@Field(()=>[ProductVariant])
ProductsVariant:ProductVariant[]

@Field(() => [GraphQLJSONObject], { nullable: true })
metaData?: any;

@Field()
isActive:boolean

}




