"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    CheckCircle,
    XCircle,
    AlertCircle,
    ChevronDown,
    ChevronUp,
    ShoppingBag,
    Globe,
    Server,
    Shield,
    Zap,
    ExternalLink,
    Copy,
    CheckCheck,
} from "lucide-react";
import { ShopifyResult } from "@/app/types/shopify";
import { cn } from "@/app/utils/cn";
import Card from "./ui/Card";
import Button from "./ui/Button";
import { TechnicalDetails } from "./TechnicalDetails";

interface ShopifyResultCardProps {
    result: ShopifyResult;
    confidenceDisplay: string;
    showTechnical: boolean;
    onToggleTechnical: () => void;
}

export default function ShopifyResultCard({
    result,
    confidenceDisplay,
    showTechnical,
    onToggleTechnical,
}: ShopifyResultCardProps) {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(result.url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const getStatusIcon = () => {
        if (result.isShopify) {
            return <CheckCircle className="h-6 w-6 text-[#00A56A]" />;
        }
        if (result.confidence > 0.3) {
            return <AlertCircle className="h-6 w-6 text-[#FFC453]" />;
        }
        return <XCircle className="h-6 w-6 text-[#D72C0D]" />;
    };

    const getStatusColor = () => {
        if (result.isShopify) return "text-[#00A56A]";
        if (result.confidence > 0.3) return "text-[#FFC453]";
        return "text-[#D72C0D]";
    };

    const getStatusBackground = () => {
        if (result.isShopify) return "bg-[#E6F7F1]";
        if (result.confidence > 0.3) return "bg-[#FFF8E6]";
        return "bg-[#FFF0ED]";
    };

    const resultVariants = {
        initial: { opacity: 0, scale: 0.9, y: 20 },
        animate: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.4,
            },
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            y: -20,
            transition: { duration: 0.3 },
        },
    };

    const badgeVariants = {
        initial: { scale: 0, rotate: -180 },
        animate: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring" as const,
                stiffness: 200,
                damping: 15,
                delay: 0.2,
            },
        },
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={result.url}
                variants={resultVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full max-w-2xl mx-auto"
            >
                <Card variant="elevated" padding="lg" className="relative overflow-hidden">
                    {/* Animated background pattern */}
                    <motion.div
                        className="absolute inset-0 opacity-5"
                        initial={{ backgroundPosition: "0% 0%" }}
                        animate={{ backgroundPosition: "100% 100%" }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        style={{
                            backgroundImage: `repeating-linear-gradient(
                45deg,
                ${result.isShopify ? "#00A56A" : "#D72C0D"},
                ${result.isShopify ? "#00A56A" : "#D72C0D"} 10px,
                transparent 10px,
                transparent 20px
              )`,
                        }}
                    />

                    <div className="relative">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                            <motion.div
                                className="flex items-center gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <motion.div
                                    variants={badgeVariants}
                                    initial="initial"
                                    animate="animate"
                                    className={cn(
                                        "p-3 rounded-xl flex-shrink-0",
                                        getStatusBackground()
                                    )}
                                >
                                    {getStatusIcon()}
                                </motion.div>
                                <div>
                                    <h3
                                        className={cn(
                                            "text-lg sm:text-xl font-semibold",
                                            getStatusColor()
                                        )}
                                    >
                                        {result.isShopify
                                            ? "Shopify Store Detected!"
                                            : "Not a Shopify Store"}
                                    </h3>
                                    <p className="text-sm text-[#999999] mt-1">
                                        Confidence: {confidenceDisplay}
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-center gap-2 self-stretch sm:self-auto"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={handleCopy}
                                    className="flex-1 sm:flex-initial"
                                    icon={
                                        copied ? (
                                            <CheckCheck className="h-4 w-4" />
                                        ) : (
                                            <Copy className="h-4 w-4" />
                                        )
                                    }
                                >
                                    {copied ? "Copied!" : "Copy"}
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => window.open(result.url, "_blank")}
                                    className="flex-1 sm:flex-initial"
                                    icon={<ExternalLink className="h-4 w-4" />}
                                >
                                    Visit
                                </Button>
                            </motion.div>
                        </div>

                        {/* URL Display */}
                        <motion.div
                            className="flex items-center gap-2 p-3 bg-[#F6F6F6] rounded-lg mb-6"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Globe className="h-4 w-4 text-[#666666]" />
                            <span className="text-sm text-[#424242] font-mono font-medium">
                                {result.url}
                            </span>
                            {result.shop_domain && (
                                <span className="text-xs text-[#008060] font-medium ml-auto">
                                    {result.shop_domain}
                                </span>
                            )}
                        </motion.div>

                        {/* Status Message */}
                        <motion.div
                            className={cn("p-4 rounded-lg mb-6", getStatusBackground())}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <p className={cn("font-medium", getStatusColor())}>{result.message}</p>
                            {result.details && (
                                <p className="text-sm text-[#424242] mt-2">{result.details}</p>
                            )}
                        </motion.div>

                        {/* Confidence Meter */}
                        <motion.div
                            className="mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-[#424242]">
                                    Detection Confidence
                                </span>
                                <span className="text-sm font-bold text-[#008060]">
                                    {confidenceDisplay}
                                </span>
                            </div>
                            <div className="h-3 bg-[#F6F6F6] rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${result.confidence * 100}%` }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.6,
                                        ease: [0.25, 0.1, 0.25, 1],
                                    }}
                                    style={{
                                        background:
                                            result.confidence > 0.7
                                                ? "linear-gradient(90deg, #00A56A 0%, #008060 100%)"
                                                : result.confidence > 0.3
                                                ? "linear-gradient(90deg, #FFC453 0%, #FFB020 100%)"
                                                : "linear-gradient(90deg, #E34850 0%, #D72C0D 100%)",
                                    }}
                                />
                            </div>
                        </motion.div>

                        {/* Quick Stats */}
                        {result.isShopify && (
                            <motion.div
                                className="grid grid-cols-3 gap-4 mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                            >
                                {[
                                    { icon: ShoppingBag, label: "Platform", value: "Shopify" },
                                    { icon: Shield, label: "SSL", value: "Secure" },
                                    { icon: Zap, label: "Speed", value: "Fast" },
                                ].map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        className="flex flex-col items-center p-3 bg-[#F6F6F6] rounded-lg"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.8 + index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <stat.icon className="h-5 w-5 text-[#008060] mb-1" />
                                        <span className="text-xs text-[#999999]">{stat.label}</span>
                                        <span className="text-sm font-semibold text-[#1A1A1A]">
                                            {stat.value}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}

                        {/* Technical Details Toggle */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                        >
                            <Button
                                variant="ghost"
                                onClick={onToggleTechnical}
                                className="w-full justify-between bg-[#F6F6F6] hover:bg-[#EBEBEB]"
                                icon={
                                    showTechnical ? (
                                        <ChevronUp className="h-4 w-4" />
                                    ) : (
                                        <ChevronDown className="h-4 w-4" />
                                    )
                                }
                            >
                                <span className="flex items-center gap-2">
                                    <Server className="h-4 w-4" />
                                    {showTechnical ? "Hide" : "Show"} Technical Details
                                </span>
                            </Button>
                        </motion.div>

                        {/* Technical Details */}
                        <AnimatePresence>
                            {showTechnical && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                                    className="overflow-hidden"
                                >
                                    <div className="mt-4">
                                        <TechnicalDetails
                                            result={result}
                                            showTechnical={true}
                                            onToggle={() => {}}
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </Card>
            </motion.div>
        </AnimatePresence>
    );
}
