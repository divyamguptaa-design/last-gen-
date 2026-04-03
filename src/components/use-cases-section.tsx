import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Container, PrimaryButton } from "@/components/ui";
import { useCases } from "@/lib/content";

export function UseCasesSection() {
  return (
    <section id="case-studies" className="py-20 md:py-24">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Case Studies"
          title="Real-world results across homes, buildings, and high-demand industrial sites."
          description="The story here is practical: better wiring decisions improve reliability, reduce project stress, and support safer outcomes in the environments that matter most."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {useCases.map((item) => (
            <article
              key={item.title}
              className="relative overflow-hidden rounded-[1.8rem] border border-black/6 bg-white p-7 shadow-soft"
            >
              {item.title === "Residential Projects" ? (
                <div className="pointer-events-none absolute inset-0">
                  <Image
                    src="/use-cases/residential-bg.jpg"
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover opacity-58 blur-[1px]"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-white/42" />
                </div>
              ) : item.title === "Commercial Buildings" ? (
                <div className="pointer-events-none absolute inset-0">
                  <Image
                    src="/use-cases/commercial-bg.jpg"
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover opacity-64 blur-0"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-white/38" />
                </div>
              ) : item.title === "Factories & Industrial Units" ? (
                <div className="pointer-events-none absolute inset-0">
                  <Image
                    src="/use-cases/industrial-bg.jpg"
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover opacity-66 blur-0"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-white/36" />
                </div>
              ) : null}
              <div className="relative">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand-red">Use case</p>
                <h3 className="mt-4 text-2xl font-extrabold text-brand-charcoal">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-black/65">{item.description}</p>
                <div className="mt-6 rounded-[1.2rem] border border-black/6 bg-brand-sand p-5">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-black/45">Result</p>
                  <p className="mt-2 text-base font-semibold leading-7 text-brand-charcoal">{item.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <PrimaryButton href="https://wa.me/919315946113?text=Hello%20Gen-5%2C%20I%20want%20project%20pricing.">
          Request Project Pricing
        </PrimaryButton>
      </Container>
    </section>
  );
}
