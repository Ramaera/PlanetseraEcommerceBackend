import { Module } from '@nestjs/common';
import { RewardCodeService } from './reward-code.service';
import { RewardCodeResolver } from './reward-code.resolver';
import { RewardCodeController } from './rest-reward.controller';

@Module({
  providers: [RewardCodeResolver, RewardCodeService],
  controllers: [RewardCodeController]
})
export class RewardCodeModule {}
