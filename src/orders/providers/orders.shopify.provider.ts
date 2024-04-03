import { BadRequestException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { ShopifyConfigurationService } from '../../config/shopify.configuration.service';
import { catchError, map, Observable } from 'rxjs';
import { ShopifyOrder } from '../interfaces/shopify.order.interface';

@Injectable()
export class OrdersShopifyProvider {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ShopifyConfigurationService,
  ) {}

  getOrders(): Observable<ShopifyOrder[]> {
    const { shopifyApiUrl, shopifyAuthHeaders } = this.configService;

    return this.httpService
      .get(`${shopifyApiUrl}/orders.json`, shopifyAuthHeaders)
      .pipe(
        map(
          (response: AxiosResponse<{ orders: ShopifyOrder[] }>) =>
            response?.data?.orders || [],
        ),
        catchError((e) => {
          console.error(e);
          throw new BadRequestException(`Failed to get Shopify Orders`);
        }),
      );
  }

  getOrderById(id: string): Observable<ShopifyOrder> {
    const { shopifyApiUrl, shopifyAuthHeaders } = this.configService;
    return this.httpService
      .get(`${shopifyApiUrl}/orders/${id}.json`, shopifyAuthHeaders)
      .pipe(
        map(
          (response: AxiosResponse<{ order: ShopifyOrder }>) =>
            response?.data?.order || null,
        ),
        catchError((e) => {
          console.error(e);
          throw new BadRequestException(
            `Failed to get Shopify Order with id: ${id}`,
          );
        }),
      );
  }
}
