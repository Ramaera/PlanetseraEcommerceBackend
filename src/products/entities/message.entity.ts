import { ObjectType, Field, Int } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-scalars';
import { ProductVariant } from './productVariant.entity';

@ObjectType()
export class MessageOutput {



    @Field(()=>Boolean)
    success : boolean;

 
  
    
   


}
