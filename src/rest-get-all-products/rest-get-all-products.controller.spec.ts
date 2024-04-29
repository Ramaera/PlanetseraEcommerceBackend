import { Test, TestingModule } from '@nestjs/testing';
import { RestGetAllProductsController } from './rest-get-all-products.controller';
import { RestGetAllProductsService } from './rest-get-all-products.service';

describe('RestGetAllProductsController', () => {
  let controller: RestGetAllProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestGetAllProductsController],
      providers: [RestGetAllProductsService],
    }).compile();

    controller = module.get<RestGetAllProductsController>(RestGetAllProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
