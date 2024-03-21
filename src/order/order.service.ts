import { Injectable } from '@nestjs/common';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { PrismaService } from 'nestjs-prisma';
import { CreateOrderPayment } from 'src/products/dto/create-OrderPayment.input';
import { Prisma } from '@prisma/client';

const DateInGmt530 = () => {
  // Create a new Date object for the current date and time
  const currentDate = new Date();

  // Get the current time in milliseconds since January 1, 1970
  const currentTimeInMilliseconds = currentDate.getTime();

  // Calculate the offset in milliseconds for GMT+5:30 (5 hours and 30 minutes)
  const offsetInMilliseconds = 5.5 * 60 * 60 * 1000;

  // Apply the offset to the current time
  const newDateWithOffset = new Date(
    currentTimeInMilliseconds + offsetInMilliseconds,
  );

  return newDateWithOffset;
};

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  async createOrder(createOrderVariantInput: CreateOrderInput) {
    try {
      console.log('cretate order');
      const cartData = await this.prisma.cartItems.findMany({
        where: {
          cartId: createOrderVariantInput.cartId,
        },
      });
      const newOrder = await this.prisma.order.create({
        data: {
          orderAmount: createOrderVariantInput.orderAmount,
          AddresId: createOrderVariantInput.AddressId,
          ShippingCost: createOrderVariantInput.ShippingCost,
          cartid: createOrderVariantInput.cartId,
          buyerId: createOrderVariantInput.buyerId,
          discountCode: createOrderVariantInput.discountCode,
          metaData: createOrderVariantInput.metaData,
          discountedAmount: createOrderVariantInput.discountedAmount,
          userId:createOrderVariantInput.userId
        },
        include: {
          address: true,
          orderItems: true,
          user:true
        },
      });
      const orderItems = await Promise.all(
        cartData.map(async (cartItem) => {
          const createdOrderItem = await this.prisma.orderItems.create({
            data: {
              name: cartItem.name,
              orderId: newOrder.id,
              productVariantId: cartItem.productVariantId,
              qty: cartItem.qty,
            },
          });
          const productVariant = await this.prisma.productVariant.findUnique({
            where: {
              id: cartItem.productVariantId,
            },
          });
          if (productVariant) {
            await this.prisma.productVariant.update({
              where: {
                id: cartItem.productVariantId,
              },
              data: {
                stock: productVariant.stock - cartItem.qty,
              },
            });
          }
          return createdOrderItem;
        }),
      );
      return { newOrder, orderItems };
    } catch (error) {
      console.error('Error creating new order:', error);
      throw new Error('Could not create order ');
    }
  }

  async createPaymentData(data: CreateOrderPayment) {
    return await this.prisma.payment.create({
      data: {
        buyerId: data.buyerId,
        orderId: data.orderId,
        paymentId: data.paymentId,
        dateOfPayment: DateInGmt530(),
      },
    });
  }

  async sendOrderConfirmationMail(OrderItemId) {
    const orderData = await this.prisma.order.findUnique({
      where: {
        id: OrderItemId,
      },
      include: {
        address: true,
        Payment: true,
        orderItems: true,
      },
    });

    // await this.mailService.sendOrderConfirmation(orderData.a);
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderInput: UpdateOrderInput) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
