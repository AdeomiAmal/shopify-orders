import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShopifyProduct } from '../interfaces/shopify.product.interface';

@Injectable()
export class ProductResponseMapperInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(map((products: ShopifyProduct) => this.mapProduct(products)));
  }

  private mapProduct(product: ShopifyProduct): ShopifyProduct[] {
    let products = [product];
    if (product.tags.length) {
      const splitProducts = [];
      product.tags.split(',').forEach((tag) => {
        splitProducts.push({ ...product, tags: tag });
      });
      products = splitProducts;
    }
    return products;
  }
}
