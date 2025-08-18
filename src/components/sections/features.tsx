"use client";

import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { BarChart3, Brain, Users, Package, DollarSign, TrendingUp } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group relative overflow-hidden border-0 bg-elevate-token backdrop-blur-sm p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 rounded-brand shadow-soft-token"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
  <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl text-inverse-token mb-4 transition-transform duration-500 ${
          isHovered ? 'scale-110 rotate-6' : ''
  }`} style={{ background: 'linear-gradient(135deg, rgb(var(--brand-primary)), rgb(var(--brand-accent)))' }}>
          {icon}
        </div>
        
  <h3 className="text-xl font-semibold text-base-token mb-3 group-hover:text-[rgb(var(--brand-primary))] transition-colors duration-300">
          {title}
        </h3>
        
  <p className="text-muted-token leading-relaxed group-hover:text-base-token transition-colors duration-300">
          {description}
        </p>
        
  <div className="absolute bottom-0 left-0 w-0 h-1" style={{ background: 'linear-gradient(90deg, rgb(var(--brand-primary)), rgb(var(--brand-accent)))' }} />
      </div>
    </Card>
  );
};

interface AnimatedCounterProps {
  value: string;
  label: string;
  format: 'percentage' | 'currency' | 'number';
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, label, format }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(`counter-${label.replace(/\s+/g, '-').toLowerCase()}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [label]);

  useEffect(() => {
    if (!isVisible) return;

    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current += increment;

      if (step >= steps) {
        current = numericValue;
        clearInterval(timer);
      }

      let formattedValue = "";
      switch (format) {
        case 'percentage':
          formattedValue = `${Math.round(current)}%`;
          break;
        case 'currency':
          formattedValue = `$${(current / 1000).toFixed(1)}M`;
          break;
        case 'number':
          if (current >= 1000) {
            formattedValue = `${Math.round(current / 1000)}K+`;
          } else {
            formattedValue = Math.round(current).toString();
          }
          break;
        default:
          formattedValue = Math.round(current).toString();
      }

      setDisplayValue(formattedValue);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value, format]);

  return (
    <div 
      id={`counter-${label.replace(/\s+/g, '-').toLowerCase()}`}
      className="text-center group"
    >
      <div className="relative">
        <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent mb-2 transition-transform duration-300 group-hover:scale-110 gradient-brand">
          {displayValue}
        </div>
        <div className="absolute inset-0 text-4xl md:text-5xl font-bold text-inverse-token/20 blur-sm -z-10 group-hover:text-inverse-token/40 transition-colors duration-300">
          {displayValue}
        </div>
      </div>
      <p className="text-muted-token font-medium group-hover:text-[rgb(var(--brand-primary))] transition-colors duration-300">
        {label}
      </p>
    </div>
  );
};

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "RetailGenie AI Platform",
      description: "Single Source of Intelligence (SSOI) to power all your Retail AI applications with real-time insights"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Behavior Intelligence",
      description: "Harness customer behavior intelligence across channels and modes into actionable intelligence for critical Retail applications"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "MerchAssist Agent",
      description: "World's first Recommendation Engine for Merchants. Help Merchants, Planners, Buyers get more data-driven and customer-centric"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Multi-Channel Analytics",
      description: "Comprehensive analytics across Merchandising, Marketing, eCommerce and Supply Chain operations"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Real-Time Demand Sync",
      description: "Sync Supply with real-time Demand by translating Customer Behavior into Actionable Intelligence with AI Agents"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Domain Language Models",
      description: "Powered by specialized Domain Language Models for front and back-office functions in retail operations"
    }
  ];

  const statistics = [
    { value: "25", label: "Increase in Sales", format: "percentage" as const },
    { value: "2500", label: "Revenue Generated", format: "currency" as const },
    { value: "10000", label: "Active Users", format: "number" as const },
    { value: "99.9", label: "Uptime", format: "percentage" as const }
  ];

  return (
    <section className="relative py-20 bg-surface-token overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-base-token mb-6">
            Powerful Features for{" "}
            <span className="gradient-brand bg-clip-text text-transparent">
              Smart Retail
            </span>
          </h2>
          <p className="text-xl text-muted-token max-w-3xl mx-auto leading-relaxed">
            Transform your retail operations with AI-powered insights and intelligent automation
            that drives growth and enhances customer experience.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="md:col-span-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {statistics.map((stat, index) => (
                <div
                  key={index}
                  className="relative p-6 rounded-brand bg-elevate-token backdrop-blur-sm border border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 shadow-soft-token"
                >
                  <AnimatedCounter
                    value={stat.value}
                    label={stat.label}
                    format={stat.format}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-in fade-in slide-in-from-bottom-10 duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full text-inverse-token font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 cursor-pointer gradient-brand">
            <span>Ready to transform your retail business?</span>
            <TrendingUp className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};