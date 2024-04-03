import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShopifyOrder } from '../interfaces/shopify.order.interface';

@Injectable()
export class OrderResponseMapperInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ShopifyOrder | ShopifyOrder[]> {
    return next
      .handle()
      .pipe(
        map((orders: ShopifyOrder | ShopifyOrder[]) =>
          this.mapResponse(orders),
        ),
      );
  }

  private mapResponse(
    orders: ShopifyOrder | ShopifyOrder[],
  ): ShopifyOrder | ShopifyOrder[] {
    if (Array.isArray(orders)) {
      return orders.map((order: ShopifyOrder) => this.mapOrder(order));
    } else {
      return this.mapOrder(orders);
    }
  }

  private mapOrder(order: ShopifyOrder): ShopifyOrder {
    const mappedOrder = { ...order };
    if (order.line_items && Array.isArray(order.line_items)) {
      const newLineItems = [];
      order.line_items.forEach((item) => {
        for (let i = 0; i < item.quantity; i++) {
          newLineItems.push({ ...item, quantity: 1 });
        }
      });
      mappedOrder.line_items = newLineItems;
    }
    return mappedOrder;
  }
}
