import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui";
import { stats, trustBadges } from "@/lib/content";

export function SocialProofSection() {
  return (
    <section className="bg-brand-sand py-20 md:py-24">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Proof & Trust"
          title="Built to earn confidence from installers, dealers, and project teams."
          description="Social proof strengthens high-intent decisions, so the layout pairs concrete numbers with brand trust markers and certification-led reassurance."
        />

        <div className="grid gap-5 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`rounded-[1.6rem] border border-black/6 p-6 ${
                index === 0
                  ? "accent-warm"
                  : index === 1
                    ? "accent-cool"
                    : index === 2
                      ? "bg-brand-red/8"
                      : "bg-white"
              }`}
            >
              <p className="text-4xl font-extrabold text-brand-charcoal">{stat.value}</p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-black/58">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-black/6 bg-white px-5 py-2 text-sm font-semibold text-brand-charcoal"
            >
              {badge}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
