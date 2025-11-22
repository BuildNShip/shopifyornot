"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Globe, Loader2, Sparkles, Zap, ExternalLink } from "lucide-react";
import { cn } from "@/app/utils/cn";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { useRouter } from "next/navigation";

interface ShopifyCheckerFormProps {
    url: string;
    loading: boolean;
    helperText: string;
    onSubmit: (e: React.FormEvent) => void;
    onUrlChange: (url: string) => void;
    showGoBack?: boolean;
    originalUrl?: string;
}

export default function ShopifyCheckerForm({
    url,
    loading,
    helperText,
    onSubmit,
    onUrlChange,
    showGoBack = false,
    originalUrl = "",
}: ShopifyCheckerFormProps) {
    const [isFocused, setIsFocused] = useState(false);
    const router = useRouter();

    // Determine if we should show "Visit Site" button
    const isUrlModified = originalUrl && url !== originalUrl;
    const shouldShowVisitSite = showGoBack && !isUrlModified;

    const handleVisitSite = () => {
        // Better protocol detection to avoid double protocols
        window.open(url, "_blank");
    };

    const formVariants = {
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

    const sparkleVariants = {
        initial: { scale: 0, rotate: 0 },
        animate: {
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
            },
        },
    };

    return (
        <motion.div
            className="w-full max-w-2xl mx-auto"
            variants={formVariants}
            initial="initial"
            animate="animate"
        >
            <form onSubmit={onSubmit} className="relative">
                {/* Animated background gradient */}
                <motion.div
                    className={cn(
                        "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500",
                        "bg-gradient-to-r from-[#00A56A]/20 via-[#008060]/20 to-[#00A56A]/20",
                        isFocused && "opacity-100"
                    )}
                    animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{ filter: "blur(40px)" }}
                />

                <div className="relative">
                    <div className="relative">
                        {/* Floating sparkles */}
                        <AnimatePresence>
                            {isFocused && (
                                <>
                                    <motion.div
                                        className="absolute -top-8 left-10"
                                        variants={sparkleVariants}
                                        initial="initial"
                                        animate="animate"
                                    >
                                        <Sparkles className="h-4 w-4 text-[#FFD95A]" />
                                    </motion.div>
                                    <motion.div
                                        className="absolute -top-6 right-12"
                                        variants={sparkleVariants}
                                        initial="initial"
                                        animate="animate"
                                        transition={{ delay: 0.5 }}
                                    >
                                        <Sparkles className="h-3 w-3 text-[#00A56A]" />
                                    </motion.div>
                                    <motion.div
                                        className="absolute -bottom-6 left-1/3"
                                        variants={sparkleVariants}
                                        initial="initial"
                                        animate="animate"
                                        transition={{ delay: 1 }}
                                    >
                                        <Sparkles className="h-5 w-5 text-[#006EFF]" />
                                    </motion.div>
                                </>
                            )}
                        </AnimatePresence>

                        {/* Input Group */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <div className="flex-1 relative">
                                <motion.div
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999999] z-10 pointer-events-none"
                                    animate={{ rotate: loading ? 360 : 0 }}
                                    transition={{
                                        duration: 1,
                                        repeat: loading ? Infinity : 0,
                                        ease: "linear",
                                    }}
                                >
                                    <Globe className="h-5 w-5" />
                                </motion.div>
                                <motion.input
                                    type="text"
                                    value={url}
                                    onChange={(e) => onUrlChange(e.target.value)}
                                    onFocus={() => setIsFocused(true)}
                                    onBlur={() => setIsFocused(false)}
                                    placeholder="Enter website URL (e.g., example.com)"
                                    className={cn(
                                        "w-full h-12 pl-11 pr-4 text-sm",
                                        "bg-white border-2 border-[#DCDCDC] rounded-xl",
                                        "placeholder:text-[#999999]",
                                        "transition-all duration-300",
                                        "hover:border-[#999999]",
                                        "focus:outline-none focus:border-[#008060] focus:ring-4 focus:ring-[#008060]/10",
                                        "disabled:bg-[#F6F6F6] disabled:cursor-not-allowed"
                                    )}
                                    disabled={loading}
                                    whileFocus={{ scale: 1.01 }}
                                />
                            </div>

                            <Button
                                type={shouldShowVisitSite ? "button" : "submit"}
                                variant="primary"
                                size="lg"
                                loading={loading}
                                className="sm:w-auto w-full"
                                onClick={shouldShowVisitSite ? handleVisitSite : undefined}
                                icon={
                                    loading ? (
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                    ) : shouldShowVisitSite ? (
                                        <ExternalLink className="h-5 w-5" />
                                    ) : (
                                        <Zap className="h-5 w-5" />
                                    )
                                }
                            >
                                {loading
                                    ? "Checking..."
                                    : shouldShowVisitSite
                                    ? "Go Back"
                                    : "Check Now"}
                            </Button>
                        </div>
                    </div>

                    {/* Helper Text */}
                    <motion.p
                        className="mt-3 text-sm text-[#666666] text-center font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        {helperText}
                    </motion.p>
                </div>
            </form>
        </motion.div>
    );
}
