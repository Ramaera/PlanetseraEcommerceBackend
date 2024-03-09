import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql';
import { CreateProductVariantInput } from './create-productVariant.input';
import { GraphQLJSONObject } from 'graphql-scalars';




@InputType()
export class CreateProductInput {
  @Field()
  title : string;
  
  @Field()
  description : string;

  @Field()
  productImageUrl : string;

  @Field(() => [GraphQLJSONObject], { nullable: true })
  metaData?: any[];

  @Field()
  Flipkart:boolean

  @Field()
  Amazon:boolean

  @Field()
  productUrl: string

  @Field(() => [String])
  category: string[]; 

  @Field()
  type:string

}
