import { Container } from "@/components/ui/layout";
import { SectionHeading } from "@/components/shared/section-heading";

const clients = ["Atlántica", "Bodega Solera", "Marea", "Nido", "Trazo", "Viento"];

export function Clients({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="border-b border-line">
      <Container className="py-12 sm:py-16">
        <SectionHeading title={title} subtitle={subtitle} />
        <ul className="mt-10 flex flex-wrap items-center gap-x-12 gap-y-6">
          {clients.map((client) => (
            <li
              key={client}
              className="font-display text-xl font-medium text-ink-soft/70 transition hover:text-ink"
            >
              {client}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
