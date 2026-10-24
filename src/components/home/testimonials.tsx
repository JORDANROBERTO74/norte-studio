import { SectionHeading } from "@/components/shared/section-heading";
import { Container, Section } from "@/components/ui/layout";
import type { Dictionary } from "@/i18n/get-dictionary";

export function Testimonials({ dict }: { dict: Dictionary }) {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow={dict.home.testimonials.eyebrow}
          title={dict.home.testimonials.title}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {dict.home.testimonials.items.map((item) => (
            <figure
              key={item.author}
              className="flex flex-col justify-between rounded-card border border-line bg-white/40 p-7"
            >
              <blockquote className="font-display text-lg leading-snug text-ink">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <p className="text-sm font-semibold">{item.author}</p>
                <p className="text-sm text-ink-soft">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
