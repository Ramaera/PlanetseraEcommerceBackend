import { PartialType } from '@nestjs/swagger';
import { CreateRestGetAllProductDto } from './create-rest-get-all-product.dto';

export class UpdateRestGetAllProductDto extends PartialType(CreateRestGetAllProductDto) {}
