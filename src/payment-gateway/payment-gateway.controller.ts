import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PaymentGatewayService } from './payment-gateway.service';
import { CreatePaymentGatewayDto } from './dto/create-payment-gateway.dto';
import { UpdatePaymentGatewayDto } from './dto/update-payment-gateway.dto';

@Controller('/api')
export class PaymentGatewayController {
  constructor(private readonly paymentGatewayService: PaymentGatewayService) {}

  @Post('/pay')
  create() {
    return this.paymentGatewayService.newPayment();
  }

  @Get()
  findAll() {
    return this.paymentGatewayService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentGatewayService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePaymentGatewayDto: UpdatePaymentGatewayDto,
  ) {
    return this.paymentGatewayService.update(+id, updatePaymentGatewayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentGatewayService.remove(+id);
  }
}
