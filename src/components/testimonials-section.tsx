import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui";
import { testimonials } from "@/lib/content";

export function TestimonialsSection() {
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
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[1.8rem] border border-black/6 bg-white p-7 shadow-soft"
            >
              <p className="text-lg leading-8 text-black/72">“{testimonial.quote}”</p>
              <div className="mt-8">
                <p className="text-base font-extrabold text-brand-charcoal">{testimonial.name}</p>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-red">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
