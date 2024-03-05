import { InputType, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MetaDataOutput {
  @Field()
  usage: string;

  @Field()
  ingredients: string;

  @Field()
  healthBenefits: string;

  @Field()
  productBg: string;

  @Field()
  colored: string;

  @Field()
  colored2: string;

  @Field()
  inactiveBtn: string;

  @Field()
  inactiveBtn2: string;

  @Field()
  bgColor: string;

  @Field()
  flipkart50: string;

  @Field()
  flipkart100: string;

  @Field()
  flipkart500: string;

  @Field(() => [FaqInput])
  faqs: FaqInput[];
}

@ObjectType()
class FaqInput {
  @Field()
  question: string;

  @Field()
  answer: string;
}
