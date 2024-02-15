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



@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Mutation(() => Product)
  createProduct(@Args('createProductInput') createProductInput: CreateProductInput) {
    return this.productsService.create(createProductInput);
  }

  @Query(() => [Product], { name: 'allProducts' })
  async findAll() {
    return await this.productsService.findAll();
  }



  @Query(() => [Cart], { name: 'viewCart' })
  async allCartItems(
    @Args ('buyerId') buyerId:string
  ) {
    return await this.productsService.allCartItems(buyerId);
  }



  @Mutation(() => ProductVariant)
  createProductVariant(@Args('CreateProductVariantInput') createProductVariantInput: CreateProductVariantInput) {
    return this.productsService.createProductVariant(createProductVariantInput);
  }
  @Mutation(() => Order)
  createOrder(@Args('CreateOrder') createOrderInput: CreateOrderInput) {
    return this.productsService.createOrder(createOrderInput)
  }


@Mutation(()=>Cart)
createCart(@Args("CreateCartInput")createCartInput:CreateCartInput){
  return this.productsService.createCart(createCartInput)
}



  

}
