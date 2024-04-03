import { BadRequestException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { ShopifyConfigurationService } from '../../config/shopify.configuration.service';
import { catchError, map, Observable } from 'rxjs';
import { ShopifyProduct } from '../interfaces/shopify.product.interface';
import { CreateProductDto } from '../dto/create.product.dto';
import { shopifyProductMock } from '../test/shopify.product.mock';

@Injectable()
export class ProductsShopifyProvider {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ShopifyConfigurationService,
  ) {}

  createProductMock(requestData: CreateProductDto): Partial<ShopifyProduct> {
    shopifyProductMock.body_html = requestData.description;
    shopifyProductMock.product_type = requestData.type;
    return shopifyProductMock;
  }

  createProduct(requestData: CreateProductDto): Observable<ShopifyProduct> {
    const { shopifyApiUrl, shopifyAuthHeaders } = this.configService;

    requestData.body_html = requestData.description;
    requestData.product_type = requestData.type;

    return this.httpService
      .post(`${shopifyApiUrl}/products.json`, requestData, shopifyAuthHeaders)
      .pipe(
        map(
          (response: AxiosResponse<{ product: ShopifyProduct }>) =>
            response.data.product,
        ),
        catchError((e) => {
          console.error(e);
          throw new BadRequestException(`Failed to create Shopify Product`);
        }),
      );
  }
}
