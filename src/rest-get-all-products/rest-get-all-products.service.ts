import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class RestGetAllProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const allProducts = await this.prisma.products.findMany({
      include: {
        ProductsVariant: true,
      },
    });
    return allProducts;
  }
}
