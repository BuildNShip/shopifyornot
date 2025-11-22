'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingBag,
  Github,
  Twitter,
  Linkedin,
  Heart,
  ExternalLink,
  Sparkles,
  Zap,
  Shield,
  Globe
} from 'lucide-react';


const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

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
    <footer className="bg-[#111111] text-white">
      {/* CTA Section */}
      <motion.div
        className="bg-gradient-to-r from-[#008060] to-[#00A56A] py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Ready to check any website?
          </motion.h2>
          <motion.p
            className="text-lg mb-8 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Start identifying Shopify stores instantly. No credit card required.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <motion.button
              className="px-8 py-3 bg-white text-[#008060] rounded-lg font-semibold hover:bg-[#F6F6F6] transition-colors inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="h-5 w-5" />
              Get Started Free
            </motion.button>
            <motion.button
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Demo
              <ExternalLink className="h-4 w-4" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4 justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <ShoppingBag className="h-8 w-8 text-[#00A56A]" />
              </motion.div>
              <span className="text-xl font-bold">ShopifyOrNot</span>
            </div>
            <p className="text-[#999999] mb-6 max-w-md">
              The fastest way to identify Shopify stores. Built for sales teams,
              developers, and curious minds.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-[#999999] hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Features Bar */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#00A56A]/20">
              <Zap className="h-5 w-5 text-[#00A56A]" />
            </div>
            <div>
              <p className="font-medium">Lightning Fast</p>
              <p className="text-sm text-[#999999]">Results in milliseconds</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#00A56A]/20">
              <Shield className="h-5 w-5 text-[#00A56A]" />
            </div>
            <div>
              <p className="font-medium">100% Secure</p>
              <p className="text-sm text-[#999999]">Your data is safe</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#00A56A]/20">
              <Globe className="h-5 w-5 text-[#00A56A]" />
            </div>
            <div>
              <p className="font-medium">Global Coverage</p>
              <p className="text-sm text-[#999999]">Any Shopify store worldwide</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <p className="text-sm text-[#999999] mb-4 md:mb-0">
            © {currentYear} ShopifyOrNot. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-[#999999]">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="h-4 w-4 text-[#E34850] fill-[#E34850]" />
            </motion.div>
            <span>for SalesOps teams everywhere</span>
            <Sparkles className="h-4 w-4 text-[#FFD95A]" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}