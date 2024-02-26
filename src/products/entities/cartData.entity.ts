import { ObjectType, Field, Int } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-scalars';
import { ProductVariant } from './productVariant.entity';

@ObjectType()
export class Cart {
  @Field(() => String, { nullable: true })
  id: string;

  @Field(() => String, { nullable: true })
  buyerId: string;

  @Field(() => [CartItems], { nullable: true })
  cartItem?: CartItems[];
}

@ObjectType()
class CartItems {
  @Field()
  id: string;

  @Field(() => Int)
  qty: number;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => Int)
  productVariantId: number;
}
