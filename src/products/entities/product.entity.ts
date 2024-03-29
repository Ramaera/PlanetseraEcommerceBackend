import { ObjectType, Field, Int } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-scalars';
import { ProductVariant } from './productVariant.entity';

@ObjectType()
 class ProductDetails{

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

@Field()
type:string

@Field(() => [GraphQLJSONObject], { nullable: true })
metaData?: any;

}

@ObjectType()
export class Product {


@Field(()=>ProductDetails)
newProduct:ProductDetails

}
