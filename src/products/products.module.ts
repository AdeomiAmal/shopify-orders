import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductsShopifyProvider } from './providers/products.shopify.provider';
import { ShopifyConfigurationService } from '../config/shopify.configuration.service';

@Module({
  imports: [HttpModule],
  controllers: [ProductsController],
  providers: [
    ProductsService,
    ProductsShopifyProvider,
    ShopifyConfigurationService,
  ],
})
export class ProductsModule {}
