import { Controller, Post, Body } from '@nestjs/common';
import { RewardCodeService } from './reward-code.service';
import { CreateRewardCodeInput } from './dto/create-reward-code.input';


@Controller('reward-code')
export class RewardCodeController {
    constructor(private readonly rewardCodeService: RewardCodeService) {}

    @Post('submit')
    create(@Body() createRewardCodeInput: CreateRewardCodeInput) {
      return this.rewardCodeService.create(createRewardCodeInput)
    }

   
  }


   





