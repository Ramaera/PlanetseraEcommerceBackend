import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { OrderController } from './order.controller';

@Module({
  controllers: [OrderController],
  providers: [OrderResolver, OrderService],
})
export class OrderModule {}
