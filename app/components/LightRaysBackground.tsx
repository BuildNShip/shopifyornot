'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function LightRaysBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#E6F7F1] to-[#F0FBF8]" />

      {/* Animated light rays */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradient definitions for rays */}
          <linearGradient id="ray1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00A56A" stopOpacity="0" />
            <stop offset="50%" stopColor="#00A56A" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#008060" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="ray2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#008060" stopOpacity="0" />
            <stop offset="50%" stopColor="#00A56A" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#E6F7F1" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="ray3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E6F7F1" stopOpacity="0" />
            <stop offset="50%" stopColor="#00A56A" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#008060" stopOpacity="0" />
          </linearGradient>

          {/* Radial gradient for glow effect */}
          <radialGradient id="glow">
            <stop offset="0%" stopColor="#00A56A" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00A56A" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Central glow */}
        <motion.circle
          cx="600"
          cy="400"
          r="300"
          fill="url(#glow)"
          animate={{
            r: [300, 350, 300],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Light rays */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30) - 90; // Distribute rays evenly
          const x1 = 600;
          const y1 = 400;
          const length = 800;
          const x2 = x1 + length * Math.cos(angle * Math.PI / 180);
          const y2 = y1 + length * Math.sin(angle * Math.PI / 180);

          return (
            <motion.line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={`url(#ray${(i % 3) + 1})`}
              strokeWidth={i % 2 === 0 ? "80" : "60"}
              strokeLinecap="round"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
                rotate: [0, 3, 0],
              }}
              transition={{
                duration: 10 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
              style={{ transformOrigin: '600px 400px' }}
            />
          );
        })}

        {/* Additional animated beams */}
        <motion.path
          d="M 600 400 L 100 0"
          stroke="url(#ray1)"
          strokeWidth="100"
          strokeLinecap="round"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            strokeWidth: [100, 120, 100],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.path
          d="M 600 400 L 1100 0"
          stroke="url(#ray2)"
          strokeWidth="100"
          strokeLinecap="round"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            strokeWidth: [100, 120, 100],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.path
          d="M 600 400 L 0 800"
          stroke="url(#ray3)"
          strokeWidth="80"
          strokeLinecap="round"
          animate={{
            opacity: [0.15, 0.35, 0.15],
            strokeWidth: [80, 100, 80],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.path
          d="M 600 400 L 1200 800"
          stroke="url(#ray1)"
          strokeWidth="80"
          strokeLinecap="round"
          animate={{
            opacity: [0.15, 0.35, 0.15],
            strokeWidth: [80, 100, 80],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </svg>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-[#00A56A] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100, -20],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}