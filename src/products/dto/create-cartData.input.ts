import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCartInput {
  @Field(()=>(Int))
  itemCount : number;

 

  @Field()
  buyerId   : string

  @Field(()=>(Int))
  productVariantId : number

  @Field()
  checkedOut: Boolean
 
 
}
