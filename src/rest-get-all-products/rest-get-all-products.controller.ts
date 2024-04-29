import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RestGetAllProductsService } from './rest-get-all-products.service';


@Controller('rest-get-all-products')
export class RestGetAllProductsController {
  constructor(private readonly restGetAllProductsService: RestGetAllProductsService) {}

  

  @Get('allProducts')
  findAll() {
    return this.restGetAllProductsService.findAll();
  }

}
