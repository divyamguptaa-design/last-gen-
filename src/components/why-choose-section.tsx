import { CheckIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui";
import { benefits } from "@/lib/content";

export function WhyChooseSection() {
  return (
    <section className="bg-brand-sand py-20 md:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Benefits"
            title="Why buyers choose Gen-5 when safety and brand trust matter most."
            description="This section translates product quality into the practical outcomes that drive conversion: lower risk, longer life, better value, and greater purchase confidence."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-[1.5rem] border border-black/6 bg-white p-5 backdrop-blur"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-brand-red/10 p-2 text-brand-red">
                    <CheckIcon className="h-4 w-4" />
                  </div>
                  <p className="text-base font-semibold leading-7 text-brand-charcoal">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
