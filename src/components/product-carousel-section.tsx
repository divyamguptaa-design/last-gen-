"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@/components/icons";
import { Container, PrimaryButton, SecondaryButton } from "@/components/ui";

const slides = [
  {
    category: "Household Wiring",
    subtitle: "Multistrand wire",
    title: "Multistrand wires made for safer day-to-day power flow.",
    description:
      "Flexible copper performance for homes, apartments, and interior electrical runs where reliability and clean installation both matter.",
    image: "/products/multistrand-wire.webp",
    imageAlt: "Multistrand household wire product image",
    badges: ["Flexible", "Fire-conscious", "Home-ready"],
    offer: "Get it customised as per your requirement",
  },
  {
    category: "Submersible Wire",
    subtitle: "Submersible wire",
    title: "Submersible wires built for demanding pump applications.",
    description: "",
    image: "/products/submersible-wire.jpg",
    imageAlt: "Submersible wire product image",
    badges: ["Pump-ready", "Durable", "Heavy-duty"],
    offer: "Can be customised as per demand",
  },
  {
    category: "Round A/C Wires",
    subtitle: "Round wire",
    title: "Round and AC wires designed for clean routing and confidence.",
    description:
      "A practical wire choice for appliance connections and cooling applications with dependable conductivity and finish quality.",
    image: "/products/round-wire.webp",
    imageAlt: "Round and AC wire product image",
    badges: ["AC-ready", "Reliable", "Neat routing"],
    offer: "Can be customised as per demand",
  },
  {
    category: "Hook Up Wires",
    subtitle: "Hook up wire",
    title: "Hook up wires for control panels and precision wiring routes.",
    description:
      "Color-coded hook up wires that keep panel wiring organized, flexible, and easy to trace across control systems.",
    image: "/products/hookup-wires.png",
    imageAlt: "Hook up wires product image",
    badges: ["Color-coded", "Flexible", "Panel-ready"],
    offer: "Clean routing for control panels, testing rigs, and instrumentation",
  },
  {
    category: "Coaxial Cable",
    subtitle: "RG6 coaxial",
    title: "Coaxial cable engineered for steady signal transmission.",
    description:
      "Reliable RG6 coaxial cable designed for CCTV, TV, and data distribution with consistent shielding performance.",
    image: "/products/coaxial-cable.jpeg",
    imageAlt: "Coaxial cable product image",
    badges: ["Shielded", "Signal-safe", "RG6 grade"],
    offer: "Ideal for residential and commercial signal distribution",
  },
  {
    category: "Twisted Pair Wire",
    subtitle: "Twisted pair",
    title: "Twisted pair wiring to reduce noise and signal loss.",
    description:
      "Paired conductors improve signal integrity and help cut interference across longer wiring runs.",
    image: "/products/twisted-pair-wire.jpg",
    imageAlt: "Twisted pair wire product image",
    badges: ["Noise control", "Balanced", "Long-run ready"],
    offer: "Reliable choice for control systems and low-voltage networks",
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
  const router = useRouter();

  function goToPreviousSlide() {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  }

  function goToNextSlide() {
    setActiveIndex((current) => (current + 1) % slides.length);
  }

  function handleQuickLinkClick(label: string) {
    switch (label) {
      case "New Range":
        setActiveIndex(0);
        break;
      case "Best Seller":
        setActiveIndex(2);
        break;
      case "Safe Wiring":
        setActiveIndex(0);
        break;
      case "Dealer Support":
        router.push("/contact");
        break;
      case "Bulk Orders":
        router.push("/contact");
        break;
      default:
        break;
    }
  }

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
                  onClick={() => handleQuickLinkClick(label)}
                  className={`rounded-full border px-4 py-2 transition hover:-translate-y-0.5 ${quickLinkStyles[quickLinks.indexOf(label)]}`}
                >
                  {label}
                </button>
              ))}
            </div>

            <Link
              href="/products"
              className="w-full max-w-xl rounded-full border border-black/8 bg-brand-sand px-5 py-3 text-sm text-black/45 transition hover:border-brand-red/30 hover:text-brand-charcoal"
            >
              Search product categories, cable types, or installation use cases
            </Link>
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
                    className="object-contain bg-white/90 p-4 transition duration-500"
                  />
                </div>
                <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={goToPreviousSlide}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/92 text-brand-charcoal shadow-sm transition hover:border-brand-red/35 hover:text-brand-red"
                    aria-label="Previous slide"
                  >
                    <ArrowRightIcon className="h-4 w-4 rotate-180" />
                  </button>
                  <button
                    type="button"
                    onClick={goToNextSlide}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/92 text-brand-charcoal shadow-sm transition hover:border-brand-red/35 hover:text-brand-red"
                    aria-label="Next slide"
                  >
                    <ArrowRightIcon className="h-4 w-4" />
                  </button>
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
                  <SecondaryButton href="https://wa.me/919315946113?text=Hello%20Gen-5%2C%20I%20need%20a%20quote.">
                    Get Quote Today
                  </SecondaryButton>
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

                <div className="grid gap-3 sm:grid-cols-3">
                  {slides.map((slide, index) => (
                    <button
                      key={`${slide.category}-card`}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`rounded-[1.25rem] border p-3 text-left transition ${
                        activeIndex === index
                          ? "border-brand-red bg-brand-red/8 shadow-sm"
                          : "border-black/8 bg-white/80 hover:border-brand-red/30"
                      }`}
                    >
                      <p className="text-sm font-bold text-brand-charcoal">{slide.category}</p>
                      <p className="mt-1 text-xs leading-6 text-black/58">
                        {slide.subtitle}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
