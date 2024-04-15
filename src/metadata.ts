/* eslint-disable */
export default async () => {
  const t = {
    ['./products/entities/cartData.entity']: await import(
      './products/entities/cartData.entity'
    ),
    ['./products/entities/productVariant.entity']: await import(
      './products/entities/productVariant.entity'
    ),
    ['./users/models/address.model']: await import(
      './users/models/address.model'
    ),
    ['./users/models/user.model']: await import('./users/models/user.model'),
    ['./products/entities/paymentData.entity']: await import(
      './products/entities/paymentData.entity'
    ),
    ['./order/entities/orderItem.entity']: await import(
      './order/entities/orderItem.entity'
    ),
    ['./shiprocketoo/entities/shiprocketDetail.entity']: await import(
      './shiprocketoo/entities/shiprocketDetail.entity'
    ),
    ['./users/models/buyer.model']: await import('./users/models/buyer.model'),
  };
  return {
    '@nestjs/swagger/plugin': {
      models: [
        [
          import('./products/entities/productVariant.entity'),
          {
            ProductVariant: {
              id: { required: true, type: () => Number },
              weight: { required: true, type: () => Number },
              imageUrl: { required: true, type: () => [String] },
              price: { required: true, type: () => Number },
              stock: { required: true, type: () => Number },
              isVariantActive: { required: true, type: () => Boolean },
            },
          },
        ],
        [
          import('./products/entities/cartData.entity'),
          {
            Cart: {
              id: { required: true, type: () => String },
              buyerId: { required: true, type: () => String },
              cartItem: {
                required: false,
                type: () => [
                  t['./products/entities/cartData.entity'].CartItems,
                ],
              },
            },
            CartItems: {
              id: { required: true, type: () => String },
              qty: { required: true, type: () => Number },
              name: { required: true, type: () => String },
              productVariantId: { required: true, type: () => Number },
              weight: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./products/entities/message.entity'),
          {
            MessageOutput: { success: { required: true, type: () => Boolean } },
          },
        ],
        [import('./products/entities/product.entity'), { Product: {} }],
        [
          import('./products/entities/allProducts.entity'),
          {
            allProducts: {
              id: { required: true, type: () => String },
              title: { required: true, type: () => String },
              description: { required: true, type: () => String },
              category: { required: true, type: () => [String] },
              Amazon: { required: true, type: () => Boolean },
              Flipkart: { required: true, type: () => Boolean },
              productImageUrl: { required: true, type: () => String },
              productUrl: { required: true, type: () => String },
              type: { required: true, type: () => String },
              ProductsVariant: {
                required: true,
                type: () => [
                  t['./products/entities/productVariant.entity'].ProductVariant,
                ],
              },
              metaData: { required: false, type: () => Object },
              isActive: { required: true, type: () => Boolean },
            },
          },
        ],
        [
          import('./order/entities/orderItem.entity'),
          {
            OrderItems: {
              productVariantId: { required: true, type: () => Number },
              id: { required: true, type: () => String },
              name: { required: true, type: () => String },
              qty: { required: true, type: () => Number },
            },
          },
        ],
        [
          import('./products/entities/paymentData.entity'),
          {
            PaymentData: {
              paymentId: { required: true, type: () => String },
              orderId: { required: true, type: () => Number },
              dateOfPayment: { required: true, type: () => Date },
              buyerId: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./shiprocketoo/entities/shiprocketDetail.entity'),
          {
            ShipRocketOrderDetails: {
              id: { required: true, type: () => String },
              orderId: { required: true, type: () => Number },
              shiprocket_OrderId: { required: true, type: () => Number },
              shiprocket_ShipmentId: { required: true, type: () => Number },
              shiprocket_status: { required: true, type: () => String },
              shiprocket_status_code: { required: true, type: () => Number },
            },
          },
        ],
        [
          import('./products/entities/viewallorders.entity'),
          {
            AllOrdersData: {
              address: {
                required: true,
                type: () => t['./users/models/address.model'].AddressData,
              },
              user: {
                required: true,
                type: () => t['./users/models/user.model'].User,
              },
              Payment: {
                required: true,
                type: () => [
                  t['./products/entities/paymentData.entity'].PaymentData,
                ],
              },
              orderItems: {
                required: true,
                type: () => [t['./order/entities/orderItem.entity'].OrderItems],
                nullable: true,
              },
              shipRocketDetails: {
                required: true,
                type: () =>
                  t['./shiprocketoo/entities/shiprocketDetail.entity']
                    .ShipRocketOrderDetails,
              },
              Buyer: {
                required: true,
                type: () => t['./users/models/buyer.model'].BuyerData,
              },
              orderAmount: { required: true, type: () => Number },
              discountedAmount: { required: false, type: () => Number },
              discountCode: { required: false, type: () => String },
              orderDate: { required: true, type: () => Date },
              id: { required: true, type: () => String },
              ShippingCost: { required: true, type: () => Number },
              status: { required: true, type: () => Object },
              metaData: { required: false, type: () => Object },
            },
          },
        ],
        [
          import('./products/entities/updatedProducts.entity'),
          {
            UpdatedProduct: {
              title: { required: false, type: () => String },
              id: { required: false, type: () => String },
              description: { required: false, type: () => String },
              productImageUrl: { required: false, type: () => String },
              metaData: { required: false, type: () => [Object] },
              Flipkart: { required: false, type: () => Boolean },
              Amazon: { required: false, type: () => Boolean },
              productUrl: { required: false, type: () => String },
              category: { required: false, type: () => [String] },
              type: { required: false, type: () => String },
            },
          },
        ],
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
          import('./order/entities/order.entity'),
          {
            Order: {
              orderItems: {
                required: true,
                type: () => [t['./order/entities/orderItem.entity'].OrderItems],
                nullable: true,
              },
            },
          },
        ],
        [
          import('./reward-code/entities/reward-code.entity'),
          {
            RewardCode: { rewardCode: { required: true, type: () => String } },
          },
        ],
        [
          import('./payment-gateway/entities/payment-gateway.entity'),
          { PaymentGateway: {} },
        ],
        [
          import('./users-in-a-agency/dto/create-users-in-a-agency.dto'),
          { CreateUsersInAAgencyDto: {} },
        ],
        [
          import('./users-in-a-agency/dto/update-users-in-a-agency.dto'),
          { UpdateUsersInAAgencyDto: {} },
        ],
        [
          import('./users-in-a-agency/entities/users-in-a-agency.entity'),
          { UsersInAAgency: {} },
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
        [
          import('./medias/medias.controller'),
          { MediasController: { uploadSingle: {}, getFile: {} } },
        ],
        [
          import('./users-in-a-agency/users-in-a-agency.controller'),
          {
            UsersInAAgencyController: { getUsersInAgency: { type: [Object] } },
          },
        ],
      ],
    },
    '@nestjs/graphql/plugin': {
      models: [
        [
          import('./auth/dto/signup.input'),
          {
            SignupInput: {
              email: {},
              password: {},
              name: { nullable: true },
              agencyCode: { nullable: true },
              mobileNumber: { nullable: true },
            },
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
          import('./products/entities/productVariant.entity'),
          {
            ProductVariant: {
              id: {},
              weight: {},
              imageUrl: {},
              price: {},
              stock: {},
              isVariantActive: {},
            },
          },
        ],
        [
          import('./products/entities/cartData.entity'),
          {
            Cart: { id: {}, buyerId: {}, cartItem: { nullable: true } },
            CartItems: {
              id: {},
              qty: {},
              name: {},
              productVariantId: {},
              weight: {},
            },
          },
        ],
        [
          import('./users/models/buyer.model'),
          { BuyerData: { id: {}, userId: {}, Cart: {} } },
        ],
        [
          import('./users/models/user.model'),
          {
            User: {
              name: {},
              email: {},
              agencyCode: { nullable: true },
              mobileNumber: { nullable: true },
              role: {},
              buyer: {},
            },
          },
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
          import('./users/dto/update-shippingType.input'),
          {
            UpdateShippingInput: {
              addressId: { nullable: true },
              shipping: {},
            },
          },
        ],
        [
          import('./users/dto/update-user-agency.input'),
          { UpdateUserAgency: { agencyCode: { nullable: true } } },
        ],
        [
          import('./users/dto/create-buyer-address.input'),
          {
            CreateBuyerAddressInput: {
              name: { nullable: true },
              mobileNumber: { nullable: true },
              buyerId: { nullable: true },
              address: { nullable: true },
            },
          },
        ],
        [
          import('./users/dto/update-buyer-address.input'),
          {
            UpdateBuyerAddressInput: {
              AddresId: { nullable: true },
              name: { nullable: true },
              mobileNumber: { nullable: true },
              address: { nullable: true },
            },
          },
        ],
        [
          import('./users/models/address.model'),
          {
            AddressData: {
              addresId: { nullable: true },
              name: { nullable: true },
              mobileNumber: { nullable: true },
              buyerId: { nullable: true },
              address: { nullable: true },
            },
          },
        ],
        [
          import('./users/models/shipping.model'),
          {
            ShippingData: {
              addressId: { nullable: true },
              shipping: {},
              shippingCost: {},
            },
          },
        ],
        [
          import('./products/entities/message.entity'),
          { MessageOutput: { success: {} } },
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
          import('./products/dto/create-productVariant.input'),
          {
            CreateProductVariantInput: {
              weight: {},
              productId: {},
              imageUrl: { nullable: true },
              price: {},
              stock: {},
            },
          },
        ],
        [
          import('./products/dto/create-product.input'),
          {
            CreateProductInput: {
              title: {},
              description: {},
              productImageUrl: {},
              metaData: { nullable: true },
              Flipkart: {},
              Amazon: {},
              productUrl: {},
              category: {},
              type: {},
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
              weight: {},
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
          import('./products/dto/create-OrderPayment.input'),
          { CreateOrderPayment: { paymentId: {}, orderId: {}, buyerId: {} } },
        ],
        [
          import('./products/dto/update-productVariant.input'),
          {
            UpdateProductVariantInput: {
              weight: { nullable: true },
              id: {},
              imageUrl: { nullable: true },
              price: { nullable: true },
              stock: { nullable: true },
              isVariantActive: { nullable: true },
            },
          },
        ],
        [
          import('./products/dto/update-ProductDetails.input'),
          {
            UpdateProductDetailsInput: {
              title: { nullable: true },
              id: { nullable: true },
              description: { nullable: true },
              productImageUrl: { nullable: true },
              metaData: { nullable: true },
              Flipkart: { nullable: true },
              Amazon: { nullable: true },
              isActive: { nullable: true },
              productUrl: { nullable: true },
              category: { nullable: true },
              type: { nullable: true },
            },
          },
        ],
        [
          import('./products/entities/product.entity'),
          { Product: { newProduct: {} } },
        ],
        [
          import('./products/entities/allProducts.entity'),
          {
            allProducts: {
              id: {},
              title: {},
              description: {},
              category: {},
              Amazon: {},
              Flipkart: {},
              productImageUrl: {},
              productUrl: {},
              type: {},
              ProductsVariant: {},
              metaData: { nullable: true },
              isActive: {},
            },
          },
        ],
        [
          import('./order/entities/orderItem.entity'),
          { OrderItems: { productVariantId: {}, id: {}, name: {}, qty: {} } },
        ],
        [
          import('./products/entities/paymentData.entity'),
          {
            PaymentData: {
              paymentId: {},
              orderId: {},
              dateOfPayment: {},
              buyerId: {},
            },
          },
        ],
        [
          import('./shiprocketoo/entities/shiprocketDetail.entity'),
          {
            ShipRocketOrderDetails: {
              id: {},
              orderId: {},
              shiprocket_OrderId: {},
              shiprocket_ShipmentId: {},
              shiprocket_status: {},
              shiprocket_status_code: {},
            },
          },
        ],
        [
          import('./products/entities/viewallorders.entity'),
          {
            AllOrdersData: {
              address: {},
              user: {},
              Payment: {},
              orderItems: {},
              shipRocketDetails: {},
              Buyer: {},
              orderAmount: {},
              discountedAmount: { nullable: true },
              discountCode: { nullable: true },
              orderDate: {},
              id: {},
              ShippingCost: {},
              status: {},
              metaData: { nullable: true },
            },
          },
        ],
        [
          import('./products/entities/updatedProducts.entity'),
          {
            UpdatedProduct: {
              title: { nullable: true },
              id: { nullable: true },
              description: { nullable: true },
              productImageUrl: { nullable: true },
              metaData: { nullable: true },
              Flipkart: { nullable: true },
              Amazon: { nullable: true },
              productUrl: { nullable: true },
              category: { nullable: true },
              type: { nullable: true },
            },
          },
        ],
        [
          import('./order/dto/create-order.input'),
          {
            CreateOrderInput: {
              orderAmount: {},
              buyerId: {},
              userId: {},
              cartId: {},
              metaData: { nullable: true },
              AddressId: {},
              ShippingCost: {},
              discountedAmount: { nullable: true },
              discountCode: { nullable: true },
            },
          },
        ],
        [
          import('./order/dto/update-order.input'),
          { UpdateOrderInput: { id: {} } },
        ],
        [
          import('./order/entities/order.entity'),
          { Order: { newOrder: {}, orderItems: {} } },
        ],
        [
          import('./reward-code/dto/create-reward-code.input'),
          { CreateRewardCodeInput: { rewardCode: {}, userId: {} } },
        ],
        [
          import('./reward-code/dto/update-reward-code.input'),
          { UpdateRewardCodeInput: { id: {} } },
        ],
        [
          import('./reward-code/entities/reward-code.entity'),
          { RewardCode: { rewardCode: {} } },
        ],
        [
          import('./shiprocketoo/dto/create-shipRocket.input'),
          {
            CreateShipRocketDetailInput: {
              orderId: {},
              shiprocket_OrderId: {},
              shiprocket_ShipmentId: {},
              shiprocket_status: {},
              shiprocket_status_code: {},
              metaData: { nullable: true },
            },
          },
        ],
        [
          import('./shiprocketoo/dto/update-shipRocket.input'),
          { UpdateShiprocketrInput: { metaData: { nullable: true }, id: {} } },
        ],
        [
          import('./products/dto/create-Order.input'),
          {
            CreateOrderInputs: {
              orderAmount: {},
              buyerId: {},
              cartId: {},
              paymentID: {},
              AddressId: {},
              ShippingCost: {},
            },
          },
        ],
      ],
    },
  };
};
