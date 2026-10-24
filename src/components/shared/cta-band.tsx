import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { Container } from "@/components/ui/layout";
import type { Locale } from "@/i18n/config";

export function CtaBand({
  locale,
  title,
  subtitle,
  button,
  href,
}: {
  locale: Locale;
  title: string;
  subtitle: string;
  button: string;
  href: string;
}) {
  return (
    <section className="bg-ink text-paper">
      <Container className="flex flex-col items-start gap-6 py-16 sm:py-24 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h2 className="display-lg">{title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-paper/70">{subtitle}</p>
        </div>
        <Link
          href={`/${locale}${href}`}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3 text-base font-medium text-paper transition hover:bg-accent-soft hover:text-ink"
        >
          {button}
          <ArrowUpRight className="size-5" />
        </Link>
      </Container>
    </section>
  );
}
