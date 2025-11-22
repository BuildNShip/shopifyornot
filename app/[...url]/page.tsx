'use client';

import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Zap,
  Shield,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { useShopifyCheck } from '../hooks/useShopifyCheck';
import ShopifyCheckerForm from '../components/ShopifyCheckerForm2';
import ShopifyResultCard from '../components/ShopifyResultCard2';
import LightRaysBackground from '../components/LightRaysBackground';

const stats = [
  { value: '10K+', label: 'Checks Daily' },
  { value: '99.9%', label: 'Accuracy' },
  { value: '<100ms', label: 'Response Time' },
  { value: '150+', label: 'Countries' },
];

export default function DynamicPage() {
  const params = useParams();

  // Get the URL from the catch-all route parameter and decode it
  const rawUrlFromPath = params.url ? (Array.isArray(params.url) ? params.url.join('/') : params.url) : '';

  // Decode the URL and clean it up
  let urlFromPath = '';
  try {
    urlFromPath = decodeURIComponent(rawUrlFromPath);
    // Remove any protocol if it was accidentally included
    urlFromPath = urlFromPath.replace(/^(https?:\/\/)/, '');
    // Clean up any double slashes that might have been encoded
    urlFromPath = urlFromPath.replace(/\/\//g, '/');
  } catch (e) {
    // If decoding fails, use the raw path
    urlFromPath = rawUrlFromPath;
  }

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
  } = useShopifyCheck({
    initialUrl: urlFromPath,
    autoCheck: true
  });

  // Track if we've completed a check (for showing "Go Back" button)
  const hasCompletedCheck = result !== null;

  // Update the URL when the route changes
  useEffect(() => {
    if (urlFromPath) {
      setUrl(urlFromPath);
    }
  }, [urlFromPath, setUrl]);

  const heroVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
  };

  return (
    <>
      {/* Light Rays Background */}
      <LightRaysBackground />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-200px)] flex items-center justify-center">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <motion.div
            className="text-center mb-6"
            initial="initial"
            animate="animate"
            variants={heroVariants}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#E6F7F1] rounded-full mb-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="h-3 w-3 text-[#00A56A]" />
              <span className="text-xs font-medium text-[#008060] font-gochi">
                Trusted by 10,000+ Sales Teams
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Is it a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008060] to-[#00A56A]">
                Shopify
              </span>{' '}
              store?
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-sm md:text-base text-[#424242] mb-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Instantly detect if any website is powered by Shopify.
              Perfect for sales teams, developers, and researchers.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              className="flex items-center justify-center gap-4 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {[
                { icon: Shield, text: 'Secure' },
                { icon: Zap, text: 'Fast' },
                { icon: CheckCircle, text: 'Accurate' },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  className="flex items-center gap-2 text-sm text-[#666666]"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <item.icon className="h-4 w-4 text-[#008060]" />
                  <span className="font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Checker Form */}
          <ShopifyCheckerForm
            url={url}
            loading={loading}
            helperText="Enter any website URL to check instantly"
            onSubmit={handleSubmit}
            onUrlChange={setUrl}
            showGoBack={hasCompletedCheck}
            originalUrl={urlFromPath}
          />

          {/* Error Display */}
          {error && (
            <motion.div
              className="max-w-2xl mx-auto mt-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="p-4 bg-[#FFF0ED] border border-[#E34850] rounded-lg">
                <p className="text-[#D72C0D] font-medium">{error}</p>
              </div>
            </motion.div>
          )}

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

        </div>
      </section>


    </>
  );
}