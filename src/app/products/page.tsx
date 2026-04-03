import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { ArrowRightIcon, CableIcon } from "@/components/icons";
import { SiteNavbar } from "@/components/site-navbar";
import { Container, PrimaryButton } from "@/components/ui";
import { WhatsAppButton } from "@/components/whatsapp-button";

const products = [
  {
    name: "Multistrand Wire / Household Wires",
    image: "/products/multistrand-wire.webp",
    imageAlt: "Gen-5 multistrand household wire product photo",
    description:
      "Flexible house wiring built for safer day-to-day electrical performance in residential and light commercial spaces.",
    points: [
      "Ideal for household circuits and internal wiring runs",
      "Flexible multi-strand design for easier installation",
      "Made for dependable insulation and long-term durability",
    ],
  },
  {
    name: "Submersible Wires",
    image: "/products/submersible-wire.jpg",
    imageAlt: "Gen-5 submersible wire product photo",
    description:
      "Durable submersible cable solutions designed for water pump applications where reliability and insulation quality matter most.",
    points: [
      "Suitable for submersible pump setups",
      "Strong insulation support for demanding environments",
      "Built to maintain dependable performance over time",
    ],
  },
  {
    name: "Round Wires / AC Wires",
    image: "/products/round-wire.webp",
    imageAlt: "Gen-5 round and AC wire product photo",
    description:
      "Round and AC wire options developed for neat routing, dependable conductivity, and consistent use in cooling and appliance applications.",
    points: [
      "Well-suited for AC and appliance wiring requirements",
      "Clean routing with reliable flexibility",
      "Built for steady performance under regular load",
    ],
  },
  {
    name: "Hook Up Wires",
    image: "/products/hookup-wires.png",
    imageAlt: "Gen-5 hook up wires product photo",
    description:
      "Color-coded hook up wires for panels, control systems, and precision wiring where clean routing matters.",
    points: [
      "Easy identification with multiple color options",
      "Flexible insulation for tight routing",
      "Ideal for control panels and electronics",
    ],
  },
  {
    name: "Coaxial Cable (RG6)",
    image: "/products/coaxial-cable.jpeg",
    imageAlt: "Gen-5 coaxial cable product photo",
    description:
      "High-quality coaxial cable built for consistent signal transmission in residential and commercial installs.",
    points: [
      "Stable signal quality with clean shielding",
      "Suitable for TV, CCTV, and data distribution",
      "Durable jacket for long service life",
    ],
  },
  {
    name: "Twisted Pair Wire",
    image: "/products/twisted-pair-wire.jpg",
    imageAlt: "Gen-5 twisted pair wire product photo",
    description:
      "Twisted pair wiring engineered to reduce noise and improve signal integrity for structured runs.",
    points: [
      "Noise reduction with paired conductors",
      "Consistent performance for long runs",
      "Neat, reliable wiring for control systems",
    ],
  },
];

export const metadata: Metadata = {
  title: "Products | Gen-5 Wires & Cables",
  description:
    "Explore Gen-5 multistrand household wires, submersible wires, and round or AC wires built for safety, flexibility, and industrial-grade reliability.",
};

export default function ProductsPage() {
  return (
    <>
      <SiteNavbar />
      <main className="overflow-x-hidden">
        <section className="relative overflow-hidden border-b border-black/6 py-20 md:py-28">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(255,255,255,1),rgba(252,246,245,0.98)_40%,rgba(251,68,53,0.9)_100%)]" />
          <div className="absolute inset-0 -z-10 grid-overlay opacity-60" />
          <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full border border-brand-red/15 bg-white/75 px-4 py-1 text-sm font-semibold uppercase tracking-[0.26em] text-brand-red">
                Product Range
              </p>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-brand-charcoal sm:text-5xl lg:text-6xl">
                Deal in all type of wires and cables.
              </h1>
              <p className="mt-6 text-lg leading-8 text-black/72">
                <span className="font-bold">You need it we&apos;ll make it</span>
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton href="https://wa.me/919315946113?text=Hello%20Gen-5%2C%20I%20need%20a%20quote.">
                  Request a Quote
                </PrimaryButton>
              </div>
            </div>

            <div className="rounded-[2.2rem] border border-black/6 bg-white/75 p-4 shadow-soft md:p-6">
              <div className="metal-panel section-pattern rounded-[1.9rem] p-5 md:p-7">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-brand-red p-3 text-white">
                    <CableIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                      Fast Selection
                    </p>
                    <p className="text-xl font-extrabold text-brand-charcoal md:text-2xl">
                      Choose the right wire faster
                    </p>
                  </div>
                </div>
                <div className="mt-6 grid gap-4">
                  {products.map((product) => (
                    <div
                      key={product.name}
                      className="overflow-hidden rounded-[1.5rem] border border-black/6 bg-white text-brand-charcoal transition hover:border-brand-red/35"
                    >
                      <div className="relative h-48 w-full md:h-56">
                        <Image
                          src={product.image}
                          alt={product.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex items-center justify-between gap-3 px-5 py-4">
                        <div>
                          <p className="text-lg font-bold">{product.name}</p>
                          <p className="mt-1 text-sm text-black/55">Tap into product details below</p>
                        </div>
                        <ArrowRightIcon className="h-5 w-5 shrink-0 text-brand-red" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
