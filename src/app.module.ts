import { GraphQLModule } from '@nestjs/graphql';
import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule, loggingMiddleware } from 'nestjs-prisma';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppResolver } from './app.resolver';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import config from './common/configs/config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GqlConfigService } from './gql-config.service';
import { ProductsModule } from './products/products.module';
import { PaymentGatewayModule } from './payment-gateway/payment-gateway.module';
import { GetImagesController } from './get-images/get-images.controller';
import { OrderModule } from './order/order.module';
import { RewardCodeModule } from './reward-code/reward-code.module';
import { MediasModule } from './medias/medias.module';
import { ShipRocketModule } from './shiprocketoo/shiprocket.module';
import { UsersInAAgencyModule } from './users-in-a-agency/users-in-a-agency.module';
import { RestAuthModule } from './rest-auth/rest-auth.module';
import { RestGetAllProductsModule } from './rest-get-all-products/rest-get-all-products.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        middlewares: [
          // configure your prisma middleware
          loggingMiddleware({
            logger: new Logger('PrismaMiddleware'),
            logLevel: 'log',
          }),
        ],
      },
    }),

    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GqlConfigService,
    }),

    AuthModule,
    UsersModule,
    PostsModule,
    PaymentGatewayModule,
    ProductsModule,
    OrderModule,
    ShipRocketModule,
    RewardCodeModule,
    MediasModule,
    UsersInAAgencyModule,
    RestAuthModule,
    RestGetAllProductsModule
  ],
  controllers: [AppController, GetImagesController, ],
  providers: [AppService, AppResolver],
})
export class AppModule {}
