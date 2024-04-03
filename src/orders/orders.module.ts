import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { OrdersShopifyProvider } from './providers/orders.shopify.provider';
import { ShopifyConfigurationService } from '../config/shopify.configuration.service';

@Module({
  imports: [HttpModule],
  controllers: [OrdersController],
  providers: [
    OrdersService,
    OrdersShopifyProvider,
    ShopifyConfigurationService,
  ],
})
export class OrdersModule {}
