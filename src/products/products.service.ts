import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { CreateProductVariantInput } from './dto/create-productVariant.input';
import { UpdateProductInput } from './dto/update-product.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma:PrismaService){}
  async create(createProductInput: CreateProductInput) {
    try {
        
        const newProduct = await this.prisma.products.create({
          data:{
            title:createProductInput.title,
            description:createProductInput.description
            
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

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
