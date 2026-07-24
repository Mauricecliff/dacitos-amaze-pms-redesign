import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { StrengthSection } from "@/components/sections/StrengthSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { CareersSection } from "@/components/sections/CareersSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#030712]">
        <Navbar />
        <main>
          <HeroSection />
          <StatsSection />
          <ServicesSection />
          <AboutSection />
          <IndustriesSection />
          <StrengthSection />
          <TestimonialsSection />
          <ClientsSection />
          <CareersSection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
