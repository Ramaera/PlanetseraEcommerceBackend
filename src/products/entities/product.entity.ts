import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field()
 title:string;
 @Field()
 description:string
 
}
