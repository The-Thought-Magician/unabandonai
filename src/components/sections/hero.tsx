import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, TrendingUp, Zap, Rocket } from 'lucide-react';
import { GeometricBackground } from '@/components/ui/animated-background';

export default function HeroSection() {
  return (
  <main className="relative gradient-hero overflow-hidden min-h-screen flex items-center">
      {/* Enhanced Background Effects */}
      <GeometricBackground />
      
      {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-white/5" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <section className="relative py-16 sm:py-20 lg:py-28 w-full">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 w-full">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-x-[60px]">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-effect text-inverse-token/90 text-sm font-semibold mb-8 border border-white/20 animate-slide-in-up self-center lg:self-start">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <span>AI-Powered Retail Intelligence Platform</span>
                <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-inverse-token mb-8 animate-slide-in-up">
                Let's make Retail{' '}
                <span className="gradient-brand bg-clip-text text-transparent animate-gradient">
                  Intelligent, Agile
                </span>{' '}
                and Customer-Centric!
              </h1>
              
              <h2 className="text-lg md:text-2xl font-light leading-relaxed text-inverse-token/80 mb-6 animate-slide-in-up">
                Single Source of Intelligence (SSOI) to power Retail AI Apps
              </h2>
              
              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 mb-6 animate-slide-in-up self-center lg:self-start">
                <h3 className="text-lg md:text-xl font-medium leading-[1.3] text-emerald-300 flex items-center gap-3">
                  <Rocket className="w-6 h-6 text-yellow-400 animate-float" />
                  Register Now for Early Access!
                </h3>
              </div>
              
        <p className="text-base md:text-lg text-inverse-token/80 mb-10 animate-slide-in-up">
                Learn more about RetailGenie{' '}
                <Link
                  href="/retailgenie"
          className="text-inverse-token underline decoration-2 underline-offset-4 font-semibold transition-all duration-300 hover:opacity-90"
                >
                  here
                </Link>
                .
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-up justify-center sm:justify-start self-center lg:self-start">
                <Link
                  href="https://retailgenie.unabandon.ai/register/"
                  className="group inline-flex items-center gap-3 rounded-brand px-8 py-4 text-base font-semibold text-inverse-token transition-all duration-300 hover:scale-105 btn-modern hover-lift animate-glow"
                  style={{ background: 'linear-gradient(90deg, rgb(var(--brand-accent)), rgb(var(--brand-primary)))' }}
                >
                  <Rocket className="w-5 h-5" />
                  Register Here!
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-brand px-8 py-4 text-base font-semibold text-inverse-token transition-all duration-300 hover:scale-105 btn-modern hover-lift animate-glow"
                  style={{ background: 'linear-gradient(90deg, rgb(var(--brand-accent)), rgb(var(--brand-primary)))' }}
                >
                  <TrendingUp className="w-5 h-5" />
                  Learn More
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            
            <div className="flex items-center justify-center relative animate-slide-in-right w-full overflow-hidden mt-6 lg:mt-0">
              {/* Enhanced floating elements around image */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-emerald-400/30 to-blue-400/30 rounded-full blur-2xl animate-float" />
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-xl animate-pulse delay-1000" />
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-br from-yellow-400/25 to-orange-400/25 rounded-lg blur-lg animate-float delay-500 rotate-45" />
              
              <div className="relative group max-w-xl w-full mx-auto">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-3xl blur-2xl animate-pulse-glow" />
                
                <div className="relative glass-effect rounded-3xl p-4 hover-lift">
                  <Image
                    src="https://images.squarespace-cdn.com/content/v1/6756c5acb680c2769a5b6b8b/5ddb25d0-c434-4a9c-888d-4d6eb7226e9b/Website+image+chatgpt+created.png"
                    alt="AI-powered retail intelligence platform visualization"
                    width={570}
                    height={450}
                    priority
                    className="h-auto w-full rounded-2xl transition-all duration-500 group-hover:scale-105"
                  />
                  
                  {/* Enhanced gradient overlay */}
                  <div className="absolute inset-4 bg-gradient-to-tr from-emerald-500/20 via-blue-500/10 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Corner accent */}
                  <div className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full animate-pulse" />
                </div>
              </div>
              
              {/* Additional floating UI elements */}
              <div className="absolute top-4 right-4 glass-effect-dark text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold animate-float delay-700">
                AI Powered
              </div>
              <div className="absolute bottom-8 left-4 glass-effect-dark text-blue-300 px-3 py-1 rounded-full text-xs font-semibold animate-float delay-1200">
                Real-time Intelligence
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}