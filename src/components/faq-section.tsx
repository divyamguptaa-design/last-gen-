import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui";
import { faqs } from "@/lib/content";

export function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-24">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers to common questions before you request a quote."
          description="A strong FAQ reduces hesitation, handles common objections, and supports better conversion from the final CTA."
        />

        <div className="space-y-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-[1.6rem] border border-black/6 bg-white p-6 shadow-soft"
            >
              <summary className="cursor-pointer list-none text-lg font-extrabold text-brand-charcoal">
                {item.question}
              </summary>
              <p className="mt-4 max-w-4xl text-base leading-8 text-black/65">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
