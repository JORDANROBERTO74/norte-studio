import { Container } from "@/components/ui/layout";
import type { Dictionary } from "@/i18n/get-dictionary";

export function Stats({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-ink text-paper">
      <Container className="py-14 sm:py-20">
        <p className="eyebrow text-accent-soft">{dict.home.stats.eyebrow}</p>
        <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {dict.home.stats.items.map((item) => (
            <div key={item.label} className="border-t border-paper/15 pt-5">
              <dd className="font-display text-4xl font-medium sm:text-5xl">{item.value}</dd>
              <dt className="mt-2 text-sm text-paper/60">{item.label}</dt>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
