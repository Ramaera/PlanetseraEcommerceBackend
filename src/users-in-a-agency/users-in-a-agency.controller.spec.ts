import { Test, TestingModule } from '@nestjs/testing';
import { UsersInAAgencyController } from './users-in-a-agency.controller';
import { UsersInAAgencyService } from './users-in-a-agency.service';

describe('UsersInAAgencyController', () => {
  let controller: UsersInAAgencyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersInAAgencyController],
      providers: [UsersInAAgencyService],
    }).compile();

    controller = module.get<UsersInAAgencyController>(UsersInAAgencyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
