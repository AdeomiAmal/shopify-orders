import { BadRequestException, Injectable } from '@nestjs/common';
import { OrdersShopifyProvider } from './providers/orders.shopify.provider';
import { Observable } from 'rxjs';
import { Platform } from '../consts/platform';
import { ShopifyOrder } from './interfaces/shopify.order.interface';

@Injectable()
export class OrdersService {
  constructor(private readonly shopifyProvider: OrdersShopifyProvider) {}

  async getOrders(platform: string): Promise<Observable<ShopifyOrder[]>> {
    switch (platform) {
      case Platform.SHOPIFY:
        return this.shopifyProvider.getOrders();
      default:
        throw new BadRequestException('Unsupported platform');
    }
  }

  getOrderById(platform: string, id: string): Observable<ShopifyOrder> {
    switch (platform) {
      case Platform.SHOPIFY:
        return this.shopifyProvider.getOrderById(id);
      default:
        throw new BadRequestException('Unsupported platform');
    }
  }
}
