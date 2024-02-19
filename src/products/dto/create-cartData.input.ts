import { InputType, Int, Field } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-scalars';
import { json } from 'stream/consumers';

@InputType()
export class CreateCartInput {


@Field()

  @Field(()=>(Int))
  itemCount : number;



 @Field(() => [GraphQLJSONObject],)
 cartItem?: any[];
  @Field()
  buyerId   : string

  @Field(()=>(Int))
  productVariantId : number

  @Field()
  checkedOut: Boolean
 
 
}
