import { Test, TestingModule } from '@nestjs/testing';
import { GetImagesController } from './get-images.controller';

describe('GetImagesController', () => {
  let controller: GetImagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetImagesController],
    }).compile();

    controller = module.get<GetImagesController>(GetImagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
