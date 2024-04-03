import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { ShopifyConfigurationService } from './config/shopify.configuration.service';

@Module({
  imports: [OrdersModule, ProductsModule],
  providers: [ShopifyConfigurationService],
})
export class AppModule {}
