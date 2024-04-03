import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from './orders.service';
import { OrdersShopifyProvider } from './providers/orders.shopify.provider';
import { Platform } from '../consts/platform';
import { shopifyOrderMock } from './test/shopify.order.mock';
import { of } from 'rxjs';

describe('OrdersService', () => {
  let service: OrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrdersService,
        OrdersShopifyProvider,
        {
          provide: OrdersShopifyProvider,
          useValue: {
            getOrderById: jest
              .fn()
              .mockImplementation(() => of(shopifyOrderMock)),
          },
        },
      ],
    }).compile();

    service = module.get<OrdersService>(OrdersService);
  });

  it('should return the order details by ID', (done) => {
    const platform = Platform.SHOPIFY;
    const orderId = 4985632194693;

    service.getOrderById(platform, `${orderId}`).subscribe({
      next: (result) => {
        expect(result).toBeDefined();
        expect(result.id).toBeDefined();
        expect(result.id).toEqual(orderId);
        expect(result.admin_graphql_api_id).toBeDefined();
        expect(result.app_id).toBeDefined();
        expect(result.browser_ip).toBeNull();
        expect(result.buyer_accepts_marketing).toBeFalsy();
        expect(result.cancel_reason).toBeNull();
        expect(result.cancelled_at).toBeNull();
        expect(result.cart_token).toBeNull();
        expect(result.checkout_id).toBeNull();
        expect(result.checkout_token).toBeNull();
        expect(result.client_details).toBeNull();
        expect(result.closed_at).toBeNull();
        expect(result.company).toBeNull();
        expect(result.confirmation_number).toEqual('5UZZGDH59');
        expect(result.confirmed).toBeTruthy();
        expect(result.contact_email).toBeNull();
        expect(result.created_at).toEqual('2024-03-15T07:52:23-04:00');
        expect(result.currency).toEqual('ILS');
        expect(result.current_subtotal_price).toEqual('164.00');
        expect(result.current_subtotal_price_set?.shop_money?.amount).toEqual(
          '164.00',
        );
        expect(
          result.current_subtotal_price_set?.shop_money?.currency_code,
        ).toEqual('ILS');
        expect(
          result.current_subtotal_price_set?.presentment_money?.amount,
        ).toEqual('164.00');
        expect(
          result.current_subtotal_price_set?.presentment_money?.currency_code,
        ).toEqual('ILS');
        expect(result.current_total_additional_fees_set).toBeNull();
        expect(result.current_total_discounts).toEqual('0.00');
        expect(result.current_total_discounts_set?.shop_money?.amount).toEqual(
          '0.00',
        );
        expect(
          result.current_total_discounts_set?.shop_money?.currency_code,
        ).toEqual('ILS');
        expect(
          result.current_total_discounts_set?.presentment_money?.amount,
        ).toEqual('0.00');
        expect(
          result.current_total_discounts_set?.presentment_money?.currency_code,
        ).toEqual('ILS');
        expect(result.current_total_duties_set).toBeNull();
        expect(result.current_total_price).toEqual('164.00');
        expect(result.current_total_price_set?.shop_money?.amount).toEqual(
          '164.00',
        );
        expect(
          result.current_total_price_set?.shop_money?.currency_code,
        ).toEqual('ILS');
        expect(
          result.current_total_price_set?.presentment_money?.amount,
        ).toEqual('164.00');
        expect(
          result.current_total_price_set?.presentment_money?.currency_code,
        ).toEqual('ILS');
        expect(result.current_total_tax).toEqual('0.00');
        expect(result.current_total_tax_set?.shop_money?.amount).toEqual(
          '0.00',
        );
        expect(result.current_total_tax_set?.shop_money?.currency_code).toEqual(
          'ILS',
        );
        expect(result.current_total_tax_set?.presentment_money?.amount).toEqual(
          '0.00',
        );
        expect(
          result.current_total_tax_set?.presentment_money?.currency_code,
        ).toEqual('ILS');
        expect(shopifyOrderMock.customer_locale).toBeNull();
        expect(shopifyOrderMock.device_id).toBeNull();
        expect(shopifyOrderMock.discount_codes).toEqual([]);
        expect(shopifyOrderMock.email).toEqual('');
        expect(shopifyOrderMock.estimated_taxes).toBeFalsy();
        expect(shopifyOrderMock.financial_status).toEqual('paid');
        expect(shopifyOrderMock.fulfillment_status).toBeNull();
        expect(shopifyOrderMock.landing_site).toBeNull();
        expect(shopifyOrderMock.landing_site_ref).toBeNull();
        expect(shopifyOrderMock.location_id).toBeNull();
        expect(shopifyOrderMock.merchant_of_record_app_id).toBeNull();
        expect(shopifyOrderMock.name).toEqual('#1003');
        expect(shopifyOrderMock.note).toBeNull();
        expect(shopifyOrderMock.note_attributes).toEqual([]);
        expect(shopifyOrderMock.number).toEqual(3);
        expect(shopifyOrderMock.order_number).toEqual(1003);
        expect(shopifyOrderMock.order_status_url).toEqual(
          'https://nitzan-test2.myshopify.com/56306565253/orders/fd790df5d769980cfe9c62fb37002ffc/authenticate?key=b3c4b812b08a4fef9cd0405058a2839c&none=XABWAV5HUFhWQ1E',
        );
        expect(shopifyOrderMock.original_total_additional_fees_set).toBeNull();
        expect(shopifyOrderMock.original_total_duties_set).toBeNull();
        expect(shopifyOrderMock.payment_gateway_names).toEqual([]);
        expect(shopifyOrderMock.phone).toBeNull();
        expect(shopifyOrderMock.po_number).toBeNull();
        expect(shopifyOrderMock.presentment_currency).toEqual('ILS');
        expect(shopifyOrderMock.processed_at).toEqual(
          '2024-03-15T07:52:23-04:00',
        );
        expect(shopifyOrderMock.reference).toBeNull();
        expect(shopifyOrderMock.referring_site).toBeNull();
        expect(shopifyOrderMock.source_identifier).toBeNull();
        expect(shopifyOrderMock.source_name).toEqual('84338540545');
        expect(shopifyOrderMock.source_url).toBeNull();
        expect(shopifyOrderMock.subtotal_price).toEqual('164.00');
        expect(shopifyOrderMock.subtotal_price_set?.shop_money?.amount).toEqual(
          '164.00',
        );
        expect(
          shopifyOrderMock.subtotal_price_set?.shop_money?.currency_code,
        ).toEqual('ILS');
        expect(
          shopifyOrderMock.subtotal_price_set?.presentment_money?.amount,
        ).toEqual('164.00');
        expect(
          shopifyOrderMock.subtotal_price_set?.presentment_money?.currency_code,
        ).toEqual('ILS');
        expect(shopifyOrderMock.tags).toEqual('');
        expect(shopifyOrderMock.tax_exempt).toBeFalsy();
        expect(shopifyOrderMock.tax_lines).toEqual([]);
        expect(shopifyOrderMock.taxes_included).toBeFalsy();
        expect(shopifyOrderMock.test).toBeFalsy();
        expect(shopifyOrderMock.token).toEqual(
          'fd790df5d769980cfe9c62fb37002ffc',
        );
        expect(shopifyOrderMock.total_discounts).toEqual('0.00');
        expect(
          shopifyOrderMock.total_discounts_set?.shop_money?.amount,
        ).toEqual('0.00');
        expect(
          shopifyOrderMock.total_discounts_set?.shop_money?.currency_code,
        ).toEqual('ILS');
        expect(
          shopifyOrderMock.total_discounts_set?.presentment_money?.amount,
        ).toEqual('0.00');
        expect(
          shopifyOrderMock.total_discounts_set?.presentment_money
            ?.currency_code,
        ).toEqual('ILS');
        expect(shopifyOrderMock.total_line_items_price).toEqual('164.00');
        expect(
          shopifyOrderMock.total_line_items_price_set?.shop_money?.amount,
        ).toEqual('164.00');
        expect(
          shopifyOrderMock.total_line_items_price_set?.shop_money
            ?.currency_code,
        ).toEqual('ILS');
        expect(
          shopifyOrderMock.total_line_items_price_set?.presentment_money
            ?.amount,
        ).toEqual('164.00');
        expect(
          shopifyOrderMock.total_line_items_price_set?.presentment_money
            ?.currency_code,
        ).toEqual('ILS');
        expect(shopifyOrderMock.total_outstanding).toEqual('164.00');
        expect(shopifyOrderMock.total_price).toEqual('164.00');
        expect(shopifyOrderMock.total_price_set?.shop_money?.amount).toEqual(
          '164.00',
        );
        expect(
          shopifyOrderMock.total_price_set?.shop_money?.currency_code,
        ).toEqual('ILS');
        expect(
          shopifyOrderMock.total_price_set?.presentment_money?.amount,
        ).toEqual('164.00');
        expect(
          shopifyOrderMock.total_price_set?.presentment_money?.currency_code,
        ).toEqual('ILS');
        expect(
          shopifyOrderMock.total_shipping_price_set?.shop_money?.amount,
        ).toEqual('0.00');
        expect(
          shopifyOrderMock.total_shipping_price_set?.shop_money?.currency_code,
        ).toEqual('ILS');
        expect(
          shopifyOrderMock.total_shipping_price_set?.presentment_money?.amount,
        ).toEqual('0.00');
        expect(
          shopifyOrderMock.total_shipping_price_set?.presentment_money
            ?.currency_code,
        ).toEqual('ILS');
        expect(shopifyOrderMock.total_tax).toEqual('0.00');
        expect(shopifyOrderMock.total_tax_set?.shop_money?.amount).toEqual(
          '0.00',
        );
        expect(
          shopifyOrderMock.total_tax_set?.shop_money?.currency_code,
        ).toEqual('ILS');
        expect(
          shopifyOrderMock.total_tax_set?.presentment_money?.amount,
        ).toEqual('0.00');
        expect(
          shopifyOrderMock.total_tax_set?.presentment_money?.currency_code,
        ).toEqual('ILS');
        expect(shopifyOrderMock.total_tip_received).toEqual('0.00');
        expect(shopifyOrderMock.total_weight).toEqual(0);
        expect(shopifyOrderMock.updated_at).toEqual(
          '2024-03-15T07:53:26-04:00',
        );
        expect(shopifyOrderMock.user_id).toBeNull();
        expect(shopifyOrderMock.billing_address).toBeNull();
        expect(shopifyOrderMock.customer).toBeNull();
        expect(shopifyOrderMock.discount_applications).toEqual([]);
        expect(shopifyOrderMock.fulfillments).toEqual([]);
        expect(shopifyOrderMock.line_items.length).toEqual(3);
        done();
      },
      error: done.fail,
    });
  });
});
