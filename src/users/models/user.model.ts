import 'reflect-metadata';
import {
  ObjectType,
  registerEnumType,
  HideField,
  Field,
} from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { Post } from '../../posts/models/post.model';
import { BaseModel } from '../../common/models/base.model';
import {  Role } from '@prisma/client';
import { BuyerData } from './buyer.model';

registerEnumType(Role, {
  name: 'Role',
  description: 'User role',
});

@ObjectType()
export class User extends BaseModel {


  @Field({ nullable: true })
  name: string;


  @Field({ nullable: true })
  email: string;

  @Field()
  role: Role;


  @Field({})
  buyer:BuyerData
  
   @HideField()
  password: string;
}

