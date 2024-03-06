import { InputType, Field } from '@nestjs/graphql';






@InputType()
class FaqInput {
  @Field()
  question: string;

  @Field()
  answer: string;
}

@InputType()
export class MetaDataInput {
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
  amazon50: string;

  @Field()
  amazon100: string;

  @Field()
  amazon500: string;

  @Field()
  flipkart50: string;

  @Field()
  flipkart100: string;

  @Field()
  flipkart500: string;

  @Field(() => [FaqInput])
  faqs: FaqInput[];
}

