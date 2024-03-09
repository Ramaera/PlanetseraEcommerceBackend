import { InputType, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MetaDataOutput {
  @Field({nullable:true})
  usage: string;

  @Field({nullable:true})
  ingredients: string;

  @Field({nullable:true})
  healthBenefits: string;

  @Field({nullable:true})
  productBg: string;

  @Field({nullable:true})
  colored: string;

  @Field({nullable:true})
  colored2: string;

  @Field({nullable:true})
  inactiveBtn: string;

  @Field({nullable:true})
  inactiveBtn2: string;

  @Field({nullable:true})
  bgColor: string;

  @Field({nullable:true})
  amazon50: string;

  @Field({nullable:true})
  amazon100: string;

  @Field({nullable:true})
  amazon500: string;

  @Field({nullable:true})
  flipkart50: string;

  @Field({nullable:true})
  flipkart100: string;

  @Field({nullable:true})
  flipkart500: string;

  
  @Field(() => [FaqOutput], { nullable: true })
  faqs: FaqOutput[];
  
}

@ObjectType()
class FaqOutput {
  @Field({nullable:true})
  question: string;

  @Field({nullable:true})
  answer: string;
}
