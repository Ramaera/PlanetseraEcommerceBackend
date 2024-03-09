import { GraphQLJSONObject } from 'graphql-scalars';
import { InputType, Field, Int, PartialType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UpdatedProduct {
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  id?: string;
  
  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  productImageUrl?: string;

  @Field(() => [GraphQLJSONObject], { nullable: true })
  metaData?: any[];

  @Field({ nullable: true })
  Flipkart?: boolean;

  @Field({ nullable: true })
  Amazon?: boolean;

  @Field({ nullable: true })
  productUrl?: string;

  @Field(() => [String], { nullable: true })
  category?: string[]; 

  @Field({ nullable: true })
  type?: string;
}
