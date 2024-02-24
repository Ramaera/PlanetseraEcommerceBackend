import { InputType, Field, ObjectType } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-scalars';

@ObjectType()
export class ShippingData {

    @Field({ nullable: true })
    addressId?: number;

    @Field()
    shipping:string
    
    @Field()
    shippingCost: number
}
