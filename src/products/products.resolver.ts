import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { ProductVariant } from './entities/productVariant.entity';
import { Cart } from './entities/cartData.entity';
import { CreateProductInput } from './dto/create-product.input';
import { CreateProductVariantInput } from './dto/create-productVariant.input';
import { CreateCartInput } from './dto/create-cartData.input';
import { UpdateProductInput } from './dto/update-product.input';
import { CartOperationInput } from './dto/operation-cartItem.input';
import { MessageOutput } from './entities/message.entity';
import { AllOrdersData } from './entities/viewallorders.entity';
import { CreateOrderPayment } from './dto/create-OrderPayment.input';
import { PaymentData } from './entities/paymentData.entity';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    return this.productsService.create(createProductInput);
  }

  @Query(() => [Product], { name: 'allProducts' })
  async findAll() {
    return await this.productsService.findAll();
  }

  // @Query(() => Order, { name: 'allOrders' })
  // async findAllOrders() {
  //   return await this.productsService.findAllOrders();
  // }

  @Query(() => [AllOrdersData], { name: 'allOrders' })
  async findAllOrders(@Args('buyerId') buyerId: string) {
    const orders = await this.productsService.findAllOrders(buyerId);
    return orders.map((order) => ({
      ...order,
      orderItems: order.orderItems || [],
      address: order.address,
    }));
  }


  @Query(() => [AllOrdersData], { name: 'getallOrders' })
  async getAllOrders() {
    const orders = await this.productsService.getAllOrders();
    // return orders.map((order) => ({
    //   ...order,
    //   orderItems: order.orderItems,
    //   address: order.address,
    //   Payment:order.Payment
      
    // }));
    return orders
  }

  @Query(() => Cart, { name: 'viewCart' })
  async allCartItems(@Args('buyerId') buyerId: string) {
    return await this.productsService.allCartItems(buyerId);
  }

  @Mutation(() => ProductVariant)
  createProductVariant(
    @Args('CreateProductVariantInput')
    createProductVariantInput: CreateProductVariantInput,
  ) {
    return this.productsService.createProductVariant(createProductVariantInput);
  }

  // @Mutation(() => Order)
  // async updateOrder(
  //   @Args('id') orderId: string,
  //   @Args('paymentStatus') paymentStatus: string,
  // ) {
  //   return this.productsService.updateOrderPaymentStatus(
  //     orderId,
  //     paymentStatus,
  //   );
  // }

  @Mutation(() => PaymentData)
  async createPaymentData(@Args('data') data: CreateOrderPayment) {
    const paymentData = await this.productsService.createPaymentData(data);
    return paymentData;
  }

  @Query(() => PaymentData, { name: 'findPaymentData' })
  async findPaymentData(@Args('merchantTransactionId') id: string) {
    return await this.productsService.findPaymentData(id);
  }

  @Mutation(() => Cart)
  async createCart(@Args('createCartInput') createCartInput: CreateCartInput) {
    return this.productsService.addItemToCart(createCartInput);
  }

  @Mutation(() => MessageOutput)
  cartOpeartion(
    @Args('CartOperationInput') cartOperationInput: CartOperationInput,
  ) {
    return this.productsService.operationsInCart(cartOperationInput);
  }

  @Mutation(() => Cart)
  updateCart(@Args('data') data: UpdateProductInput) {
    const cartData = this.productsService.updateCartItem(data);
    return cartData;
  }

  @Mutation(() => MessageOutput)
  async removeItemFromCart(@Args('cartItem') cartItemId: string) {
    return await this.productsService.removeItemFromCart(cartItemId);
  }

  @Mutation(() => MessageOutput)
  async removeAddress(@Args('AddressId') addressId: number) {
    return await this.productsService.removeAddress(addressId);
  }

  @Mutation(() => MessageOutput)
  async deleteCart(@Args('cartId') cartId: string) {
    return await this.productsService.deleteCart(cartId);
  }
}
