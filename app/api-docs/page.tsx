"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Copy, CheckCheck, ArrowLeft, Zap, Shield, Database, Globe } from "lucide-react";
import Link from "next/link";
import LightRaysBackground from "../components/LightRaysBackground";

export default function ApiDocsPage() {
    const [copiedEndpoint, setCopiedEndpoint] = useState(false);
    const [copiedExample, setCopiedExample] = useState(false);

    const apiEndpoint = "https://api.shopifyornot.in/check?url={website}";
    const exampleCurl = `curl -X GET "https://shopifyornot.in/check?url=carencurepharmacy.com"`;

    const handleCopy = (text: string, type: "endpoint" | "example") => {
        navigator.clipboard.writeText(text);
        if (type === "endpoint") {
            setCopiedEndpoint(true);
            setTimeout(() => setCopiedEndpoint(false), 2000);
        } else {
            setCopiedExample(true);
            setTimeout(() => setCopiedExample(false), 2000);
        }
    };

    const responseFields = [
        {
            field: "is_shopify",
            type: "boolean",
            description: "True if Shopify signals detected",
            required: true,
        },
        {
            field: "confidence",
            type: "float",
            description: "0-1 confidence score of detection",
            required: false,
        },
        {
            field: "input_url",
            type: "string",
            description: "The URL that was checked",
            required: true,
        },
        {
            field: "final_url",
            type: "string",
            description: "Final URL after redirects",
            required: false,
        },
        {
            field: "shop_domain",
            type: "string",
            description: "The myshopify.com backend domain",
            required: false,
        },
        {
            field: "detected_signals",
            type: "array",
            description: "All Shopify fingerprints detected",
            required: false,
        },
        {
            field: "headers_sample",
            type: "object",
            description: "Sample of response headers",
            required: false,
        },
        {
            field: "elapsed_ms",
            type: "number",
            description: "Response time in milliseconds",
            required: false,
        },
    ];

    const exampleResponse = {
        input_url: "carencurepharmacy.com",
        final_url: "https://www.carencurepharmacy.com/",
        is_shopify: true,
        confidence: 0.95,
        shop_domain: "carencurepharmacy.myshopify.com",
        detected_signals: [
            "shopify-header",
            "shopify-cdn",
            "shopify-analytics",
            "shopify-checkout",
        ],
        headers_sample: {
            "x-shopify-stage": "production",
            "x-sorting-hat-podid": "123",
        },
        elapsed_ms: 234,
    };

    return (
        <>
            <LightRaysBackground />

            <div className="min-h-screen relative">
                {/* Hero Section */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#E6F7F1] rounded-full mb-4"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Code2 className="h-3 w-3 text-[#00A56A]" />
                            <span className="text-xs font-medium text-[#008060]">RESTful API</span>
                        </motion.div>

                        <h1 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008060] to-[#00A56A]">
                                API Documentation
                            </span>
                        </h1>

                        <p className="text-base text-[#666666] max-w-2xl mx-auto mb-2">
                            Want to automate lead qualification?
                        </p>
                        <p className="text-sm text-[#999999] max-w-2xl mx-auto">
                            Integrate our API with Zapier, n8n, CRM tools.
                        </p>

                        {/* Trust Indicators */}
                        <motion.div
                            className="flex items-center justify-center gap-6 mt-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            {[
                                { icon: Zap, text: "< 300ms response" },
                                { icon: Shield, text: "100% uptime" },
                                { icon: Database, text: "Cached results" },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.text}
                                    className="flex items-center gap-2 text-xs text-[#666666]"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                >
                                    <item.icon className="h-3 w-3 text-[#008060]" />
                                    <span>{item.text}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Endpoint Section */}
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-xl font-semibold text-[#1A1A1A] mb-4">Endpoint</h2>

                        <div className="relative bg-[#1A1A1A] rounded-lg p-4 mb-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="px-2 py-1 bg-[#00A56A] text-white text-xs font-semibold rounded">
                                        GET
                                    </span>
                                    <code className="text-sm text-white font-mono">
                                        {apiEndpoint}
                                    </code>
                                </div>
                                <button
                                    onClick={() =>
                                        handleCopy(
                                            apiEndpoint.replace(
                                                "{website}",
                                                "carencurepharmacy.com"
                                            ),
                                            "endpoint"
                                        )
                                    }
                                    className="flex items-center gap-2 px-3 py-1.5 text-xs text-white hover:text-[#00A56A] transition-colors"
                                >
                                    {copiedEndpoint ? (
                                        <>
                                            <CheckCheck className="h-3 w-3" />
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="h-3 w-3" />
                                            Copy
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>

                        <p className="text-sm text-[#666666]">
                            Replace{" "}
                            <code className="px-1 py-0.5 bg-[#F6F6F6] rounded text-xs">
                                {"{website}"}
                            </code>{" "}
                            with the domain you want to check.
                        </p>
                    </motion.div>

                    {/* Example Request */}
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h2 className="text-xl font-semibold text-[#1A1A1A] mb-4">
                            Example Request
                        </h2>

                        <div className="relative bg-[#1A1A1A] rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs text-[#666666]">cURL</span>
                                <button
                                    onClick={() => handleCopy(exampleCurl, "example")}
                                    className="flex items-center gap-2 px-3 py-1.5 text-xs text-white hover:text-[#00A56A] transition-colors"
                                >
                                    {copiedExample ? (
                                        <>
                                            <CheckCheck className="h-3 w-3" />
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="h-3 w-3" />
                                            Copy
                                        </>
                                    )}
                                </button>
                            </div>
                            <pre className="text-xs text-[#00A56A] font-mono overflow-x-auto">
                                {exampleCurl}
                            </pre>
                        </div>
                    </motion.div>

                    {/* Response Fields */}
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h2 className="text-xl font-semibold text-[#1A1A1A] mb-4">
                            Response Fields
                        </h2>

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-[#DCDCDC]">
                                        <th className="text-left py-3 px-4 text-sm font-semibold text-[#1A1A1A]">
                                            Field
                                        </th>
                                        <th className="text-left py-3 px-4 text-sm font-semibold text-[#1A1A1A]">
                                            Type
                                        </th>
                                        <th className="text-left py-3 px-4 text-sm font-semibold text-[#1A1A1A]">
                                            Description
                                        </th>
                                        <th className="text-left py-3 px-4 text-sm font-semibold text-[#1A1A1A]">
                                            Required
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {responseFields.map((field, index) => (
                                        <tr key={field.field} className="border-b border-[#F6F6F6]">
                                            <td className="py-3 px-4">
                                                <code className="text-xs font-mono text-[#008060]">
                                                    {field.field}
                                                </code>
                                            </td>
                                            <td className="py-3 px-4">
                                                <span className="text-xs text-[#666666]">
                                                    {field.type}
                                                </span>
                                            </td>
                                            <td className="py-3 px-4">
                                                <span className="text-xs text-[#666666]">
                                                    {field.description}
                                                </span>
                                            </td>
                                            <td className="py-3 px-4">
                                                <span
                                                    className={`text-xs font-medium ${
                                                        field.required
                                                            ? "text-[#00A56A]"
                                                            : "text-[#999999]"
                                                    }`}
                                                >
                                                    {field.required ? "Yes" : "No"}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>

                    {/* Example Response */}
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <h2 className="text-xl font-semibold text-[#1A1A1A] mb-4">
                            Example Response
                        </h2>

                        <div className="bg-[#1A1A1A] rounded-lg p-4 overflow-x-auto">
                            <pre className="text-xs text-[#00A56A] font-mono">
                                {JSON.stringify(exampleResponse, null, 2)}
                            </pre>
                        </div>
                    </motion.div>

                    {/* Integration Examples */}
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <h2 className="text-xl font-semibold text-[#1A1A1A] mb-4">
                            Integration Examples
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                {
                                    title: "Zapier",
                                    description: "Use webhooks to check URLs automatically",
                                    color: "#FF6900",
                                },
                                {
                                    title: "n8n",
                                    description:
                                        "Create automated workflows with HTTP Request node",
                                    color: "#EA4B71",
                                },
                                {
                                    title: "Make (Integromat)",
                                    description: "Build scenarios with HTTP module",
                                    color: "#6D3FEA",
                                },
                            ].map((integration, index) => (
                                <motion.div
                                    key={integration.title}
                                    className="p-4 bg-white/40 backdrop-blur-md border border-white/20 rounded-lg"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 + index * 0.1 }}
                                >
                                    <div
                                        className="w-8 h-8 rounded mb-3 flex items-center justify-center"
                                        style={{ backgroundColor: `${integration.color}20` }}
                                    >
                                        <Globe
                                            className="h-4 w-4"
                                            style={{ color: integration.color }}
                                        />
                                    </div>
                                    <h3 className="text-sm font-semibold text-[#1A1A1A] mb-1">
                                        {integration.title}
                                    </h3>
                                    <p className="text-xs text-[#666666]">
                                        {integration.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Rate Limits */}
                    <motion.div
                        className="mb-12 relative overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        {/* Background gradient effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00A56A]/10 via-transparent to-[#008060]/10 rounded-xl blur-xl" />

                        {/* Glassmorphic container */}
                        <div className="relative p-6 bg-white/30 backdrop-blur-lg border border-white/30 rounded-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
                            {/* Inner glow effect */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />

                            <div className="relative">
                                <h3 className="text-base font-semibold text-[#1A1A1A] mb-2">
                                    Rate Limits
                                </h3>
                                <p className="text-sm text-[#666666] mb-3">
                                    The API is currently free with reasonable usage limits and may
                                    become a paid-only feature in the future depending on usage:
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-sm text-[#666666]">
                                        <span className="w-1.5 h-1.5 bg-[#00A56A] rounded-full"></span>
                                        60 requests per minute per IP
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-[#666666]">
                                        <span className="w-1.5 h-1.5 bg-[#00A56A] rounded-full"></span>
                                        1000 requests per day per IP
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-[#666666]">
                                        <span className="w-1.5 h-1.5 bg-[#00A56A] rounded-full"></span>
                                        Cached results for improved performance
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        className="text-center py-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                    >
                        <p className="text-sm text-[#666666] mb-4">
                            Need higher limits or custom integration?
                        </p>
                        <a
                            href="https://wa.me/918606358178?text=Hi%20Adnan%2C%20I%27d%20like%20to%20talk%20more%20about%20ShopifyOrNot."
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#008060] to-[#00A56A] text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                        >
                            Contact Us
                        </a>
                    </motion.div>
                </section>
            </div>
        </>
    );
}
