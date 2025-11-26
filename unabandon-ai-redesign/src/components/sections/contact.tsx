import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <footer className="relative gradient-brand overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-[1200px] mx-auto flex flex-col items-center justify-center py-20 sm:py-24 md:py-28 px-10">
        {/* Header Content */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-inverse-token mb-4">
            Ready to Transform Your{' '}
            <span className="bg-clip-text text-transparent gradient-brand invert">
              Retail Business?
            </span>
          </h2>
          <p className="text-xl text-inverse-token/80 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of retailers who are already using AI to drive growth, 
            optimize operations, and enhance customer experiences.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 btn-primary font-semibold text-lg px-8 py-4 rounded-brand shadow-strong-token transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5" />
            Contact Us
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/retailgenie"
            className="group inline-flex items-center gap-3 btn-primary font-semibold text-lg px-8 py-4 rounded-brand shadow-strong-token transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            <span>Get Early Access</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-inverse-token/70 text-sm mb-4">Trusted by 200+ retail businesses worldwide</p>
          <div className="flex items-center justify-center gap-8 opacity-60">
            <div className="text-inverse-token/80 text-xs font-medium">SOC 2 Compliant</div>
            <div className="text-inverse-token/80 text-xs font-medium">GDPR Ready</div>
            <div className="text-inverse-token/80 text-xs font-medium">99.9% Uptime</div>
            <div className="text-inverse-token/80 text-xs font-medium">24/7 Support</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;