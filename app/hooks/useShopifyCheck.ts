import { FormEvent, useCallback, useMemo, useState } from "react";

import { formatConfidence } from "../lib/confidence";
import { createShopifyChecker } from "../services/shopifyChecker";
import { ShopifyResult, NormalizedShopifyCheckResponse } from "../types/shopify";

type UseShopifyCheckOptions = {
  fetcher?: typeof fetch;
};

export const useShopifyCheck = ({ fetcher }: UseShopifyCheckOptions = {}) => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<ShopifyResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showTechnical, setShowTechnical] = useState(false);

  const checker = useMemo(() => createShopifyChecker({ fetcher }), [fetcher]);

  // Transform API response to UI format
  const transformResult = useCallback((data: NormalizedShopifyCheckResponse): ShopifyResult => {
    const confidence = data.confidence ?? 0;
    let message = "";
    let details = "";

    if (data.is_shopify) {
      message = "✅ This is a Shopify store!";
      if (data.shop_domain) {
        details = `Shop domain: ${data.shop_domain}`;
      }
      if (data.detected_signals.length > 0) {
        details += details ? " • " : "";
        details += `${data.detected_signals.length} Shopify signals detected`;
      }
    } else {
      if (confidence > 0.3) {
        message = "⚠️ Possibly not a Shopify store";
        details = "Some Shopify-like patterns were detected, but not enough to confirm.";
      } else {
        message = "❌ Not a Shopify store";
        details = "This website does not appear to be powered by Shopify.";
      }
    }

    return {
      url: data.final_url || data.input_url,
      isShopify: data.is_shopify,
      confidence: confidence,
      message,
      details,
      detected_signals: data.detected_signals,
      headers_sample: data.headers_sample,
      shop_domain: data.shop_domain,
      elapsed_ms: data.elapsed_ms,
    };
  }, []);

  const confidenceDisplay = useMemo(() => {
    if (!result) return "0%";
    return `${Math.round(result.confidence * 100)}%`;
  }, [result]);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const trimmed = url.trim();

      if (!trimmed) {
        setError("Please enter a website URL to check.");
        return;
      }

      try {
        setLoading(true);
        setError(null);
        setResult(null);
        setShowTechnical(false);

        const data = await checker.check(trimmed);
        const transformedResult = transformResult(data);
        setResult(transformedResult);
      } catch (requestError) {
        setError(
          requestError instanceof Error
            ? requestError.message
            : "Something went wrong while checking that site.",
        );
      } finally {
        setLoading(false);
      }
    },
    [checker, url, transformResult],
  );

  const toggleTechnical = useCallback(() => {
    setShowTechnical((previous) => !previous);
  }, []);

  return {
    url,
    setUrl,
    result,
    loading,
    error,
    showTechnical,
    toggleTechnical,
    handleSubmit,
    confidenceDisplay,
  };
};
