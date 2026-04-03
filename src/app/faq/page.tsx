import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { SiteNavbar } from "@/components/site-navbar";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { FaqSection } from "@/components/faq-section";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "FAQ | Gen-5 Wires & Cables",
  description:
    "Browse frequently asked questions about Gen-5 wires and cables, product quality, project support, and quote timelines.",
  alternates: {
    canonical: "https://gen-5.in/faq",
  },
};

export default function FaqPage() {
  return (
    <>
      <SiteNavbar />
      <main className="overflow-x-hidden">
        <section className="border-b border-black/6 bg-[linear-gradient(135deg,#fffdfc_0%,#fff3ef_52%,#ffe5de_100%)] py-14 md:py-16">
          <Container>
            <h1 className="text-4xl font-extrabold tracking-tight text-brand-charcoal sm:text-5xl">
              Frequently Asked Questions
            </h1>
          </Container>
        </section>
        <FaqSection showHeading={false} showPageButton={false} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
