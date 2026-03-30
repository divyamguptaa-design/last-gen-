import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { ArrowRightIcon, CableIcon, CheckIcon, ShieldIcon } from "@/components/icons";
import { SiteNavbar } from "@/components/site-navbar";
import { Container, PrimaryButton, SecondaryButton } from "@/components/ui";
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
                Wires built for homes, pumps, and cooling applications.
              </h1>
              <p className="mt-6 text-lg leading-8 text-black/72">
                Explore the Gen-5 product lineup with dependable options for household wiring,
                submersible pump installations, and round or AC wire requirements.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton href="/#contact">Request a Quote</PrimaryButton>
                <SecondaryButton href="https://wa.me/919315946113?text=Hello%20Gen-5%2C%20I%20want%20details%20about%20your%20products.">
                  Ask on WhatsApp
                </SecondaryButton>
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

        <section className="py-20 md:py-24">
          <Container className="space-y-10">
            <div className="max-w-2xl">
              <p className="inline-flex rounded-full border border-brand-red/20 bg-brand-red/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.26em] text-brand-red">
                Products
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-charcoal md:text-5xl">
                Core product options for everyday safety and durable performance.
              </h2>
              <p className="mt-4 text-base leading-8 text-black/68 md:text-lg">
                Each category is presented to help buyers quickly identify the right product type for
                residential, water pump, and appliance-focused applications.
              </p>
            </div>

            <div className="grid gap-8 xl:grid-cols-3">
              {products.map((product, index) => (
                <article
                  key={product.name}
                  className="overflow-hidden rounded-[2rem] border border-black/6 bg-white shadow-soft"
                >
                  <div className="relative h-60 w-full md:h-72">
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      fill
                      sizes="(max-width: 1280px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-7">
                    <div className="inline-flex rounded-2xl bg-brand-red/10 p-3 text-brand-red">
                      {index === 1 ? (
                        <ShieldIcon className="h-6 w-6" />
                      ) : (
                        <CableIcon className="h-6 w-6" />
                      )}
                    </div>
                    <h2 className="mt-6 text-2xl font-extrabold text-brand-charcoal">{product.name}</h2>
                    <p className="mt-4 text-base leading-8 text-black/65">{product.description}</p>
                    <div className="mt-6 space-y-3">
                      {product.points.map((point) => (
                        <div key={point} className="flex items-start gap-3">
                          <div className="mt-1 rounded-full bg-brand-red/10 p-2 text-brand-red">
                            <CheckIcon className="h-4 w-4" />
                          </div>
                          <p className="text-sm leading-7 text-black/70">{point}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                      <PrimaryButton href="/#contact">Get Quote</PrimaryButton>
                      <SecondaryButton href="https://wa.me/919315946113?text=Hello%20Gen-5%2C%20I%20want%20details%20about%20this%20product.">
                        Enquire Now
                      </SecondaryButton>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
