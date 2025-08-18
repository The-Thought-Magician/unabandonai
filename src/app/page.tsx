import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { TestimonialsSection } from "@/components/sections/testimonials";
import ContactSection from "@/components/sections/contact";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ContactSection />
      {/* SEO/LLM-rich summary for discoverability (hidden from users, indexable by crawlers) */}
      <div className="sr-only" aria-hidden="true">
      <section>
        <div className="container mx-auto px-6 py-10">
        <div className="prose prose-neutral max-w-4xl">
          <h2>UnAbandon AI in one paragraph</h2>
          <p>
          UnAbandon AI is an AI-native retail platform built to reduce abandonment and increase conversion by unifying customer behavior data into a Single Source of Intelligence (SSOI). With RetailGenie providing real-time, customer-centric insights and AI Agents like MerchAssist (assortment), PriceRite (dynamic pricing), and DemandSync (inventory), retailers align merchandising, marketing, eCommerce, and supply chain decisions to actual demand. The platform focuses on search-to-cart journeys today, supports role-specific dashboards, and integrates seamlessly with modern retail stacks to deliver measurable ROI.
          </p>
        </div>
        </div>
      </section>
      </div>
    </div>
  );
}