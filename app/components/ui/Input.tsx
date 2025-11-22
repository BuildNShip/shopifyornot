'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/app/utils/cn';

export interface InputProps extends Omit<HTMLMotionProps<'input'>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  error?: boolean;
  icon?: React.ReactNode;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    className,
    size = 'md',
    error = false,
    icon,
    helperText,
    ...props
  }, ref) => {
    const sizes = {
      sm: 'h-8 px-3 text-xs',
      md: 'h-10 px-4 text-sm',
      lg: 'h-12 px-5 text-base',
    };

    return (
      <div className="w-full">
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999999]">
              {icon}
            </div>
          )}
          <motion.input
            ref={ref}
            className={cn(
              'w-full rounded-lg',
              'border border-[#DCDCDC] bg-white',
              'placeholder:text-[#999999]',
              'transition-all duration-180',
              'focus:outline-none focus:ring-2 focus:ring-[#2C6ECB] focus:border-transparent',
              'hover:border-[#999999]',
              'disabled:bg-[#F6F6F6] disabled:cursor-not-allowed',
              error && 'border-[#D72C0D] focus:ring-[#D72C0D]',
              icon && 'pl-10',
              sizes[size],
              className
            )}
            whileFocus={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            {...props}
          />
        </div>
        {helperText && (
          <p className={cn(
            'mt-1.5 text-sm',
            error ? 'text-[#D72C0D]' : 'text-[#999999]'
          )}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;