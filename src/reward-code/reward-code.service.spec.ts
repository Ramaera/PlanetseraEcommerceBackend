import { Test, TestingModule } from '@nestjs/testing';
import { RewardCodeService } from './reward-code.service';

describe('RewardCodeService', () => {
  let service: RewardCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RewardCodeService],
    }).compile();

    service = module.get<RewardCodeService>(RewardCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
