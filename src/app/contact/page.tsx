import type { Metadata } from "next";
import { ContactInquiryForm } from "@/components/contact-inquiry-form";
import { Footer } from "@/components/footer";
import { CheckIcon, ChatIcon, FactoryIcon } from "@/components/icons";
import { SiteNavbar } from "@/components/site-navbar";
import { Container, PrimaryButton, SecondaryButton } from "@/components/ui";
import { WhatsAppButton } from "@/components/whatsapp-button";

const inquiryPoints = [
  "Project-based quotation support",
  "Dealer and distributor inquiries",
  "Product guidance for wire selection",
  "Bulk order and supply coordination",
];

const supportCards = [
  {
    title: "Visit or Dispatch Hub",
    value: "Bawana Industrial Area, Delhi",
    description: "Use this location for business visits, routing, and supply-side coordination.",
    icon: FactoryIcon,
  },
  {
    title: "WhatsApp Support",
    value: "Fastest way to connect",
    description: "Share your requirement, quantity, and timeline for a quicker response.",
    icon: ChatIcon,
  },
];

export const metadata: Metadata = {
  title: "Contact | Gen-5 Wires & Cables",
  description:
    "Contact Gen-5 for product inquiries, dealer support, bulk orders, and project quotations for wires and cables.",
};

export default function ContactPage() {
  return (
    <>
      <SiteNavbar />
      <main className="overflow-x-hidden">
        <section className="relative overflow-hidden border-b border-black/6 py-20 md:py-28">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(255,253,252,1),rgba(255,246,243,1)_48%,rgba(252,225,220,0.96)_100%)]" />
          <div className="absolute inset-0 -z-10 grid-overlay opacity-60" />
          <Container className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full border border-brand-red/15 bg-white/80 px-4 py-1 text-sm font-semibold uppercase tracking-[0.26em] text-brand-red">
                Contact Gen-5
              </p>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-brand-charcoal sm:text-5xl lg:text-6xl">
                Let&apos;s discuss your wire and cable requirement.
              </h1>
              <p className="mt-6 text-lg leading-8 text-black/72">
                Reach out for product guidance, dealer support, project quotations, and bulk-order
                planning. The contact page is designed to make inquiry flow simple and direct.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton href="https://wa.me/919900000000?text=Hello%20Gen-5%2C%20I%20want%20to%20make%20an%20inquiry.">
                  Start on WhatsApp
                </PrimaryButton>
                <SecondaryButton href="/products">Browse Products</SecondaryButton>
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/6 bg-white/88 p-5 shadow-soft md:p-7">
              <div className="metal-panel section-pattern rounded-[1.75rem] p-6">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand-red">
                  Best for new inquiries
                </p>
                <h2 className="mt-3 text-2xl font-extrabold text-brand-charcoal md:text-3xl">
                  Share your requirement and we&apos;ll help route you quickly.
                </h2>
                <div className="mt-6 space-y-4">
                  {inquiryPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3 rounded-[1.2rem] bg-white p-4 shadow-sm">
                      <div className="mt-1 rounded-full bg-brand-red/10 p-2 text-brand-red">
                        <CheckIcon className="h-4 w-4" />
                      </div>
                      <p className="text-sm font-semibold leading-7 text-brand-charcoal">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-20 md:py-24">
          <Container className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-black/6 bg-white p-7 shadow-soft md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand-red">
                Inquiry Form
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-brand-charcoal">
                Tell us what you need
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-black/65">
                Use this simple form layout as a contact touchpoint for product, dealership, and
                project inquiries. It is designed for clarity and quick submission.
              </p>

              <ContactInquiryForm />
            </div>

            <div className="space-y-5">
              {supportCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-[2rem] border border-black/6 bg-white p-7 shadow-soft"
                >
                  <div className="inline-flex rounded-2xl bg-brand-red/10 p-3 text-brand-red">
                    <card.icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-2xl font-extrabold text-brand-charcoal">{card.title}</h2>
                  <p className="mt-3 text-lg font-semibold text-brand-red">{card.value}</p>
                  <p className="mt-3 text-base leading-8 text-black/65">{card.description}</p>
                </article>
              ))}

              <article className="rounded-[2rem] border border-brand-red/15 bg-brand-red/10 p-7 shadow-soft">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand-red">
                  Preferred contact path
                </p>
                <h2 className="mt-3 text-2xl font-extrabold text-brand-charcoal">
                  Connect on WhatsApp for the fastest response
                </h2>
                <p className="mt-4 text-base leading-8 text-black/65">
                  It&apos;s the quickest way to discuss product categories, quantities, and project details.
                </p>
                <div className="mt-6">
                  <PrimaryButton href="https://wa.me/919900000000?text=Hello%20Gen-5%2C%20I%20need%20help%20with%20my%20wire%20requirement.">
                    Open WhatsApp
                  </PrimaryButton>
                </div>
              </article>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
