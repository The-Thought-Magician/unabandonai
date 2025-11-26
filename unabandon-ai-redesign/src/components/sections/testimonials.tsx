"use client";

import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Building2, ShoppingBag, Smartphone, Store, Globe, Sparkles } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  logo: React.ReactNode;
  industry: string;
  metric: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Head of Operations",
    company: "StyleVogue",
    content:
      "UnAbandon AI transformed our inventory management completely. We've reduced overstock by 35% and improved our fashion trend predictions significantly.",
    rating: 5,
    logo: <ShoppingBag className="w-8 h-8" style={{ color: "rgb(var(--brand-primary))" }} />,
    industry: "Fashion Retailer",
    metric: "35% reduction in overstock",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "VP of Analytics",
    company: "TechHub Electronics",
    content:
      "The customer insights platform helped us increase conversion by 40%. Understanding our buyers' behavior has revolutionized our sales strategy.",
    rating: 5,
    logo: <Smartphone className="w-8 h-8" style={{ color: "rgb(var(--brand-primary))" }} />,
    industry: "Electronics Brand",
    metric: "40% conversion increase",
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Supply Chain Director",
    company: "FreshMart",
    content:
      "Real-time analytics improved our supply chain efficiency dramatically. We can now predict demand patterns and optimize our inventory across 200+ stores.",
    rating: 5,
    logo: <Store className="w-8 h-8" style={{ color: "rgb(var(--brand-primary))" }} />,
    industry: "Grocery Chain",
    metric: "Enhanced supply chain efficiency",
  },
  {
    id: 4,
    name: "David Kim",
    role: "E-commerce Manager",
    company: "MegaMart Department Store",
    content:
      "AI recommendations boosted our average order value by 28%. The personalization engine understands our customers better than we ever could manually.",
    rating: 5,
    logo: <Building2 className="w-8 h-8" style={{ color: "rgb(var(--brand-primary))" }} />,
    industry: "Department Store",
    metric: "28% AOV increase",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Data Science Lead",
    company: "MarketPlace Pro",
    content:
      "Predictive analytics reduced our stockouts by 60%. The platform's machine learning capabilities have transformed how we manage inventory across thousands of SKUs.",
    rating: 5,
    logo: <Globe className="w-8 h-8" style={{ color: "rgb(var(--brand-primary))" }} />,
    industry: "Online Marketplace",
    metric: "60% stockout reduction",
  },
  {
    id: 6,
    name: "Amanda Foster",
    role: "Marketing Director",
    company: "GlowBeauty",
    content:
      "Customer segmentation improved our marketing ROI by 45%. We can now target our campaigns with precision and see immediate results in engagement and sales.",
    rating: 5,
    logo: <Sparkles className="w-8 h-8" style={{ color: "rgb(var(--brand-primary))" }} />,
    industry: "Beauty Brand",
    metric: "45% marketing ROI boost",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4"
          style={
            i < rating
              ? { color: "rgb(var(--brand-accent))", fill: "rgb(var(--brand-accent))" }
              : { color: "rgb(203 213 225)" }
          }
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial, isActive }: { testimonial: Testimonial; isActive: boolean }) => {
  return (
    <Card
      className={`relative p-8 h-full transition-all duration-700 transform ${
        isActive ? "scale-105 shadow-strong-token bg-elevate-token" : "scale-100 shadow-soft-token bg-elevate-token"
      } backdrop-blur-sm border border-white/20 hover:shadow-xl group overflow-hidden`}
    >
      {/* Glassmorphism background effect */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-xl" />

      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-lg gradient-brand opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Company Logo and Info */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-xl bg-surface-token flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
            {testimonial.logo}
          </div>
          <div>
            <h4 className="font-bold text-lg text-base-token">{testimonial.company}</h4>
            <p className="text-sm font-medium" style={{ color: "rgb(var(--brand-primary))" }}>
              {testimonial.industry}
            </p>
          </div>
        </div>

        {/* Rating */}
        <div className="mb-4">
          <StarRating rating={testimonial.rating} />
        </div>

        {/* Testimonial Content */}
        <blockquote className="text-base-token mb-6 leading-relaxed font-medium">"{testimonial.content}"</blockquote>

        {/* Metric Highlight */}
        <div
          className="mb-6 p-4 rounded-lg"
          style={{
            background: "linear-gradient(90deg, rgba(76,175,80,0.08), rgba(46,90,135,0.08))",
            border: "1px solid rgba(76,175,80,0.2)",
          }}
        >
          <p className="text-sm font-semibold" style={{ color: "rgb(var(--brand-accent))" }}>
            {testimonial.metric}
          </p>
        </div>

        {/* Author Info */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="font-semibold text-base-token">{testimonial.name}</p>
            <p className="text-sm text-muted-token">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getVisibleTestimonials = () => {
    const visible: Testimonial[] = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-surface-token overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-base-token mb-6">
            Trusted by Leading{" "}
            <span className="gradient-brand bg-clip-text text-transparent">Retailers</span>
          </h2>
          <p className="text-xl text-muted-token max-w-3xl mx-auto leading-relaxed">
            See how retail businesses across industries are transforming their operations with UnAbandon AI's intelligent solutions
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="hidden lg:flex justify-between items-center absolute top-1/2 -translate-y-1/2 w-full z-20 pointer-events-none">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="pointer-events-auto -ml-6 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="pointer-events-auto -mr-6 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Desktop Grid (3 columns) */}
          <div className="hidden lg:grid grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.id}-${currentIndex}`}
                testimonial={testimonial}
                isActive={index === 1} // Middle card is active
              />
            ))}
          </div>

          {/* Mobile/Tablet Single Card */}
          <div className="lg:hidden">
            <TestimonialCard testimonial={testimonials[currentIndex]} isActive={true} />

            {/* Mobile Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <Button variant="outline" size="icon" onClick={prevTestimonial} className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm">
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextTestimonial} className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 10000);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "scale-125" : ""}`}
              style={index === currentIndex ? { backgroundColor: "rgb(var(--brand-primary))" } : { backgroundColor: "rgb(203 213 225)" }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-2xl bg-green/60 backdrop-blur-sm border border-white/20">
            <div className="text-3xl font-bold mb-2" style={{ color: "rgb(var(--brand-primary))" }}>
              200+
            </div>
            <div className="text-muted-token">Retail Partners</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-green/60 backdrop-blur-sm border border-white/20">
            <div className="text-3xl font-bold mb-2" style={{ color: "rgb(var(--brand-primary))" }}>
              45%
            </div>
            <div className="text-muted-token">Average ROI Increase</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-green/60 backdrop-blur-sm border border-white/20">
            <div className="text-3xl font-bold mb-2" style={{ color: "rgb(var(--brand-primary))" }}>
              99.9%
            </div>
            <div className="text-muted-token">Platform Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};