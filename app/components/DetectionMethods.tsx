"use client";

import React from "react";
import { motion } from "framer-motion";
import { ClipboardPaste, Link2, Code2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DetectionMethods() {
    const methods = [
        {
            icon: ClipboardPaste,
            title: "Paste & Check",
            description: "Just paste any URL on our homepage",
            detail: "Perfect for quick manual checks",
            color: "#00A56A",
            bgColor: "#E6F7F1",
        },
        {
            icon: Link2,
            title: "Add Prefix",
            description: "Add shopifyornot.in/ before any website",
            example: "(e.g. shopifyornot.in/allbirds.com)",
            detail: "Super handy for browser checks",
            color: "#006EFF",
            bgColor: "#E6F0FF",
        },
        {
            icon: Code2,
            title: "Use Our API",
            description: "Automate Shopify lead qualification in your sales funnel",
            detail: "Perfect for CRM, Zapier, or n8n flows",
            hasAction: true,
            actionText: "Get API Access",
            color: "#8B5CF6",
            bgColor: "#F3E8FF",
        },
    ];

    const containerVariants = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        initial: { opacity: 0, y: 20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    return (
        <section className="mt-16 mb-12">
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto"
                variants={containerVariants}
                initial="initial"
                animate="animate"
            >
                {methods.map((method, index) => (
                    <motion.div
                        key={method.title}
                        variants={itemVariants}
                        className="relative group"
                    >
                        <div className="p-5 bg-white/40 backdrop-blur-md border border-white/20 rounded-xl hover:border-white/40 hover:bg-white/50 transition-all duration-300 h-full shadow-sm">
                            {/* Icon */}
                            <div
                                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 backdrop-blur-sm"
                                style={{ backgroundColor: `${method.bgColor}90` }}
                            >
                                <method.icon className="h-5 w-5" style={{ color: method.color }} />
                            </div>

                            {/* Title */}
                            <h3 className="text-base font-semibold text-[#1A1A1A] mb-2">
                                {method.title}
                            </h3>

                            {/* Description */}
                            <p className="text-xs text-[#666666] mb-1">{method.description}</p>

                            {/* Example if exists */}
                            {method.example && (
                                <p className="text-[10px] text-[#999999] mb-1 font-mono">
                                    {method.example}
                                </p>
                            )}

                            {/* Detail */}
                            <p className="text-xs text-[#999999]">{method.detail}</p>

                            {/* Action button if exists */}
                            {method.hasAction && (
                                <Link href="/api-docs">
                                    <motion.button
                                        className="mt-3 inline-flex items-center gap-1 text-xs font-medium"
                                        style={{ color: method.color }}
                                        whileHover={{ x: 2 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {method.actionText}
                                        <ArrowRight className="h-3 w-3" />
                                    </motion.button>
                                </Link>
                            )}
                        </div>

                        {/* Hover effect - subtle glow */}
                        <motion.div
                            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                            style={{
                                background: `radial-gradient(circle at center, ${method.bgColor}15 0%, transparent 70%)`,
                                boxShadow: `0 0 20px ${method.bgColor}20`,
                            }}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
