import { InputType, Field, Float, Int, registerEnumType } from '@nestjs/graphql';
// import { WeightInGram } from '@prisma/client';


// registerEnumType(WeightInGram, {
//   name: 'Weight',
//   description: 'Products Variant Weight',
// });
@InputType()
export class CreateProductVariantInput {

    
  @Field(() => Int)
  weight: number;

  @Field(() => [String])
  imageUrl: string[];

  @Field(() => Float)
  price: number;

  @Field(() => Int)
  stock: number;
}
