"use client";

import React from "react";
import { useShopifyCheck } from "./hooks/useShopifyCheck";
import ShopifyCheckerForm from "./components/ShopifyCheckerForm";
import ShopifyResultCard from "./components/ShopifyResultCard";
import LightRaysBackground from "./components/LightRaysBackground";
import ShopifyHero from "./components/ShopifyHero";
import ErrorAlert from "./components/ErrorAlert";
import MarketingCopy from "./components/MarketingCopy";
import DetectionMethods from "./components/DetectionMethods";

export default function HomePage() {
    const {
        url,
        setUrl,
        result,
        loading,
        error,
        showTechnical,
        toggleTechnical,
        handleSubmit,
        confidenceDisplay,
    } = useShopifyCheck();

    return (
        <>
            {/* Light Rays Background */}
            <LightRaysBackground />

            {/* Hero Section */}
            <section className="relative min-h-[calc(100vh-200px)] flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
                    <ShopifyHero />

                    {/* Checker Form */}
                    <ShopifyCheckerForm
                        url={url}
                        loading={loading}
                        helperText=""
                        onSubmit={handleSubmit}
                        onUrlChange={setUrl}
                    />

                    {/* Marketing Copy */}
                    {!result && <MarketingCopy />}

                    {/* Error Display */}
                    {error && <ErrorAlert message={error} />}

                    {/* Result Display */}
                    {result && (
                        <div className="mt-8">
                            <ShopifyResultCard
                                result={result}
                                confidenceDisplay={confidenceDisplay}
                                showTechnical={showTechnical}
                                onToggleTechnical={toggleTechnical}
                            />
                        </div>
                    )}

                    {/* Detection Methods */}
                    <DetectionMethods />
                </div>
            </section>
        </>
    );
}
