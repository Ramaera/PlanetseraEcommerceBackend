import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql';
import { CreateProductVariantInput } from './create-productVariant.input';
import { MetaDataInput } from './create-productMetadata.input';
// import { CategoryOfProducts, ProductType } from '@prisma/client';


// registerEnumType(CategoryOfProducts, {
//   name: 'category',
//   description: 'category of products',
// });
// registerEnumType(ProductType, {
//   name: 'Type',
//   description: 'ProductType',
// });

@InputType()
export class CreateProductInput {
  @Field()
  title : string;
  
  @Field()
  description : string;

  @Field()
  productImageUrl : string;

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

  @Field(() => [CreateProductVariantInput])
  ProductsVariant: CreateProductVariantInput[];

  @Field(() => [MetaDataInput])
  metaData: MetaDataInput[];
}
