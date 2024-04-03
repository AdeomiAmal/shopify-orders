import {
  Controller,
  Post,
  Body,
  BadRequestException,
  Param,
  ValidationPipe,
  UseInterceptors,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create.product.dto';
import { PlatformValidationPipe } from '../orders/validation/platform-validation.pipe';
import { ProductResponseMapperInterceptor } from './interceptors/order.response.mapper.interceptor';
import { ShopifyProduct } from './interfaces/shopify.product.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post(':platform')
  @UseInterceptors(ProductResponseMapperInterceptor)
  createProduct(
    @Param('platform', new PlatformValidationPipe()) platform: string,
    @Body(new ValidationPipe()) requestData: CreateProductDto,
  ): Partial<ShopifyProduct> {
    try {
      return this.productsService.createProduct(platform, requestData);
    } catch (e) {
      throw new BadRequestException(e);
    }
  }
}
