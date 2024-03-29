import { InputType, Field } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-scalars';

@InputType()
export class UpdateUserAgency {
  @Field({ nullable: true })
  agencyCode?: string;
}
