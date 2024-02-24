import { InputType, Field } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-scalars';

@InputType()
export class UpdateShippingInput {

    @Field({ nullable: true })
    addressId?: number;

    @Field()
    shipping:string
    
   
}
