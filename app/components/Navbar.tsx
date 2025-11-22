'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.nav
      className="bg-transparent"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="text-base font-medium text-[#1A1A1A] hover:text-[#008060] transition-colors">
            ShopifyOrNot
          </Link>

          {/* GitHub Star Button */}
          <motion.a
            href="https://github.com/yourusername/shopifyornot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#666666] hover:text-[#1A1A1A] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Github className="h-4 w-4" />
            <Star className="h-3 w-3 fill-current" />
            <span className="text-xs font-medium">1.2k</span>
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}