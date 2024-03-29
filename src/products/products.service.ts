import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { CreateProductVariantInput } from './dto/create-productVariant.input';
import { CreateCartInput } from './dto/create-cartData.input';
import { UpdateProductInput } from './dto/update-product.input';
import { PrismaService } from 'nestjs-prisma';
import { CartOperationInput } from './dto/operation-cartItem.input';
import { CreateOrderPayment } from './dto/create-OrderPayment.input';
import { UpdateProductVariantInput } from './dto/update-productVariant.input';
import { UpdateProductDetailsInput } from './dto/update-ProductDetails.input';

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
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async createProduct(createProductInput: CreateProductInput) {
    try {
        const { title, description, productImageUrl, Flipkart, Amazon, productUrl, category, type, metaData } = createProductInput;
        
        // Create the product
        const newProduct = await this.prisma.products.create({
            data: {
                title,
                description,
                productUrl,
                productImageUrl,
                Flipkart,
                Amazon,
                category,
                type,
                metaData
            },
            include: { ProductsVariant: true }
        });

        return { newProduct };
    } catch (error) {
        console.error('Error creating product with variants:', error);
        throw new Error('Could not create product with variants');
    }
}

async createProductVariant(createProductVariantInput: CreateProductVariantInput) {
  try {
      const { productId, weight, imageUrl, price, stock } = createProductVariantInput;

      const newProductVariant = await this.prisma.productVariant.create({
          data: {
              products: {
                  connect: {
                      id: productId, 
                  },
              },
              weight,
              imageUrl,
              price,
              stock,
          },
      });

      return newProductVariant;
  } catch (error) {
      console.error('Error creating product variant:', error);
      throw new Error('Could not create product variant');
  }
}


async updateProductVariant(updateProductVariantInput: UpdateProductVariantInput) {
  try {
      const updatedProductVariant = await this.prisma.productVariant.update({
          where: {
           id:updateProductVariantInput.id
          },
          data: {
              weight:updateProductVariantInput.weight,
              imageUrl:updateProductVariantInput.imageUrl,
              price:updateProductVariantInput.price,
              stock:updateProductVariantInput.stock,
              isVariantActive:updateProductVariantInput.isVariantActive
          },
      });

      return updatedProductVariant;
  } catch (error) {
      console.error('Error updating product variant:', error);
      throw new Error('Could not update product variant');
  }
}

async updateProductDetails(updateProductDetailsInput: UpdateProductDetailsInput) {
  try {
      const UpdatedProductDetails = await this.prisma.products.update({
          where: {
           id:updateProductDetailsInput.id
          },
          data: {
            title:updateProductDetailsInput.title,
            description:updateProductDetailsInput.description,
            productImageUrl:updateProductDetailsInput.productImageUrl,
            metaData:updateProductDetailsInput.metaData,
            category:updateProductDetailsInput.category,
            Flipkart:updateProductDetailsInput.Flipkart,
            Amazon:updateProductDetailsInput.Amazon,
            productUrl:updateProductDetailsInput.productUrl,
            type:updateProductDetailsInput.type,
            isActive:updateProductDetailsInput.isActive  
          },
      });

      return UpdatedProductDetails;
  } catch (error) {
      console.error('Error updating product :', error);
      throw new Error('Could not update product ');
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

        const cartItem = await this.prisma.cartItems.create({
          data: {
            name: createCartInput.name,
            productVariantId: createCartInput.productVariantId,
            cartId: cartCreated.id,
            qty: createCartInput.qty,
            weight:createCartInput.weight
          },
        });
        return {
          ...cartCreated,
          cartItem: [cartItem],
        };
      }

      const existingCartItem = await this.prisma.cartItems.findFirst({
        where: {
          productVariantId: createCartInput.productVariantId,
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
            weight: createCartInput.weight // Update weight if cart item already exists


          },
        });
      } else {
        await this.prisma.cartItems.create({
          data: {
            name: createCartInput.name,
            productVariantId: createCartInput.productVariantId,
            qty: createCartInput.qty,
            cartId: existingCart.id,
            weight:createCartInput.weight
          },
        });
      }

      return await this.prisma.cart.findUnique({
        where: {
          id: existingCart.id,
        },
        include: {
          cartItem: true,
        },
      });
    } catch (error) {
      console.error('Error adding item to cart:', error);
      return { success: false, error: error.message };
    }
  }

  async operationsInCart(operations: CartOperationInput) {
    const item = await this.prisma.cartItems.findUnique({
      where: {
        id: operations.cartItemId,
      },
    });
    {
      operations.operation === 'INCREMENT' &&
        (await this.prisma.cartItems.update({
          where: {
            id: operations.cartItemId,
          },
          data: {
            qty: item.qty + operations.qty,
          },
        }));
    }
    {
      operations.operation === 'DECREMENT' &&
        item.qty > 1 &&
        (await this.prisma.cartItems.update({
          where: {
            id: operations.cartItemId,
          },
          data: {
            qty: item.qty - operations.qty,
          },
        }));
    }
    console.log('item', item);

    return { success: true };
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

  async deleteCart(cartId: string) {
    try {
      const deleteCartItem = await this.prisma.cartItems.deleteMany({
        where: { cartId: cartId },
      });
      const deletedCart = await this.prisma.cart.delete({
        where: {
          id: cartId,
        },
      });

      return { success: true };
    } catch (error) {
      console.error('Error deleting cart:', error);
      throw new Error('Could not delete cart');
    }
  }

  async removeItemFromCart(cartItemId: string) {
    try {
      const deleteCartItem = await this.prisma.cartItems.delete({
        where: { id: cartItemId },
      });

      return { sucess: true };
    } catch (error) {
      console.error('Error deleting cart:', error);
      throw new Error('Could not delete cart');
    }
  }

  async removeAddress(addressId: number) {
    try {
      const removeAddress = await this.prisma.address.delete({
        where: { addresId: addressId },
      });

      return { success: true };
    } catch (error) {
      console.error('Error deleting cart:', error);
      throw new Error('Could not delete cart');
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

  async findPaymentData(paymentId: string) {
    return this.prisma.payment.findUnique({
      where: {
        paymentId: paymentId,
      },
    });
  }
  

  async findAll() {
    const allProducts = await this.prisma.products.findMany({
      include: {
        ProductsVariant: true,
        
      },
    });
    return allProducts
  }

  async findAllOrders(buyerId) {
    const getAllOrders = await this.prisma.order.findMany({
      where: {
        buyerId,
      },
      include: {
        orderItems: true,
        address: true,
        shipRocketDetails:true
      },
    });
    return getAllOrders;
  }

  async getAllOrders() {
    const getAllOrders = await this.prisma.order.findMany({
      include: {
        orderItems: true,
        address: true,
        Payment: true,
        user:true,
        Buyer: {
          select: { user: true },
        },
        shipRocketDetails:true
      

      },
    });
    console.log('getAllOrders', getAllOrders);
    return getAllOrders;
  }

  async allCartItems(buyerId) {
    const getCart = await this.prisma.cart.findUnique({
      where: {
        buyerId,
      },
      include: { cartItem: true },
    });
    // console.log('getCart', getCart);

    return getCart;
  }
}
