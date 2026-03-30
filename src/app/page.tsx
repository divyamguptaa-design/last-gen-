import { CompanySchema } from "@/components/company-schema";
import { FinalCtaSection } from "@/components/final-cta-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ProcessSection } from "@/components/process-section";
import { ProductCarouselSection } from "@/components/product-carousel-section";
import { SiteNavbar } from "@/components/site-navbar";
import { SocialProofSection } from "@/components/social-proof-section";
import { SolutionSection } from "@/components/solution-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { UseCasesSection } from "@/components/use-cases-section";
import { ValueGridSection } from "@/components/value-grid-section";
import { WhyChooseSection } from "@/components/why-choose-section";
import { FaqSection } from "@/components/faq-section";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <>
      <CompanySchema />
      <SiteNavbar />
      <main className="overflow-x-hidden">
        <HeroSection />
        <ProductCarouselSection />
        <SolutionSection />
        <ValueGridSection />
        <SocialProofSection />
        <UseCasesSection />
        <TestimonialsSection />
        <ProcessSection />
        <WhyChooseSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
