import { SectionHeading } from "@/components/shared/section-heading";
import { Container, Section } from "@/components/ui/layout";
import type { Dictionary } from "@/i18n/get-dictionary";

export function Approach({ dict }: { dict: Dictionary }) {
  return (
    <Section className="bg-paper-deep/50">
      <Container>
        <SectionHeading
          eyebrow={dict.home.approach.eyebrow}
          title={dict.home.approach.title}
          subtitle={dict.home.approach.subtitle}
        />

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.home.approach.steps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-card border border-line bg-paper p-7"
            >
              <span className="font-mono text-sm text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-medium">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
