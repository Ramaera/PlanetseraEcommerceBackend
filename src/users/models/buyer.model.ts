import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Cart } from 'src/products/entities/cartData.entity';

@ObjectType()
export class BuyerData {
  @Field(() => String)
  id: string;

  @Field(() => String)
  userId: string;

  @Field(() => [Cart], { nullable: true })
  Cart: Cart[];
}
