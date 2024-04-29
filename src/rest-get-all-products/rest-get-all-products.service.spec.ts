import { Test, TestingModule } from '@nestjs/testing';
import { RestGetAllProductsService } from './rest-get-all-products.service';

describe('RestGetAllProductsService', () => {
  let service: RestGetAllProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestGetAllProductsService],
    }).compile();

    service = module.get<RestGetAllProductsService>(RestGetAllProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
