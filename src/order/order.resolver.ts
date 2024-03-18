import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { Order } from './entities/order.entity';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { PaymentData } from 'src/products/entities/paymentData.entity';
import { CreateOrderPayment } from 'src/products/dto/create-OrderPayment.input';


@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly   orderService: OrderService) {}

  // @Mutation(() => Order)
  // createOrder(@Args('createOrderInput') createOrderInput: CreateOrderInput) {
  //   return this.orderService.create(createOrderInput);
  // }

  @Mutation(() => Order)
  async createOrder(@Args('CreateOrder') createOrderInput: CreateOrderInput) {
    const { newOrder, orderItems } = await this.orderService.createOrder(
      createOrderInput,
    );

    return {
      newOrder,
      orderItems,
    };
  }

  @Mutation(() => PaymentData)
  async createPaymentData(@Args('data') data: CreateOrderPayment) {
    const paymentData = await this.orderService.createPaymentData(data);
    return paymentData;
  }

  
 

  @Query(() => [Order], { name: 'order' })
  findAll() {
    return this.orderService.findAll();
  }

  @Query(() => Order, { name: 'order' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.orderService.findOne(id);
  }

  @Mutation(() => Order)
  updateOrder(@Args('updateOrderInput') updateOrderInput: UpdateOrderInput) {
    return this.orderService.update(updateOrderInput.id, updateOrderInput);
  }

  @Mutation(() => Order)
  removeOrder(@Args('id', { type: () => Int }) id: number) {
    return this.orderService.remove(id);
  }
}
