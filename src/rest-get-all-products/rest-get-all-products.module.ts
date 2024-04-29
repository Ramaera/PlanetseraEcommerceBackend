import { Module } from '@nestjs/common';
import { RestGetAllProductsService } from './rest-get-all-products.service';
import { RestGetAllProductsController } from './rest-get-all-products.controller';

@Module({
  controllers: [RestGetAllProductsController],
  providers: [RestGetAllProductsService]
})
export class RestGetAllProductsModule {}
