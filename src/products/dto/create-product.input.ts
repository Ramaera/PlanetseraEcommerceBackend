import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  title : string;
  
  @Field()
  description : string;

  @Field()
  productUrl: string

 
}
