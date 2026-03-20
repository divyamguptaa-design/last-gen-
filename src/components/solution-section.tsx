import { CheckIcon, ShieldIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { Container, PrimaryButton } from "@/components/ui";

const sellingPoints = [
  "Reliable quality built for long-term use",
  "Safety-led positioning with fire-resistant confidence",
  "Strong support for dealers, builders, and project buyers",
  "Professional consultation from inquiry to delivery",
];

export function SolutionSection() {
  return (
    <section id="solution" className="bg-brand-sand py-20 md:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[2rem] border border-black/6 bg-white p-8 text-brand-charcoal shadow-soft md:p-10">
            <div className="inline-flex rounded-2xl bg-brand-red/10 p-3 text-brand-red">
              <ShieldIcon className="h-7 w-7" />
            </div>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.24em] text-black/50">
              Trusted Solution
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">
              Gen-5 helps you choose safer wiring without sacrificing durability or delivery speed.
            </h2>
            <p className="mt-5 text-base leading-8 text-black/65">
              Built around the promise of everyday protection, Gen-5 combines modern manufacturing
              confidence with an industrial, trust-driven brand that buyers can stand behind.
            </p>
          </div>

          <div className="space-y-7">
            <SectionHeading
              eyebrow="Why It Works"
              title="A dependable cable partner for projects that cannot afford uncertainty."
              description="From residential installations to industrial applications, Gen-5 is positioned to bring stronger safety messaging, better installation confidence, and consistent brand value."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {sellingPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-[1.5rem] border border-black/6 bg-white p-5 shadow-soft"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-brand-red/10 p-2 text-brand-red">
                      <CheckIcon className="h-4 w-4" />
                    </div>
                    <p className="text-base font-semibold leading-7 text-brand-charcoal">{point}</p>
                  </div>
                </div>
              ))}
            </div>

            <PrimaryButton href="#contact">Talk to Sales</PrimaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
