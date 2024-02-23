import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { ProductVariant } from './entities/productVariant.entity';
import { Order } from './entities/order.entity';
import { Cart } from './entities/cartData.entity';
import { CreateProductInput } from './dto/create-product.input';
import { CreateProductVariantInput } from './dto/create-productVariant.input';
import { CreateCartInput } from './dto/create-cartData.input';
import { CreateOrderInput } from './dto/create-Order.input';
import { UpdateProductInput } from './dto/update-product.input';
import { CartOperationInput } from './dto/operation-cartItem.input';
import { MessageOutput } from './entities/message.entity';
import { OrderItems } from './entities/orderItem.entity';
import { AllOrdersData } from './entities/viewallorders.entity';

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


  @Query(() =>  [AllOrdersData], { name: 'allOrders' })
  async findAllOrders(@Args('buyerId') buyerId: string){
    const orders = await this.productsService.findAllOrders(buyerId);
    return orders.map(order => ({
      ...order,
      orderItems: order.orderItems || [], 
      address:order.address
    }));
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


  @Mutation(() => Order)
  async createOrder(@Args('CreateOrder') createOrderInput: CreateOrderInput) {
    const {newOrder,orderItems}= await this.productsService.createOrder(createOrderInput);
    return {
      newOrder,orderItems
    }
  }

  @Mutation(() => MessageOutput)
  createCart(@Args('CreateCartInput') createCartInput: CreateCartInput) {
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
