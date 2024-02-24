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
      const merchantTransactionId = 'PL' + Date.now();
      // const { buyer_id, price, email, name } = createPayment;
      console.log(createPayment);

      const data = {
        merchantId: 'M22VCKEIOPT4Z',
        merchantTransactionId: merchantTransactionId,
        merchantUserId: 'MUID' + '12',
        name: 'Mohan',
        amount: 1 * 100,
        redirectUrl: `https://planetseraapi.planetsera.com/api/v1/status/${merchantTransactionId}`,
        email: 'mohansharma916@gmail.com',
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
      const prod_URL = 'https://api.phonepe.com/apis/hermes/pg/v1/pay';
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
      const response = await axios.request(options);
      return response.data.data.instrumentResponse.redirectInfo.url;
    } catch (err) {
      console.log('000', err.message);
    }
  }

  async checkStatus(merchantTransactionId: string) {
    try {
      console.log('here insdide');
      const merchantId = 'M22VCKEIOPT4Z';
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

  async checkStatusWithInterval(merchantTransactionId: string) {
    const maxTimeout = 15 * 60 * 1000; // Timeout after 15 minutes
    let timeout = 0;
    const intervals = [
      25 * 1000, // First check after 20-25 seconds
      3 * 1000, // Then every 3 seconds for 30 seconds
      6 * 1000, // Then every 6 seconds for 60 seconds
      10 * 1000, // Then every 10 seconds for 60 seconds
      30 * 1000, // Then every 30 seconds for 60 seconds
      60 * 1000, // Then every 1 minute until timeout
    ];

    for (const interval of intervals) {
      timeout += interval;
      await new Promise<void>((resolve) => setTimeout(resolve, interval));

      const status = await this.checkStatus(merchantTransactionId);
      console.log(status);
      if (status.success === true || timeout >= maxTimeout) {
        return status;
      }
    }

    return { success: false, message: 'Payment status check timeout' };
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
