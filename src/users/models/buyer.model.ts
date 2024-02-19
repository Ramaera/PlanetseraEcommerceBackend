import {
  ObjectType,

  Field,
  ID,
} from '@nestjs/graphql';




@ObjectType()
export class BuyerData{
    @Field(() => String)
    id: string;

    @Field(() => String)
    userId: string;




}

