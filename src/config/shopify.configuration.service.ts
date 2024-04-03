import { Injectable } from '@nestjs/common';

interface ShopifyHeaders {
  [key: string]: string;
}

interface ShopifyAuthHeaders {
  headers: ShopifyHeaders;
}

@Injectable()
export class ShopifyConfigurationService {
  get shopifyAuthHeaders(): ShopifyAuthHeaders {
    const base64Credentials = Buffer.from(
      `${this.shopifyApiKey}:${this.shopifyPassword}`,
    ).toString('base64');

    return {
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
    };
  }

  get shopifyApiUrl(): string {
    return `https://${this.shopifyStore}/admin/api/${this.shopifyApiVersion}`;
  }

  get shopifyStore(): string {
    const store = process.env.SHOPIFY_STORE;
    if (!store) {
      throw new Error('Shopify store URL is not provided');
    }
    return store;
  }

  get shopifyApiKey(): string {
    const apiKey = process.env.SHOPIFY_API_KEY;
    if (!apiKey) {
      throw new Error('Shopify API key is not provided');
    }
    return apiKey;
  }

  get shopifyPassword(): string {
    const password = process.env.SHOPIFY_PASSWORD;
    if (!password) {
      throw new Error('Shopify password is not provided');
    }
    return password;
  }

  get shopifyApiVersion(): string {
    const apiVersion = process.env.SHOPIFY_API_VERSION;
    if (!apiVersion) {
      throw new Error('Shopify API version is not provided');
    }
    return apiVersion;
  }
}
