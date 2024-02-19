import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { CreateProductVariantInput } from './dto/create-productVariant.input';
import { CreateCartInput } from './dto/create-cartData.input';
import { CreateOrderInput } from './dto/create-Order.input';
import { UpdateProductInput } from './dto/update-product.input';
import { PrismaService } from 'nestjs-prisma';
import { BuyerData } from 'src/users/models/buyer.model';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma:PrismaService){}
  async create(createProductInput: CreateProductInput) {
    try {
        
        const newProduct = await this.prisma.products.create({
          data:{
            title:createProductInput.title,
            description:createProductInput.description,
            productUrl:createProductInput.productUrl
            
          }
        });
        
        
        
        return newProduct;
    } catch (error) {
       
        console.error('Error creating product:', error);
        throw new Error('Could not create product');
    }
}
async createProductVariant(createProductVariantInput: CreateProductVariantInput) {
  try {
      
      const newProductVariant = await this.prisma.productVariant.create({
        data:{
          productId:createProductVariantInput.ProductId,
          weight : createProductVariantInput.weight,
          imageUrl :createProductVariantInput.imageUrl,
          price  :createProductVariantInput.price,
          stock:createProductVariantInput.stock
          
        }
      });
      
      
      
      return newProductVariant;
  } catch (error) {
     
      console.error('Error creating product variant:', error);
      throw new Error('Could not create product variant');
  }
}

async createCart(createCartInput: CreateCartInput) {
  try {
    const existingCart = await this.prisma.cart.findFirst({
      where: {
        buyerId: createCartInput.buyerId,
        checkedOut: false
      }
    });
    const getProductVarinatDetails = await this.prisma.productVariant.findUnique({
      where: {
        id: createCartInput.productVariantId
      }
    });
   

    if (existingCart) {
      console.log("existingCart",existingCart)
      let  indexOfProduct = existingCart.productVariantIds.findIndex(id => id === createCartInput.productVariantId);
      let updatedItemCount = existingCart.itemCount;

      console.log("existingProduct index",indexOfProduct)
      if(indexOfProduct>=0){
        updatedItemCount[indexOfProduct]= updatedItemCount[indexOfProduct] + createCartInput.itemCount;
      }else{
        existingCart.productVariantIds.push(createCartInput.productVariantId);
        existingCart.itemCount.push(createCartInput.itemCount);
      }

      const updatedSubTotal = existingCart.subTotal+ (createCartInput.itemCount* getProductVarinatDetails.price)

      const updatedCart = await this.prisma.cart.update({
        where: {
          id: existingCart.id
        },
        data: {
          itemCount: updatedItemCount,
          productVariantIds : existingCart.productVariantIds,
          cartItem:[createCartInput.cartItem],
          subTotal:updatedSubTotal
        }
      });

      return updatedCart;
    } else {
      

      const totalPrice = getProductVarinatDetails.price * createCartInput.itemCount;
      const cartData = await this.prisma.cart.create({
        data: {
          itemCount: [createCartInput.itemCount],
          productVariantIds: [createCartInput.productVariantId],
          cartItem:[createCartInput.cartItem],
          buyerId: createCartInput.buyerId,
          subTotal: totalPrice
        }
      });

      return cartData;
    }
  } catch (error) {
    console.error('Error creating cart:', error);
    throw new Error('Could not create cart');
  }
}
async addItemtocart  (createCartInput: CreateCartInput) {
  const cartData = await this.prisma.cart.create({
    data: {
      itemCount: [createCartInput.itemCount],
      productVariantIds: [createCartInput.productVariantId],
      cartItem:createCartInput.cartItem,
      buyerId: createCartInput.buyerId,
      subTotal: 12
    }
  });
  console.log("cartData",cartData)

}
async deleteCart(cartId: string) {
  try {
    const deletedCart = await this.prisma.cart.delete({
      where: {
        id: cartId
      }
    });

    return deletedCart;
  } catch (error) {
    console.error('Error deleting cart:', error);
    throw new Error('Could not delete cart');
  }
}



async createOrder(createOrderVariantInput: CreateOrderInput) {
  try {
      
      const newOrder = await this.prisma.order.create({
        data:{
         
          orderAmount:createOrderVariantInput.orderAmount,
          orderDate:createOrderVariantInput.orderDate,
          cartItemid:createOrderVariantInput.cartItemid,
          buyerId:createOrderVariantInput.buyerId
          
          
        }
      });
      
      
      
      return newOrder;
  } catch (error) {
     
      console.error('Error creating new order:', error);
      throw new Error('Could not create order ');
  }
}

findAll() {
    return this.prisma.products.findMany({include:{
      ProductsVariant:true,

    }});
  }

  allCartItems(buyerId) {
    return this.prisma.cart.findMany({
      where:{
        buyerId
      }
    })
  }
}
