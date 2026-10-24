import { Container } from "@/components/ui/layout";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-accent/20 blur-3xl"
      />
      <Container className="relative py-16 sm:py-24">
        <p className="eyebrow text-accent-soft">{eyebrow}</p>
        <h1 className="display-xl mt-5 max-w-3xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/70">{subtitle}</p>
      </Container>
    </section>
  );
}
