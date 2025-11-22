import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "ShopifyOrNot - Instant Shopify Store Detection",
  description:
    "The fastest way to check if any website is powered by Shopify. Built for sales teams, developers, and curious minds. Get instant results with advanced detection technology.",
  keywords: "Shopify detector, Shopify checker, ecommerce platform detector, website technology checker, Shopify store finder",
  authors: [{ name: "ShopifyOrNot Team" }],
  openGraph: {
    title: "ShopifyOrNot - Instant Shopify Store Detection",
    description: "Check if any website is powered by Shopify in milliseconds",
    url: "https://shopifyornot.com",
    siteName: "ShopifyOrNot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShopifyOrNot - Instant Shopify Store Detection",
    description: "Check if any website is powered by Shopify in milliseconds",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-instrument antialiased bg-white text-[#1A1A1A] min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
