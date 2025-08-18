import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

export default function HeroSection() {
  return (
    <main className="relative bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-green-400/30 to-blue-400/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <section className="relative py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-x-[60px]">
            <div className="flex flex-col items-start text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-semibold mb-6 border border-blue-200/50">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Retail Intelligence</span>
              </div>

              <h1 className="text-[48px] font-bold leading-[1.2] text-text-primary mb-6">
                Let's make Retail{' '}
                <span className="bg-gradient-to-r from-[#2E5A87] to-[#4CAF50] bg-clip-text text-transparent">
                  Intelligent, Agile
                </span>{' '}
                and Customer-Centric!
              </h1>
              
              <h2 className="text-[28px] font-normal leading-[1.4] text-text-secondary mb-8">
                Single Source of Intelligence (SSOI) to power Retail AI Apps
              </h2>
              
              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                <h3 className="text-2xl font-semibold leading-[1.3] text-text-primary flex items-center gap-2">
                  Register Now for Early Access! 🚀
                </h3>
              </div>
              
              <p className="text-base text-text-primary mb-8">
                Learn more about RetailGenie{' '}
                <Link
                  href="/retailgenie"
                  className="text-brand-green underline hover:opacity-90 font-semibold transition-all duration-200 hover:text-[#4CAF50]/80"
                >
                  here
                </Link>
                .
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://retailgenie.unabandon.ai/register/"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#2E5A87] to-[#1a4066] px-8 py-4 text-sm font-semibold uppercase text-white transition-all duration-300 hover:shadow-xl hover:scale-105 shadow-lg"
                >
                  Register Here!
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl border-2 border-[#2E5A87] px-8 py-4 text-sm font-semibold uppercase text-[#2E5A87] transition-all duration-300 hover:bg-[#2E5A87] hover:text-white hover:shadow-lg"
                >
                  <TrendingUp className="w-4 h-4" />
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="flex items-center justify-center relative">
              {/* Floating elements around image */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-bounce" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse delay-1000" />
              
              <div className="relative group">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b5b29fed-a1c9-44df-9c64-cf111ae51b45-unabandon-ai/assets/images/Website+image+chatgpt+created-2.png?"
                  alt="Illustration of diverse customers shopping online and on mobile devices"
                  width={570}
                  height={450}
                  priority
                  className="h-auto w-full max-w-xl rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}