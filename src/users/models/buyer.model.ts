import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Cart } from 'src/products/entities/cartData.entity';
import { User } from './user.model';

@ObjectType()
class UserData {
  @Field(() => String)
  name: string;
}

@ObjectType()
export class BuyerData {
  @Field()
  id: string;

  @Field()
  userId: string;



  @Field(() => [Cart], { nullable: true })
  Cart: Cart[];
}
