"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  gradient?: 'primary' | 'secondary' | 'accent' | 'rainbow' | 'custom';
  animated?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
}

const gradientStyles = {
  primary: 'bg-gradient-to-r from-primary via-blue-600 to-primary',
  secondary: 'bg-gradient-to-r from-muted-foreground via-gray-600 to-muted-foreground',
  accent: 'bg-gradient-to-r from-brand-primary via-blue-500 to-brand-green',
  rainbow: 'bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500',
  custom: 'bg-gradient-to-r from-[var(--gradient-from,#2E5A87)] via-[var(--gradient-via,#4CAF50)] to-[var(--gradient-to,#2E5A87)]'
};

const sizeStyles = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl'
};

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  gradient = 'primary',
  animated = false,
  className,
  size = 'md'
}) => {
  const baseStyles = 'inline-block bg-clip-text text-transparent font-semibold';
  const gradientClass = gradientStyles[gradient];
  const sizeClass = sizeStyles[size];
  
  const animationStyles = animated 
    ? 'bg-[length:200%_200%] animate-[gradient-shift_3s_ease-in-out_infinite]' 
    : '';

  return (
    <>
      {animated && (
        <style jsx>{`
          @keyframes gradient-shift {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          .animate-gradient-shift {
            animation: gradient-shift 3s ease-in-out infinite;
          }
        `}</style>
      )}
      <span
        className={cn(
          baseStyles,
          gradientClass,
          sizeClass,
          animationStyles,
          animated && 'animate-gradient-shift',
          className
        )}
        style={{
          backgroundSize: animated ? '200% 200%' : undefined,
        }}
      >
        {children}
      </span>
    </>
  );
};