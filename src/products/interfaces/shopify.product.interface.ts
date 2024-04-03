export interface ShopifyProduct {
  title: string;
  vendor: string;
  description: string;
  type: string;
  body_html?: string;
  product_type?: string;
  created_at?: string;
  handle?: string;
  updated_at?: string;
  published_at?: string | null;
  template_suffix?: string | null;
  published_scope?: string;
  tags?: string;
  status?: string;
  admin_graphql_api_id?: string;
  variants?: Variant[];
  options?: Option[];
  images?: Image[];
  image?: Image | null;
}

export interface Variant {
  id?: number;
  product_id?: number;
  title?: string;
  price?: string;
  sku?: string | null;
  position?: number;
  inventory_policy?: string;
  compare_at_price?: string | null;
  fulfillment_service?: string;
  inventory_management?: string | null;
  option1?: string;
  option2?: string | null;
  option3?: string | null;
  created_at?: string;
  updated_at?: string;
  taxable?: boolean;
  barcode?: string | null;
  grams?: number;
  weight?: number;
  weight_unit?: string;
  inventory_item_id?: number;
  inventory_quantity?: number;
  old_inventory_quantity?: number;
  presentment_prices?: PresentmentPrice[];
  requires_shipping?: boolean;
  admin_graphql_api_id?: string;
  image_id?: number | null;
}

export interface Option {
  id?: number;
  product_id?: number;
  name?: string;
  position?: number;
  values?: string[];
}

export interface Image {
  id?: number;
  src?: string;
}

export interface PresentmentPrice {
  price: Price;
  compare_at_price?: Price | null;
}

export interface Price {
  amount: string;
  currency_code: string;
}
