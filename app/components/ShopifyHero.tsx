"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, CheckCircle, Sparkles, Star } from "lucide-react";
import { useGithubStars } from "../hooks/useGithubStars";

export default function ShopifyHero() {
    const heroVariants = {
        initial: { opacity: 0, y: 20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    const { stars } = useGithubStars();

    return (
        <motion.div
            className="text-center mb-6"
            initial="initial"
            animate="animate"
            variants={heroVariants}
        >
            {/* GitHub Stars Badge */}
            {stars !== null && (
                <motion.a
                    href="https://github.com/BuildNShip/shopifyornot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F6F6F6] rounded-full mb-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                >
                    <Star className="h-3 w-3 text-[#008060] fill-[#008060]" />
                    <span className="text-xs font-medium text-[#1A1A1A]">
                        {stars.toLocaleString()} GitHub stars
                    </span>
                </motion.a>
            )}

            {/* Marketing Badge */}
            <motion.div
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#E6F7F1] rounded-full mb-3 ml-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Sparkles className="h-3 w-3 text-[#00A56A]" />
                <span className="text-xs font-medium text-[#008060] ">
                    Going To Be Trusted by 10,000+ Sales Teams
                </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                Is It a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008060] to-[#00A56A]">
                    Shopify
                </span>{" "}
                Store?
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                className="text-sm md:text-base text-[#424242] mb-4 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Leads qualify more faster now — For Shopify app sales teams working at scale.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
                className="flex items-center justify-center gap-4 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                {[
                    { icon: Shield, text: "Secure" },
                    { icon: Zap, text: "Fast" },
                    { icon: CheckCircle, text: "Accurate" },
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
    );
}
