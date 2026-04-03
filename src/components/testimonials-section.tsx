import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui";
import { testimonials } from "@/lib/content";

export function TestimonialsSection() {
  const cardBackgrounds = [
    "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,232,225,0.98) 100%)",
    "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(232,243,255,0.98) 100%)",
    "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,238,230,0.98) 100%)",
  ];
  const avatarBackgrounds = [
    "linear-gradient(135deg, #fb4435 0%, #ff8a7f 100%)",
    "linear-gradient(135deg, #1f2937 0%, #6b7280 100%)",
    "linear-gradient(135deg, #b91c1c 0%, #f59e0b 100%)",
  ];

  return (
    <section className="bg-brand-sand py-20 md:py-24">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Testimonials"
          title="Customer feedback that reinforces trust at the decision stage."
          description="The review section is structured to feel credible, polished, and easy to scan for buyers comparing suppliers."
          align="center"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className="rounded-[1.8rem] border border-black/6 p-7 shadow-soft"
              style={{ backgroundImage: cardBackgrounds[index % cardBackgrounds.length] }}
            >
              <p className="text-lg leading-8 text-black/72">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-8 flex items-center gap-4">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full text-lg font-extrabold text-white shadow-sm"
                  style={{ backgroundImage: avatarBackgrounds[index % avatarBackgrounds.length] }}
                  aria-hidden="true"
                >
                  {testimonial.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <p className="text-base font-extrabold text-brand-charcoal">{testimonial.name}</p>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-red">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
