"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Container, PrimaryButton, SecondaryButton } from "@/components/ui";
import { trustBadges } from "@/lib/content";

const showcaseSlides = [
  {
    src: "/brand/gen5-box-main.png",
    alt: "Gen-5 wire box packaging",
    label: "Packaging view",
  },
  {
    src: "/brand/showcase-extra.jpeg",
    alt: "Additional Gen-5 product showcase image",
    label: "Product showcase",
  },
  {
    src: "/products/wire-bundle.jpeg",
    alt: "Gen-5 wire bundle",
    label: "Wire bundle",
  },
];

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % showcaseSlides.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  const previousSlide = () => {
    setActiveSlide((current) => (current - 1 + showcaseSlides.length) % showcaseSlides.length);
  };

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % showcaseSlides.length);
  };

  return (
    <section className="relative overflow-hidden pb-20 pt-8 md:pb-24 md:pt-12">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[linear-gradient(135deg,rgba(255,253,252,1),rgba(255,246,243,1)_48%,rgba(252,225,220,0.96)_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-full grid-overlay opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/brand/hero-office-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-80 blur-[4px]"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,252,250,0.18)_0%,rgba(255,248,246,0.2)_36%,rgba(255,244,241,0.18)_68%,rgba(255,246,243,0.24)_100%)]" />
        </div>
      </div>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="reveal-up relative flex flex-col gap-8 py-4 text-brand-charcoal md:-mt-14 md:py-8 lg:-mt-20">
            <span className="inline-flex w-fit rounded-full border border-brand-red/15 bg-white/70 px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-brand-red">
              Har Din Surakshit
            </span>
            <div className="max-w-3xl">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-brand-charcoal sm:text-5xl lg:text-7xl">
                Reliable Wires for a Safer Tomorrow
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-black/78 md:text-xl">
                Gen-5 delivers durable, fire-resistant wires and cables that help homes, commercial
                spaces, and factories stay safer under real-world electrical demand.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <PrimaryButton href="#contact">Get Quote</PrimaryButton>
              <SecondaryButton href="/products">Explore Products</SecondaryButton>
            </div>

            <div className="flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-semibold text-brand-charcoal shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal-up-delay relative">
            <div className="absolute -left-8 top-14 hidden h-24 w-24 rounded-full bg-brand-red/10 blur-2xl md:block" />
            <div className="relative overflow-hidden rounded-[2rem] border border-black/8 bg-white/92 p-5 shadow-soft md:p-7">
              <div className="relative overflow-hidden rounded-[1.8rem] border border-black/6 bg-[linear-gradient(135deg,#fffdfc_0%,#fff4f1_52%,#ffe3dc_100%)] p-6 section-pattern">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-2xl font-extrabold text-brand-charcoal">
                      Box design built for shelf trust
                    </p>
                  </div>
                  <div className="rounded-full border border-brand-red/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-brand-red shadow-sm">
                    Har Din Surakshit
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  <div className="relative overflow-hidden rounded-[1.6rem] border border-black/6 bg-white p-4 shadow-soft">
                    <div className="relative h-[26rem] overflow-hidden rounded-[1.2rem] bg-white">
                      {showcaseSlides.map((slide, index) => (
                        <div
                          key={slide.src}
                          className={`absolute inset-0 transition-opacity duration-500 ${
                            index === activeSlide ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          <Image
                            src={slide.src}
                            alt={slide.alt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-cover"
                            priority={index === 0}
                          />
                        </div>
                      ))}

                      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.64))] px-4 pb-4 pt-10">
                        <div className="rounded-full bg-white/92 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-brand-charcoal shadow-sm">
                          {showcaseSlides[activeSlide]?.label}
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={previousSlide}
                            aria-label="Previous showcase image"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/92 text-xl font-bold text-brand-charcoal shadow-sm transition hover:bg-white"
                          >
                            ‹
                          </button>
                          <button
                            type="button"
                            onClick={nextSlide}
                            aria-label="Next showcase image"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/92 text-xl font-bold text-brand-charcoal shadow-sm transition hover:bg-white"
                          >
                            ›
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {showcaseSlides.map((slide, index) => (
                      <button
                        key={slide.label}
                        type="button"
                        onClick={() => setActiveSlide(index)}
                        className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] transition ${
                          index === activeSlide
                            ? "border-brand-red bg-brand-red text-white shadow-sm"
                            : "border-black/8 bg-white text-black/70"
                        }`}
                      >
                        {slide.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
