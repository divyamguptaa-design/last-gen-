import Link from "next/link";
import { Container, PrimaryButton } from "@/components/ui";

export function FinalCtaSection() {
  return (
    <section id="contact" className="pb-20 pt-6 md:pb-24">
      <Container>
        <div className="overflow-hidden rounded-[2.25rem] bg-hero-industrial p-8 text-white shadow-soft md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/72">
                Limited Stock for Select Sizes
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
                Upgrade to Safer Wiring Today
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/82 md:text-lg">
                Secure a fast quote for your upcoming project and get the right Gen-5 wire solution
                for homes, commercial builds, or industrial applications.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-white/15 bg-white/10 p-6 backdrop-blur">
              <p className="text-lg font-bold">Speak with our team now</p>
              <p className="mt-3 text-base leading-7 text-white/74">
                Call, WhatsApp, or request pricing today for faster consultation and supply support.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <PrimaryButton href="https://wa.me/919315946113?text=Hello%20Gen-5%2C%20I%20need%20a%20quote.">
                  Request a Quote
                </PrimaryButton>
                <Link
                  href="https://wa.me/919315946113?text=Hello%20Gen-5%2C%20I%20need%20a%20quote."
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold !text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#20bd5c]"
                >
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-white" />
                  Contact on WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
