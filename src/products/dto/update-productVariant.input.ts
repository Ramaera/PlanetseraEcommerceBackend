import { InputType, Field, Float, Int, registerEnumType } from '@nestjs/graphql';

@InputType()
export class UpdateProductVariantInput {

    
  @Field(() => Int)
  weight: number;

  @Field(() => Int)
  id: number;
  
  @Field(() => [String])
  imageUrl: string[];

  @Field(() => Float)
  price: number;

  @Field(() => Int)
  stock: number;
}
