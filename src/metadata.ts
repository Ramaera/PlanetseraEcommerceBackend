/* eslint-disable */
export default async () => {
  const t = {
    ['./products/entities/productVariant.entity']: await import(
      './products/entities/productVariant.entity'
    ),
    ['./users/models/buyer.model']: await import('./users/models/buyer.model'),
    ['./users/models/user.model']: await import('./users/models/user.model'),
  };
  return {
    '@nestjs/swagger/plugin': {
      models: [
        [
          import('./payment-gateway/dto/create-payment-gateway.dto'),
          {
            CreatePaymentGatewayDto: {
              buyer_id: { required: true, type: () => String },
              price: { required: true, type: () => Number },
              name: { required: true, type: () => String },
              email: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./payment-gateway/dto/update-payment-gateway.dto'),
          { UpdatePaymentGatewayDto: {} },
        ],
        [
          import('./products/entities/productVariant.entity'),
          {
            ProductVariant: {
              id: { required: true, type: () => Number },
              weight: { required: true, type: () => Number },
              imageUrl: { required: true, type: () => [String] },
              price: { required: true, type: () => Number },
              stock: { required: true, type: () => Number },
            },
          },
        ],
        [
          import('./products/entities/product.entity'),
          {
            Product: {
              id: { required: true, type: () => String },
              title: { required: true, type: () => String },
              description: { required: true, type: () => String },
              ProductsVariant: {
                required: true,
                type: () => [
                  t['./products/entities/productVariant.entity'].ProductVariant,
                ],
              },
              category: { required: true, type: () => [String] },
              Amazon: { required: true, type: () => Boolean },
              Flipkart: { required: true, type: () => Boolean },
              metaData: { required: false, type: () => [Object] },
              productImageUrl: { required: true, type: () => String },
              productUrl: { required: true, type: () => String },
              type: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./products/entities/order.entity'),
          {
            Order: {
              orderDate: { required: true, type: () => Date },
              orderAmount: { required: true, type: () => Number },
              buyerId: { required: true, type: () => String },
              cartItemid: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./products/entities/cartData.entity'),
          {
            Cart: {
              id: { required: true, type: () => String },
              buyerId: { required: true, type: () => String },
              cartItem: { required: true, type: () => [CartItems] },
            },
          },
        ],
        [
          import('./products/entities/message.entity'),
          {
            MessageOutput: { success: { required: true, type: () => Boolean } },
          },
        ],
        [
          import('./payment-gateway/entities/payment-gateway.entity'),
          { PaymentGateway: {} },
        ],
      ],
      controllers: [
        [
          import('./app.controller'),
          {
            AppController: {
              getHello: { type: String },
              getHelloName: { type: String },
            },
          },
        ],
        [
          import('./payment-gateway/payment-gateway.controller'),
          {
            PaymentGatewayController: {
              create: { type: Object },
              getPaymentStatus: {},
              findOne: { type: String },
              update: { type: String },
              remove: { type: String },
            },
          },
        ],
        [
          import('./get-images/get-images.controller'),
          { GetImagesController: { getImage: { type: Object } } },
        ],
      ],
    },
    '@nestjs/graphql/plugin': {
      models: [
        [
          import('./auth/dto/signup.input'),
          {
            SignupInput: { email: {}, password: {}, name: { nullable: true } },
          },
        ],
        [
          import('./auth/models/token.model'),
          { Token: { accessToken: {}, refreshToken: {} } },
        ],
        [
          import('./common/models/base.model'),
          { BaseModel: { id: {}, createdAt: {}, updatedAt: {} } },
        ],
        [
          import('./posts/models/post.model'),
          {
            Post: {
              title: {},
              content: { nullable: true },
              published: {},
              author: { nullable: true },
            },
          },
        ],
        [
          import('./users/models/buyer.model'),
          { BuyerData: { id: {}, userId: {} } },
        ],
        [
          import('./users/models/user.model'),
          { User: { name: {}, email: {}, role: {}, buyer: {} } },
        ],
        [
          import('./auth/models/auth.model'),
          {
            Auth: { user: { type: () => t['./users/models/user.model'].User } },
          },
        ],
        [
          import('./auth/dto/login.input'),
          { LoginInput: { email: {}, password: {} } },
        ],
        [
          import('./auth/dto/refresh-token.input'),
          { RefreshTokenInput: { token: {} } },
        ],
        [
          import('./users/dto/change-password.input'),
          { ChangePasswordInput: { oldPassword: {}, newPassword: {} } },
        ],
        [
          import('./users/dto/update-user.input'),
          { UpdateUserInput: { address: { nullable: true } } },
        ],
        [
          import('./users/dto/update-buyer-address.input'),
          {
            UpdateBuyerAddressInput: {
              name: { nullable: true },
              mobileNumber: { nullable: true },
              buyerId: { nullable: true },
              address: { nullable: true },
            },
          },
        ],
        [
          import('./users/models/address.model'),
          {
            AddressData: {
              name: { nullable: true },
              mobileNumber: { nullable: true },
              buyerId: { nullable: true },
              address: { nullable: true },
            },
          },
        ],
        [
          import('./common/pagination/pagination.args'),
          {
            PaginationArgs: {
              skip: { nullable: true, type: () => Number },
              after: { nullable: true, type: () => String },
              before: { nullable: true, type: () => String },
              first: { nullable: true, type: () => Number },
              last: { nullable: true, type: () => Number },
            },
          },
        ],
        [
          import('./posts/args/post-id.args'),
          { PostIdArgs: { postId: { type: () => String } } },
        ],
        [
          import('./posts/args/user-id.args'),
          { UserIdArgs: { userId: { type: () => String } } },
        ],
        [
          import('./common/pagination/page-info.model'),
          {
            PageInfo: {
              endCursor: { nullable: true },
              hasNextPage: {},
              hasPreviousPage: {},
              startCursor: { nullable: true },
            },
          },
        ],
        [
          import('./posts/models/post-connection.model'),
          { PostConnection: {} },
        ],
        [import('./posts/dto/post-order.input'), { PostOrder: { field: {} } }],
        [
          import('./posts/dto/createPost.input'),
          { CreatePostInput: { content: {}, title: {} } },
        ],
        [
          import('./products/dto/create-product.input'),
          {
            CreateProductInput: { title: {}, description: {}, productUrl: {} },
          },
        ],
        [
          import('./products/dto/create-productVariant.input'),
          {
            CreateProductVariantInput: {
              ProductId: {},
              weight: {},
              imageUrl: {},
              price: {},
              stock: {},
            },
          },
        ],
        [
          import('./products/dto/create-cartData.input'),
          {
            CreateCartInput: {
              name: {},
              productVariantId: {},
              qty: {},
              buyerId: {},
            },
          },
        ],
        [
          import('./products/dto/create-Order.input'),
          {
            CreateOrderInput: {
              orderDate: {},
              orderAmount: {},
              buyerId: {},
              cartId: {},
            },
          },
        ],
        [
          import('./products/dto/update-product.input'),
          { UpdateProductInput: { cartItemId: {}, quantity: {} } },
        ],
        [
          import('./products/dto/operation-cartItem.input'),
          { CartOperationInput: { cartItemId: {}, operation: {}, qty: {} } },
        ],
        [
          import('./products/entities/productVariant.entity'),
          {
            ProductVariant: {
              id: {},
              weight: {},
              imageUrl: {},
              price: {},
              stock: {},
            },
          },
        ],
        [
          import('./products/entities/product.entity'),
          {
            Product: {
              id: {},
              title: {},
              description: {},
              ProductsVariant: {},
              category: {},
              Amazon: {},
              Flipkart: {},
              metaData: { nullable: true },
              productImageUrl: {},
              productUrl: {},
              type: {},
            },
          },
        ],
        [
          import('./products/entities/order.entity'),
          {
            Order: {
              orderDate: {},
              orderAmount: {},
              buyerId: {},
              cartItemid: {},
            },
          },
        ],
        [
          import('./products/entities/cartData.entity'),
          { Cart: { id: {}, buyerId: {}, cartItem: {} } },
        ],
        [
          import('./products/entities/message.entity'),
          { MessageOutput: { success: {} } },
        ],
      ],
    },
  };
};
