import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { ProductVariant } from 'src/products/entities/productVariant.entity';
import { AddressData } from 'src/users/models/address.model';

@ObjectType()
export class OrderItems {
  @Field()
  productVariantId: number;

  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  qty: number;
}
