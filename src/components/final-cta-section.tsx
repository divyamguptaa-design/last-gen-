import { Container, PrimaryButton, SecondaryButton } from "@/components/ui";

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
                <PrimaryButton href="tel:+919900000000">Request a Quote</PrimaryButton>
                <SecondaryButton href="https://wa.me/919900000000?text=Hello%20Gen-5%2C%20I%20need%20a%20quote.">
                  Contact on WhatsApp
                </SecondaryButton>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
