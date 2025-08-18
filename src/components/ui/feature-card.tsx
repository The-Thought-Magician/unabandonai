"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  variant?: "default" | "outlined" | "gradient" | "glass";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const FeatureCard = ({
  icon,
  title,
  description,
  variant = "default",
  className,
  onClick,
  disabled = false,
}: FeatureCardProps) => {
  const baseClasses = "relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer group";
  
  const variantClasses = {
    default: "bg-white border border-border shadow-sm hover:shadow-md",
    outlined: "bg-transparent border-2 border-border hover:border-primary hover:shadow-lg",
    gradient: "bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 hover:border-primary/40",
    glass: "bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl hover:bg-white/20",
  };

  const containerVariants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.02, 
      y: -4,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 25 
      }
    },
    tap: { 
      scale: 0.98,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 25 
      }
    }
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.1, 
      rotate: 5,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 25 
      }
    }
  };

  const contentVariants = {
    initial: { y: 0 },
    hover: { 
      y: -2,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 25 
      }
    }
  };

  const shimmerVariants = {
    initial: { x: "-100%" },
    hover: { 
      x: "100%",
      transition: { 
        duration: 0.6, 
        ease: "easeInOut" 
      }
    }
  };

  return (
    <motion.div
      className={cn(
        baseClasses,
        variantClasses[variant],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      variants={containerVariants}
      initial="initial"
      whileHover={!disabled ? "hover" : undefined}
      whileTap={!disabled && onClick ? "tap" : undefined}
      onClick={!disabled ? onClick : undefined}
    >
      {/* Shimmer effect overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          variants={shimmerVariants}
          style={{ width: "50%" }}
        />
      </div>

      {/* Background glow for gradient variant */}
      {variant === "gradient" && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}

      {/* Card content */}
      <div className="relative p-6 space-y-4">
        {/* Icon section */}
        {icon && (
          <motion.div
            className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20"
            variants={iconVariants}
          >
            {icon}
          </motion.div>
        )}

        {/* Content section */}
        <motion.div variants={contentVariants} className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
            {description}
          </p>
        </motion.div>

        {/* Interactive indicator */}
        {onClick && !disabled && (
          <motion.div
            className="absolute bottom-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          />
        )}
      </div>

      {/* Border highlight effect */}
      <div className="absolute inset-0 rounded-xl border border-primary/0 group-hover:border-primary/20 transition-all duration-300" />
    </motion.div>
  );
};