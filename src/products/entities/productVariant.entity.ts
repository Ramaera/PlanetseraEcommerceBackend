import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class ProductVariant {
  @Field()
  id:number
  
  @Field(() => Float)
  weight: number;

  @Field(() => [String])
  imageUrl: string[];

  @Field(() => Float)
  price: number;

  @Field(() => Int,{nullable:true})
  stock: number;



  
 
}
