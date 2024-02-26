import { Injectable } from '@nestjs/common';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { PrismaService } from 'nestjs-prisma';

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

      console.log('cartData', cartData);
      const newOrder = await this.prisma.order.create({
        data: {
          orderAmount: createOrderVariantInput.orderAmount,
          AddresId: createOrderVariantInput.AddressId,
          ShippingCost: createOrderVariantInput.ShippingCost,
          cartid: createOrderVariantInput.cartId,
          buyerId: createOrderVariantInput.buyerId,
        },
        include: {
          address: true,
          orderItems: true,
        },
      });

      const orderItems = await Promise.all(
        cartData.map(async (cartItem) => {
          return await this.prisma.orderItems.create({
            data: {
              name: cartItem.name,
              orderId: newOrder.id,
              productVariantId: cartItem.productVariantId,
              qty: cartItem.qty,
            },
          });
        }),
      );

      return { newOrder, orderItems };
    } catch (error) {
      console.error('Error creating new order:', error);
      throw new Error('Could not create order ');
    }
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
