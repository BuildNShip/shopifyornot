'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Shield,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { useShopifyCheck } from './hooks/useShopifyCheck';
import ShopifyCheckerForm from './components/ShopifyCheckerForm2';
import ShopifyResultCard from './components/ShopifyResultCard2';
import { cn } from './utils/cn';

const stats = [
  { value: '10K+', label: 'Checks Daily' },
  { value: '99.9%', label: 'Accuracy' },
  { value: '<100ms', label: 'Response Time' },
  { value: '150+', label: 'Countries' },
];

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
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-20 left-10 h-64 w-64 rounded-full bg-[#00A56A]/10 blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-[#006EFF]/10 blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-[#FFD95A]/5 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            className="text-center mb-12"
            initial="initial"
            animate="animate"
            variants={heroVariants}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#E6F7F1] rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="h-4 w-4 text-[#00A56A]" />
              <span className="text-sm font-medium text-[#008060] font-gochi">
                Trusted by 10,000+ Sales Teams
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
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
              className="text-lg md:text-xl text-[#424242] mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Instantly detect if any website is powered by Shopify.
              Perfect for sales teams, developers, and researchers.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              className="flex items-center justify-center gap-6 mb-12"
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

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center"
                variants={staggerItem}
              >
                <motion.div
                  className="text-2xl md:text-3xl font-bold text-[#008060] mb-1"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs text-[#666666] font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


    </>
  );
}