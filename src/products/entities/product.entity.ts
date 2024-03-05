import { ObjectType, Field, Int } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-scalars';
import { ProductVariant } from './productVariant.entity';
import { MetaDataOutput } from './productMetaData.entity';

@ObjectType()
export class Product {

@Field()
id:string

@Field()
title:string;

@Field()
description:string

@Field(()=>[ProductVariant])
ProductsVariant:ProductVariant[]

@Field(()=>MetaDataOutput)
metaData:MetaDataOutput[]

@Field(()=>[String],{ nullable: true })
category:string[]

@Field({nullable:true})
Amazon:boolean
 
@Field({nullable:true})
Flipkart:boolean

@Field({nullable:true})
productImageUrl:string

@Field({nullable:true})
productUrl:string

@Field()
type:string


}
