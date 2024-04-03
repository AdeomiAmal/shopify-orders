import { BadRequestException, Injectable } from '@nestjs/common';
import { Platform } from '../consts/platform';
import { ProductsShopifyProvider } from './providers/products.shopify.provider';
import { CreateProductDto } from './dto/create.product.dto';
import { ShopifyProduct } from './interfaces/shopify.product.interface';

@Injectable()
export class ProductsService {
  constructor(private readonly shopifyProvider: ProductsShopifyProvider) {}

  createProduct(
    platform: string,
    requestData: CreateProductDto,
  ): Partial<ShopifyProduct> {
    switch (platform) {
      case Platform.SHOPIFY:
        return this.shopifyProvider.createProductMock(requestData);
      default:
        throw new BadRequestException('Unsupported platform');
    }
  }
}
