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
    </div>
  );
}