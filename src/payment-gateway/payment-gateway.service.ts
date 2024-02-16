import { Injectable } from '@nestjs/common';
import { CreatePaymentGatewayDto } from './dto/create-payment-gateway.dto';
import { UpdatePaymentGatewayDto } from './dto/update-payment-gateway.dto';
import * as crypto from 'crypto';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PaymentGatewayService {
  constructor(private readonly configService: ConfigService) {}
  async newPayment(createPayment: CreatePaymentGatewayDto) {
    try {
      const merchantTransactionId = 'M' + Date.now();
      // const { buyer_id, price, email, name } = createPaymentGatewayDto;

      const data = {
        merchantId: 'PGTESTPAYUAT',
        merchantTransactionId: merchantTransactionId,
        merchantUserId: 'MUID' + '1234',
        name: 'RAJU',
        amount: 123 * 100,
        redirectUrl: `http://localhost:6770/api/v1/status/${merchantTransactionId}`,
        email: 'mohan@gmail.com',
        redirectMode: 'POST',

        paymentInstrument: {
          type: 'PAY_PAGE',
        },
      };

      const payload = JSON.stringify(data);
      const payloadMain = Buffer.from(payload).toString('base64');
      const keyIndex = 1;
      const string = payloadMain + '/pg/v1/pay' + process.env.SALT_KEY;
      const sha256 = crypto.createHash('sha256').update(string).digest('hex');
      const checksum = sha256 + '###' + keyIndex;
      const prod_URL =
        'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay';
      // const prod_URL = 'https://api.phonepe.com/apis/hermes/pg/v1/pay';
      console.log('-->', process.env.MERCHANT_ID);
      const options = {
        method: 'POST',
        url: prod_URL,
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          'X-VERIFY': checksum,
        },
        data: {
          request: payloadMain,
        },
      };
      console.log('here44', options);
      const response = await axios.request(options);
      console.log('reps', response.data.data.instrumentResponse);
      return response.data.data.instrumentResponse.redirectInfo.url;
    } catch (err) {
      console.log('000', err.message);
    }
  }

  async checkStatus(merchantTransactionId: string) {
    try {
      const merchantId = this.configService.get<string>('MERCHANT_ID');
      const keyIndex = 1;
      const string =
        `/pg/v1/status/${merchantId}/${merchantTransactionId}` +
        this.configService.get<string>('SALT_KEY');
      const sha256 = crypto.createHash('sha256').update(string).digest('hex');
      const checksum = sha256 + '###' + keyIndex;
      const options = {
        method: 'GET',
        url: `https://api.phonepe.com/apis/hermes/pg/v1/status/${merchantId}/${merchantTransactionId}`,
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          'X-VERIFY': checksum,
          'X-MERCHANT-ID': `${merchantId}`,
        },
      };
      const response = await axios.request(options);
      if (response.data.success === true) {
        return { success: true, message: 'Payment Success' };
      } else {
        return { success: false, message: 'Payment Failure' };
      }
    } catch (err) {
      console.log(err);
    }
  }

  findAll() {
    return `This action returns all paymentGateway`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentGateway`;
  }

  update(id: number, updatePaymentGatewayDto: UpdatePaymentGatewayDto) {
    return `This action updates a #${id} paymentGateway`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentGateway`;
  }
}
