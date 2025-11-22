import { NormalizedShopifyCheckResponse, ShopifyCheckResponse } from "../types/shopify";

type ShopifyCheckerDependencies = {
    fetcher?: typeof fetch;
};

const DEFAULT_ENDPOINT = "/api/check";

const normalizeResponse = (data: ShopifyCheckResponse): NormalizedShopifyCheckResponse => ({
    ...data,
    detected_signals: Array.isArray(data.detected_signals) ? data.detected_signals : [],
    headers_sample: data.headers_sample ?? undefined,
});

export const createShopifyChecker = ({ fetcher = fetch }: ShopifyCheckerDependencies = {}) => {
    const check = async (url: string) => {
        const response = await fetcher(`${DEFAULT_ENDPOINT}?url=${encodeURIComponent(url)}`, {
            headers: { Accept: "application/json" },
        });

        if (!response.ok) {
            throw new Error("Unable to reach the Shopify checker service right now.");
        }

        const data: ShopifyCheckResponse = await response.json();

        return normalizeResponse(data);
    };

    return { check };
};
