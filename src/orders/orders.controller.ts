import {
  BadRequestException,
  Controller,
  Get,
  Param,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { PlatformValidationPipe } from './validation/platform-validation.pipe';
import { OrderResponseMapperInterceptor } from './interceptors/order.response.mapper.interceptor';
import { Observable } from 'rxjs';
import { ShopifyOrder } from './interfaces/shopify.order.interface';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get(':platform/:id')
  @UseInterceptors(OrderResponseMapperInterceptor)
  getOrderById(
    @Param('platform', PlatformValidationPipe) platform: string,
    @Param('id') id: string,
  ): Observable<ShopifyOrder> {
    try {
      return this.ordersService.getOrderById(platform, id);
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  @Get(':platform')
  @UseInterceptors(OrderResponseMapperInterceptor)
  @UsePipes(new PlatformValidationPipe())
  getOrders(
    @Param('platform') platform: string,
  ): Promise<Observable<ShopifyOrder[]>> {
    try {
      return this.ordersService.getOrders(platform);
    } catch (e) {
      throw new BadRequestException(e);
    }
  }
}
