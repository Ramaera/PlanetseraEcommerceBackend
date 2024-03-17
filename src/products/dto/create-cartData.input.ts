import { InputType, Int, Field } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-scalars';
import { json } from 'stream/consumers';

@InputType()
export class CreateCartInput {
 
  @Field()
  name:string
   
  @Field()
  productVariantId: number;
  
  @Field()
  qty: number;

  @Field()
  buyerId: string;

  @Field()
  weight: string;
}
