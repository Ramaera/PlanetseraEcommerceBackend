import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { allProducts } from './entities/allProducts.entity';
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
import { UpdateProductVariantInput } from './dto/update-productVariant.input';
import { UpdateProductDetailsInput } from './dto/update-ProductDetails.input';
import { UpdatedProduct } from './entities/updatedProducts.entity';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}



 

  @Mutation(() => Product)
  async createProduct(
      @Args('input') createProductInput: CreateProductInput,
  ) {
      try {
          return await this.productsService.createProduct(createProductInput);
      } catch (error) {
          console.error('Error creating product with variants:', error);
          throw new Error('Could not create product with variants');
      }
  }

    @Mutation(() => ProductVariant)
  createProductVariant(
    @Args('CreateProductVariantInput')
    createProductVariantInput: CreateProductVariantInput,
  ) {
    return this.productsService.createProductVariant(createProductVariantInput);
  }

  @Mutation(() => UpdatedProduct)
  updateProductDetails(@Args('data') data: UpdateProductDetailsInput) {
    const UpdatedProductDetails = this.productsService.updateProductDetails(data);
    return UpdatedProductDetails;
  }

  @Mutation(() => ProductVariant)
  updateProductVariant(@Args('data') data: UpdateProductVariantInput) {
    const updatedProductVariant = this.productsService.updateProductVariant(data);
    return updatedProductVariant;
  }
  
  


  @Query(() => [allProducts], { name: 'allProducts' })
  async findAll() {
    return await this.productsService.findAll();
  }


  @Query(() => [AllOrdersData], { name: 'allOrders' })
  async findAllOrders(@Args('buyerId') buyerId: string) {
    const orders = await this.productsService.findAllOrders(buyerId);
    return orders.map((order) => ({
      ...order,
      orderItems: order.orderItems || [],
      address: order.address,
      shipRocketDetails:order.shipRocketDetails
    }));
  }

  @Query(() => [AllOrdersData], { name: 'getallOrders' })
  async getAllOrders() {
    const orders = await this.productsService.getAllOrders();
    return orders;
  }

  @Query(() => Cart, { name: 'viewCart' })
  async allCartItems(@Args('buyerId') buyerId: string) {
    return await this.productsService.allCartItems(buyerId);
  }




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


