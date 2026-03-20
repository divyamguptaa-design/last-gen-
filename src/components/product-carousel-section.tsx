"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container, PrimaryButton, SecondaryButton } from "@/components/ui";

const slides = [
  {
    category: "Household Wiring",
    title: "Multistrand wires made for safer day-to-day power flow.",
    description:
      "Flexible copper performance for homes, apartments, and interior electrical runs where reliability and clean installation both matter.",
    image: "/products/multistrand-wire.webp",
    imageAlt: "Multistrand household wire product image",
    badges: ["Flexible", "Fire-conscious", "Home-ready"],
    offer: "Fast dealer support for high-demand residential orders",
  },
  {
    category: "Water Pump Range",
    title: "Submersible wires built for demanding pump applications.",
    description:
      "Durable insulation and steady performance for projects that need dependable cable strength in tough operating conditions.",
    image: "/products/submersible-wire.jpg",
    imageAlt: "Submersible wire product image",
    badges: ["Pump-ready", "Durable", "Heavy-duty"],
    offer: "Preferred for water pump installations and bulk supply needs",
  },
  {
    category: "Cooling & Appliance",
    title: "Round and AC wires designed for clean routing and confidence.",
    description:
      "A practical wire choice for appliance connections and cooling applications with dependable conductivity and finish quality.",
    image: "/products/round-wire.webp",
    imageAlt: "Round and AC wire product image",
    badges: ["AC-ready", "Reliable", "Neat routing"],
    offer: "Built to support everyday appliance and HVAC requirements",
  },
];

const quickLinks = ["New Range", "Best Seller", "Safe Wiring", "Dealer Support", "Bulk Orders"];
const quickLinkStyles = [
  "border-brand-red/20 bg-brand-red/8 text-brand-red",
  "border-brand-amber/25 bg-brand-amber/10 text-[#9a6500]",
  "border-brand-mint/20 bg-brand-mint/10 text-[#0f7a57]",
  "border-brand-blue/20 bg-brand-blue/10 text-[#1e429f]",
  "border-brand-copper/20 bg-brand-copper/10 text-[#8b572a]",
];

export function ProductCarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const activeSlide = slides[activeIndex];

  return (
    <section className="pb-20">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-black/6 bg-white shadow-soft">
          <div className="flex flex-col gap-4 border-b border-black/6 bg-white px-5 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="flex flex-wrap gap-3 text-sm font-semibold text-black/72">
              {quickLinks.map((label) => (
                <button
                  key={label}
                  type="button"
                  className={`rounded-full border px-4 py-2 transition hover:-translate-y-0.5 ${quickLinkStyles[quickLinks.indexOf(label)]}`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="w-full max-w-xl rounded-full border border-black/8 bg-brand-sand px-5 py-3 text-sm text-black/45">
              Search product categories, cable types, or installation use cases
            </div>
          </div>

          <div className="relative overflow-hidden bg-[radial-gradient(circle_at_center,rgba(229,57,53,0.12),transparent_28%),linear-gradient(135deg,#fffdfc_0%,#fff7f4_38%,#ffefeb_100%)] p-5 md:p-8">
            <div className="grid items-center gap-8 xl:grid-cols-[0.95fr_1.05fr]">
              <div className="relative overflow-hidden rounded-[1.8rem] border border-black/8 bg-white/80 p-4 md:p-6">
                <div className="relative h-[280px] overflow-hidden rounded-[1.5rem] bg-brand-sand md:h-[430px]">
                  <Image
                    key={activeSlide.image}
                    src={activeSlide.image}
                    alt={activeSlide.imageAlt}
                    fill
                    priority={activeIndex === 0}
                    sizes="(max-width: 1280px) 100vw, 42vw"
                    className="object-cover transition duration-500"
                  />
                </div>
              </div>

              <div className="space-y-6 text-brand-charcoal">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-black/8 bg-white/80 px-4 py-1 text-sm font-semibold uppercase tracking-[0.22em]">
                    Featured Carousel
                  </span>
                  <span className="rounded-full bg-brand-red px-4 py-1 text-sm font-bold text-white">
                    {activeSlide.category}
                  </span>
                </div>

                <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
                  {activeSlide.title}
                </h2>
                <p className="max-w-2xl text-base leading-8 text-black/68 md:text-lg">
                  {activeSlide.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {activeSlide.badges.map((badge, index) => (
                    <span
                      key={badge}
                      className={`rounded-full border px-4 py-2 text-sm font-semibold text-brand-charcoal ${
                        index === 0
                          ? "border-brand-red/15 bg-brand-red/8"
                          : index === 1
                            ? "border-brand-amber/20 bg-brand-amber/10"
                            : "border-brand-blue/15 bg-brand-blue/8"
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="rounded-[1.5rem] border border-brand-red/25 bg-brand-red/10 p-5">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                    Spotlight
                  </p>
                  <p className="mt-2 text-lg font-semibold text-brand-charcoal">{activeSlide.offer}</p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <PrimaryButton href="/products">Explore Catalog</PrimaryButton>
                  <SecondaryButton href="/#contact">Get Quote Today</SecondaryButton>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {slides.map((slide, index) => (
                    <button
                      key={slide.category}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                        activeIndex === index
                          ? "bg-brand-red text-white"
                          : "border border-black/8 bg-white/80 text-black/65 hover:text-brand-charcoal"
                      }`}
                      aria-label={`Show ${slide.category} slide`}
                    >
                      {slide.category}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {slides.map((slide, index) => (
                    <button
                      key={slide.title}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`h-1.5 rounded-full transition ${
                        activeIndex === index ? "w-16 bg-brand-red" : "w-8 bg-black/18"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                  <Link
                    href="/products"
                    className="ml-2 text-sm font-semibold uppercase tracking-[0.2em] text-black/58 transition hover:text-brand-charcoal"
                  >
                    View all products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
