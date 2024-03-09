import { InputType, Field, Float, Int, registerEnumType } from '@nestjs/graphql';

@InputType()
export class CreateProductVariantInput {

    
  @Field()
  weight: string;

    
  @Field()
  productId: string;
  

  @Field(() => [String])
  imageUrl: string[];

  @Field(() => Float)
  price: number;

  @Field(() => Int)
  stock: number;
}
