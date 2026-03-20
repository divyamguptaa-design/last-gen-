import { BoltIcon, CableIcon, FactoryIcon, ShieldIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui";
import { features } from "@/lib/content";

const icons = [ShieldIcon, BoltIcon, CableIcon, FactoryIcon];
const accentClasses = [
  "bg-brand-red/10 text-brand-red group-hover:bg-brand-red group-hover:text-white",
  "bg-brand-amber/12 text-[#9a6500] group-hover:bg-brand-amber group-hover:text-white",
  "bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white",
  "bg-brand-mint/10 text-brand-mint group-hover:bg-brand-mint group-hover:text-white",
];

export function ValueGridSection() {
  return (
    <section id="features" className="py-20 md:py-24">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Core Features"
          title="Designed to sell on benefits, not just technical claims."
          description="Each Gen-5 offering is presented through the business value buyers care about most: safety, longevity, flexibility, and industrial-grade consistency."
          align="center"
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = icons[index];

            return (
              <article
                key={feature.title}
                className="group rounded-[1.8rem] border border-black/6 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-2 hover:border-brand-red/25"
              >
                <div
                  className={`inline-flex rounded-2xl p-3 transition ${accentClasses[index]}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-extrabold text-brand-charcoal">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/65">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
