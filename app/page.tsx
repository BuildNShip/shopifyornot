"use client";

import styles from "./page.module.css";
import ShopifyCheckerForm from "./components/ShopifyCheckerForm";
import ShopifyResultCard from "./components/ShopifyResultCard";
import { useShopifyCheck } from "./hooks/useShopifyCheck";

const helperText = "Press Enter or click Check to fetch the latest Shopify signals.";

const LandingPage = () => {
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
        <main className={styles.container}>
            <div className={styles.card}>
                <div className={styles.logoContainer}>
                    <svg
                        className={styles.logo}
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20 7h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 4h4v3h-4V4zm10 16H4V9h16v11z"
                            fill="currentColor"
                        />
                        <circle cx="12" cy="14" r="2" fill="currentColor" />
                    </svg>
                </div>
                <h1 className={styles.headline}>Check if a website is running on Shopify.</h1>
                <p className={styles.tagline}>Built for SalesOps teams who need answers fast.</p>

                <ShopifyCheckerForm
                    url={url}
                    loading={loading}
                    helperText={helperText}
                    onSubmit={handleSubmit}
                    onUrlChange={setUrl}
                />

                {error && <div className={styles.error}>{error}</div>}

                {result && (
                    <ShopifyResultCard
                        result={result}
                        confidenceDisplay={confidenceDisplay}
                        showTechnical={showTechnical}
                        onToggleTechnical={toggleTechnical}
                    />
                )}

                <footer className={styles.footer}>
                    <p className={styles.footerText}>
                        Made with care for SalesOps teams everywhere
                    </p>
                </footer>
            </div>
        </main>
    );
};

export default LandingPage;
