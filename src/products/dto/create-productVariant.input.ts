import { InputType, Field, Float, Int } from '@nestjs/graphql';

@InputType()
export class CreateProductVariantInput {
  @Field(() => String)
  ProductId: string;
    
  @Field(() => Float)
  weight: number;

  @Field(() => [String])
  imageUrl: string[];

  @Field(() => Float)
  price: number;

  @Field(() => Int)
  stock: number;
}
