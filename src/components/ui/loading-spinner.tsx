"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  variant?: 'default' | 'dots' | 'pulse' | 'bars';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'accent' | 'white';
  className?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12',
};

const colorClasses = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  accent: '[color:#2E5A87]',
  white: 'text-white',
};

const DefaultSpinner = ({ size, color }: { size: string; color: string }) => (
  <motion.svg
    className={cn(sizeClasses[size as keyof typeof sizeClasses], colorClasses[color as keyof typeof colorClasses])}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </motion.svg>
);

const DotsSpinner = ({ size, color }: { size: string; color: string }) => {
  const dotSize = {
    sm: 'w-1 h-1',
    md: 'w-1.5 h-1.5',
    lg: 'w-2 h-2',
    xl: 'w-3 h-3',
  };

  return (
    <div className="flex space-x-1">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={cn(
            dotSize[size as keyof typeof dotSize],
            'bg-current rounded-full',
            colorClasses[color as keyof typeof colorClasses]
          )}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: index * 0.2,
          }}
        />
      ))}
    </div>
  );
};

const PulseSpinner = ({ size, color }: { size: string; color: string }) => (
  <motion.div
    className={cn(
      sizeClasses[size as keyof typeof sizeClasses],
      'rounded-full bg-current',
      colorClasses[color as keyof typeof colorClasses]
    )}
    animate={{
      scale: [1, 1.3, 1],
      opacity: [1, 0.5, 1],
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const BarsSpinner = ({ size, color }: { size: string; color: string }) => {
  const barHeight = {
    sm: 'h-3',
    md: 'h-4',
    lg: 'h-6',
    xl: 'h-8',
  };

  const barWidth = {
    sm: 'w-0.5',
    md: 'w-1',
    lg: 'w-1.5',
    xl: 'w-2',
  };

  return (
    <div className="flex space-x-1 items-end">
      {[0, 1, 2, 3].map((index) => (
        <motion.div
          key={index}
          className={cn(
            barWidth[size as keyof typeof barWidth],
            barHeight[size as keyof typeof barHeight],
            'bg-current rounded-sm',
            colorClasses[color as keyof typeof colorClasses]
          )}
          animate={{
            scaleY: [1, 0.5, 1],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: index * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  variant = 'default',
  size = 'md',
  color = 'primary',
  className,
}) => {
  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return <DotsSpinner size={size} color={color} />;
      case 'pulse':
        return <PulseSpinner size={size} color={color} />;
      case 'bars':
        return <BarsSpinner size={size} color={color} />;
      default:
        return <DefaultSpinner size={size} color={color} />;
    }
  };

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center',
        className
      )}
      role="status"
      aria-label="Loading"
    >
      {renderSpinner()}
      <span className="sr-only">Loading...</span>
    </div>
  );
};