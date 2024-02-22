import { InputType, Field, Float, Int } from '@nestjs/graphql';

@InputType()
export class CreateProductVariantInput {
  @Field(() => String)
  ProductId: string;
    
  @Field(() => String)
  weight: string;

  @Field(() => [String])
  imageUrl: string[];

  @Field(() => Float)
  price: number;

  @Field(() => Int)
  stock: number;
}
