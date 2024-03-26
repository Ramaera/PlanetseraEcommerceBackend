import { Test, TestingModule } from '@nestjs/testing';
import { UsersInAAgencyService } from './users-in-a-agency.service';

describe('UsersInAAgencyService', () => {
  let service: UsersInAAgencyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersInAAgencyService],
    }).compile();

    service = module.get<UsersInAAgencyService>(UsersInAAgencyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
