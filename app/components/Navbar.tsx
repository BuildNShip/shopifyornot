'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { navbarVariants } from '../utils/animations';

export default function Navbar() {
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
          <Link
            href="/"
            className="flex items-center gap-2 text-base font-medium text-[#1A1A1A] hover:text-[#008060] transition-colors"
          >
            <Image
              src="/logo.png"
              alt="ShopifyOrNot logo"
              width={28}
              height={28}
              className="h-7 w-7"
              priority
            />
            <span>ShopifyOrNot</span>
          </Link>

          <div className="flex items-center gap-6">
            {/* The Story Link */}
            <Link
              href="/the-story"
              className="text-sm font-medium text-[#424242] hover:text-[#008060] transition-colors"
            >
              The Story
            </Link>

            {/* GitHub Star Button */}
            <motion.a
              href="https://github.com/BuildNShip/shopifyornot"
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
              <span className="text-xs font-medium">Star</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
