import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui";
import { steps } from "@/lib/content";

export function ProcessSection() {
  return (
    <section className="py-20 md:py-24">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="How It Works"
          title="A simple four-step process that removes friction from inquiry to supply."
          description="The process section keeps the buying journey clear and lowers hesitation for first-time and repeat buyers alike."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="relative overflow-hidden rounded-[1.8rem] border border-black/6 bg-white p-7 shadow-soft"
            >
              {index === 0 ? (
                <div className="pointer-events-none absolute inset-0">
                  <Image
                    src="/process/inquiry-bg.jpg"
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover opacity-64 blur-0"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-white/38" />
                </div>
              ) : index === 1 ? (
                <div className="pointer-events-none absolute inset-0">
                  <Image
                    src="/process/consultation-bg.jpg"
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover opacity-64 blur-0"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-white/46" />
                </div>
              ) : index === 2 ? (
                <div className="pointer-events-none absolute inset-0">
                  <Image
                    src="/process/delivery-bg.jpg"
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover opacity-66 blur-0"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-white/48" />
                </div>
              ) : index === 3 ? (
                <div className="pointer-events-none absolute inset-0">
                  <Image
                    src="/process/installation-bg.jpg"
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover opacity-66 blur-0"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-white/52" />
                </div>
              ) : null}
              <div className="relative">
              <span className="inline-flex rounded-full bg-brand-red px-3 py-1 text-sm font-bold text-white">
                Step {index + 1}
              </span>
              <h3 className="mt-5 text-2xl font-extrabold text-brand-charcoal">{step.title}</h3>
              <p className="mt-4 text-base leading-8 text-black/65">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
