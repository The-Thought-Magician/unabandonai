"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  value: number;
  format?: 'number' | 'percentage' | 'currency';
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export const AnimatedCounter = ({
  value,
  format = 'number',
  duration = 2,
  className,
  prefix = '',
  suffix = ''
}: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  const formatNumber = (num: number): string => {
    switch (format) {
      case 'percentage':
        return `${num.toFixed(1)}%`;
      case 'currency':
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(num);
      case 'number':
      default:
        return new Intl.NumberFormat('en-US').format(Math.round(num));
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: [0.23, 1, 0.320, 1],
        }
      });

      // Animate the counter
      let startTime: number | null = null;
      const animateCounter = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          // Use easeOutCubic easing function
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const currentValue = easeProgress * value;
          setDisplayValue(currentValue);
          requestAnimationFrame(animateCounter);
        } else {
          setDisplayValue(value);
        }
      };

      requestAnimationFrame(animateCounter);
    }
  }, [isInView, value, duration, controls]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className={cn(
        'inline-block font-bold text-4xl text-foreground tabular-nums',
        'transition-all duration-200 ease-out',
        className
      )}
      role="text"
      aria-live="polite"
      aria-label={`${prefix}${formatNumber(value)}${suffix}`}
    >
      <motion.span
        initial={{ scale: 1 }}
        animate={isInView ? { scale: [1, 1.05, 1] } : { scale: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.23, 1, 0.320, 1],
          delay: 0.2
        }}
        className="inline-block"
      >
        {prefix}
        <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          {formatNumber(displayValue)}
        </span>
        {suffix}
      </motion.span>
    </motion.span>
  );
};

export default AnimatedCounter;