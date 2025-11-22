"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Heart, Sparkles } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    return (
        <footer className="bg-gradient-to-b from-transparent via-white/50 to-white text-[#1A1A1A]">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                {/* Bottom Bar */}
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    <p className="text-xs text-[#666666] mb-2 md:mb-0">
                        © {currentYear} ShopifyOrNot. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-[#666666]">
                        <span>Made with</span>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Heart className="h-3 w-3 text-[#E34850] fill-[#E34850]" />
                        </motion.div>
                        <span>for SalesOps teams everywhere</span>
                        <Sparkles className="h-3 w-3 text-[#FFD95A]" />
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
