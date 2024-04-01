import { InputType, Field } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-scalars';

@InputType()
export class UpdateShiprocketrInput {
  @Field(() => [GraphQLJSONObject], { nullable: true })
  metaData?: any;

  @Field()
  id: string;
}
