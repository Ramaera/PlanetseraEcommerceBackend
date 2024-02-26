import { Test, TestingModule } from '@nestjs/testing';
import { RewardCodeResolver } from './reward-code.resolver';
import { RewardCodeService } from './reward-code.service';

describe('RewardCodeResolver', () => {
  let resolver: RewardCodeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RewardCodeResolver, RewardCodeService],
    }).compile();

    resolver = module.get<RewardCodeResolver>(RewardCodeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
