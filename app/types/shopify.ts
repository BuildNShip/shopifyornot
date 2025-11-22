export type ShopifyCheckResponse = {
  input_url: string;
  final_url?: string | null;
  is_shopify: boolean;
  confidence?: number | null;
  detected_signals?: string[] | null;
  shop_domain?: string | null;
  headers_sample?: Record<string, string>;
  elapsed_ms?: number;
};

export type NormalizedShopifyCheckResponse = ShopifyCheckResponse & {
  detected_signals: string[];
  headers_sample?: Record<string, string>;
};

export type ShopifyResult = {
  url: string;
  isShopify: boolean;
  confidence: number;
  message: string;
  details?: string;
  detected_signals: string[];
  headers_sample?: Record<string, string>;
  shop_domain?: string | null;
  elapsed_ms?: number;
};
