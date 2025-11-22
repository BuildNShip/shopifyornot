import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
    metadataBase: new URL("https://shopifyornot.in"),
    title: "ShopifyOrNot.in — Instantly Detect Shopify Websites | Free API for Sales Teams",
    description:
        "Find out if a website is built on Shopify. Just paste a link or add ‘shopifyornot.in/’ before any domain. Free API and integrations for Zapier, n8n & CRMs to qualify Shopify leads faster.",
    keywords:
        "Shopify detector, Shopify website checker, Shopify API, detect Shopify site, Shopify tech stack, Shopify leads, Shopify qualification, Shopify app sales, ShopifyOrNot, shopifyornot.in",
    authors: [{ name: "ShopifyOrNot.in" }],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        url: "https://shopifyornot.in/",
        title: "ShopifyOrNot.in — Instantly Detect Shopify Websites",
        description:
            "Instantly check if a website is built on Shopify. Ideal for Shopify plugin & app sales teams. Paste link, use / prefix, or integrate via API.",
        siteName: "ShopifyOrNot.in",
        images: [
            {
                url: "https://raw.githubusercontent.com/BuildNShip/static/refs/heads/main/meta-preview.png",
                width: 1200,
                height: 630,
                alt: "ShopifyOrNot.in — Instantly Detect Shopify Websites",
            },
        ],
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "ShopifyOrNot.in — Instantly Detect Shopify Websites",
        description:
            "Just paste a URL or use shopifyornot.in/ before any domain to check if it’s a Shopify store. Free API for sales automation.",
        images: [
            "https://raw.githubusercontent.com/BuildNShip/static/refs/heads/main/meta-preview.png",
        ],
        site: "@shopifyornot",
    },
    themeColor: "#1a1a1a",
    icons: {
        icon: [
            { url: "/favicon.ico", type: "image/x-icon" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
            { url: "/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
        ],
        apple: [
            { url: "/apple-icon-57x57.png", sizes: "57x57" },
            { url: "/apple-icon-60x60.png", sizes: "60x60" },
            { url: "/apple-icon-72x72.png", sizes: "72x72" },
            { url: "/apple-icon-76x76.png", sizes: "76x76" },
            { url: "/apple-icon-114x114.png", sizes: "114x114" },
            { url: "/apple-icon-120x120.png", sizes: "120x120" },
            { url: "/apple-icon-144x144.png", sizes: "144x144" },
            { url: "/apple-icon-152x152.png", sizes: "152x152" },
            { url: "/apple-icon-180x180.png", sizes: "180x180" },
        ],
    },
    manifest: "/manifest.json",
    other: {
        "msapplication-TileColor": "#ffffff",
        "msapplication-TileImage": "/ms-icon-144x144.png",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <Script
                id="gtm-script"
                strategy="afterInteractive"
            >{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P3MHGHX3');`}</Script>
            <Script id="clarity-script" strategy="afterInteractive">{`(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "ua3z4cvbux");`}</Script>
            <body className="font-instrument antialiased bg-white text-[#1A1A1A] min-h-screen flex flex-col">
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-P3MHGHX3"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    />
                </noscript>
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
