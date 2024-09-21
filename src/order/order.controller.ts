import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('/:id')
  async getTotalOrderAmountForAgency(@Param('id') id: string) {
    return await this.orderService.findOne(id);
  }
}