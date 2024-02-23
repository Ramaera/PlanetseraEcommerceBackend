import { ObjectType, Field, Int,Float } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-scalars';
import { ProductVariant } from './productVariant.entity';
import { AddressData } from 'src/users/models/address.model';

@ObjectType()
export class OrderItems {

   
  @Field()
  productVariantId: number;

  
  @Field()
  qty: number;



}
