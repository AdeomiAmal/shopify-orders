interface Money {
  shop_money: Currency;
  presentment_money: Currency;
}

interface Currency {
  amount: string;
  currency_code: string;
}

interface TaxLine {
  channel_liable: boolean;
  price: string;
  price_set: Money;
  rate: number;
  title: string;
}

interface LineItem {
  id: number;
  admin_graphql_api_id: string;
  attributed_staffs: any[];
  current_quantity: number;
  fulfillable_quantity: number;
  fulfillment_service: string;
  fulfillment_status: string | null;
  gift_card: boolean;
  grams: number;
  name: string;
  price: string;
  price_set: Money;
  product_exists: boolean;
  product_id: number;
  properties: any[];
  quantity: number;
  requires_shipping: boolean;
  sku: string;
  taxable: boolean;
  title: string;
  total_discount: string;
  total_discount_set: Money;
  variant_id: number;
  variant_inventory_management: string;
  variant_title: string;
  vendor: string;
  tax_lines: TaxLine[];
  duties: any[];
  discount_allocations: any[];
}

export interface ShopifyOrder {
  id: number;
  admin_graphql_api_id: string;
  app_id: number;
  browser_ip: string | null;
  buyer_accepts_marketing: boolean;
  cancel_reason: string | null;
  cancelled_at: string | null;
  cart_token: string | null;
  checkout_id: number | null;
  checkout_token: string | null;
  client_details: any | null;
  closed_at: string | null;
  company: string | null;
  confirmation_number: string;
  confirmed: boolean;
  contact_email: string | null;
  created_at: string;
  currency: string;
  current_subtotal_price: string;
  current_subtotal_price_set: Money;
  current_total_additional_fees_set: any | null;
  current_total_discounts: string;
  current_total_discounts_set: Money;
  current_total_duties_set: any | null;
  current_total_price: string;
  current_total_price_set: Money;
  current_total_tax: string;
  current_total_tax_set: Money;
  customer_locale: string | null;
  device_id: string | null;
  discount_codes: any[];
  email: string;
  estimated_taxes: boolean;
  financial_status: string;
  fulfillment_status: string | null;
  landing_site: string | null;
  landing_site_ref: string | null;
  location_id: number | null;
  merchant_of_record_app_id: string | null;
  name: string;
  note: string | null;
  note_attributes: any[];
  number: number;
  order_number: number;
  order_status_url: string;
  original_total_additional_fees_set: any | null;
  original_total_duties_set: any | null;
  payment_gateway_names: string[];
  phone: string | null;
  po_number: string | null;
  presentment_currency: string;
  processed_at: string;
  reference: string | null;
  referring_site: string | null;
  source_identifier: string | null;
  source_name: string;
  source_url: string | null;
  subtotal_price: string;
  subtotal_price_set: Money;
  tags: string;
  tax_exempt: boolean;
  tax_lines: any[];
  taxes_included: boolean;
  test: boolean;
  token: string;
  total_discounts: string;
  total_discounts_set: Money;
  total_line_items_price: string;
  total_line_items_price_set: Money;
  total_outstanding: string;
  total_price: string;
  total_price_set: Money;
  total_shipping_price_set: Money;
  total_tax: string;
  total_tax_set: Money;
  total_tip_received: string;
  total_weight: number;
  updated_at: string;
  user_id: string | null;
  billing_address: any | null;
  customer: any | null;
  discount_applications: any[];
  fulfillments: any[];
  line_items: LineItem[];
  payment_terms: string | null;
  refunds: any[];
  shipping_address: any | null;
  shipping_lines: any[];
}
