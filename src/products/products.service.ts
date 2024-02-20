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
  constructor(private readonly prisma: PrismaService) {}
  async create(createProductInput: CreateProductInput) {
    try {
      const newProduct = await this.prisma.products.create({
        data: {
          title: createProductInput.title,
          description: createProductInput.description,
          productUrl: createProductInput.productUrl,
        },
      });

      return newProduct;
    } catch (error) {
      console.error('Error creating product:', error);
      throw new Error('Could not create product');
    }
  }
  async createProductVariant(
    createProductVariantInput: CreateProductVariantInput,
  ) {
    try {
      const newProductVariant = await this.prisma.productVariant.create({
        data: {
          productId: createProductVariantInput.ProductId,
          weight: createProductVariantInput.weight,
          imageUrl: createProductVariantInput.imageUrl,
          price: createProductVariantInput.price,
          stock: createProductVariantInput.stock,
        },
      });

      return newProductVariant;
    } catch (error) {
      console.error('Error creating product variant:', error);
      throw new Error('Could not create product variant');
    }
  }

  async addItemToCart(createCartInput: CreateCartInput) {
    try {
      const existingCart = await this.prisma.cart.findUnique({
        where: {
          buyerId: createCartInput.buyerId,
        },
      });

      if (!existingCart) {
        const cartCreated = await this.prisma.cart.create({
          data: {
            buyerId: createCartInput.buyerId,
          },
        });

        await this.prisma.cartItems.create({
          data: {
            productVariantId: createCartInput.productVariantId,
            cartId: cartCreated.id,
            qty: createCartInput.qty,
          },
        });
        return { success: true };
      }

      const existingCartItem = await this.prisma.cartItems.findFirst({
        where: {
          cartId: existingCart.id,
        },
      });

      if (existingCartItem) {
        await this.prisma.cartItems.update({
          where: {
            id: existingCartItem.id,
          },
          data: {
            qty: existingCartItem.qty + createCartInput.qty,
          },
        });
      } else {
        await this.prisma.cartItems.create({
          data: {
            productVariantId: createCartInput.productVariantId,
            qty: createCartInput.qty,
            cartId: existingCart.id,
          },
        });
      }

      return { success: true };
    } catch (error) {
      console.error('Error adding item to cart:', error);
      return { success: false, error: error.message };
    }
  }

  async updateCartItem(update: UpdateProductInput) {
    try {
      await this.prisma.cartItems.update({
        where: {
          id: update.cartItemId,
        },
        data: {
          qty: update.quantity,
        },
      });

      return { success: true };
    } catch (error) {
      console.error('Error updating cart item:', error);
      return { success: false, error: error.message };
    }
  }

  async getProductTitle(productId, cartData) {
    const foundItem = cartData.find(
      (item) => item.items.productId == productId,
    );
    return foundItem ? true : false;
  }

  // async deleteCart(cartId: string) {
  //   try {
  //     const deletedCart = await this.prisma.cart.delete({
  //       where: {
  //         id: cartId,
  //       },
  //     });

  //     return deletedCart;
  //   } catch (error) {
  //     console.error('Error deleting cart:', error);
  //     throw new Error('Could not delete cart');
  //   }
  // }

  async createOrder(createOrderVariantInput: CreateOrderInput) {
    try {
      const newOrder = await this.prisma.order.create({
        data: {
          orderAmount: createOrderVariantInput.orderAmount,
          orderDate: createOrderVariantInput.orderDate,
          cartItemid: createOrderVariantInput.cartItemid,
          buyerId: createOrderVariantInput.buyerId,
        },
      });

      return newOrder;
    } catch (error) {
      console.error('Error creating new order:', error);
      throw new Error('Could not create order ');
    }
  }

  findAll() {
    return this.prisma.products.findMany({
      include: {
        ProductsVariant: true,
      },
    });
  }

  allCartItems(buyerId) {
    return this.prisma.cart.findMany({
      where: {
        buyerId,
      },
    });
  }
}
