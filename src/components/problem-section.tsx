import { BoltIcon, CableIcon, ShieldIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui";
import { problems } from "@/lib/content";

const icons = [CableIcon, ShieldIcon, BoltIcon];

export function ProblemSection() {
  return (
    <section className="py-20 md:py-24">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Common Risks"
          title="Small cable compromises become expensive safety problems later."
          description="When wiring quality is inconsistent, the true cost appears in failures, safety concerns, rework, and lost trust on the job."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {problems.map((problem, index) => {
            const Icon = icons[index];

            return (
              <article
                key={problem.title}
                className="rounded-[1.8rem] border border-black/6 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-brand-red/10 p-3 text-brand-red">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-brand-charcoal">{problem.title}</h3>
                <p className="mt-4 text-base leading-8 text-black/65">{problem.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
