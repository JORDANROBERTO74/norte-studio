import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { CaseCard } from "@/components/shared/case-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container, Section } from "@/components/ui/layout";
import { cases } from "@/content/cases";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

export function Cases({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const featured = cases.filter((item) => item.featured).slice(0, 3);

  return (
    <Section className="bg-paper-deep/50">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow={dict.home.cases.eyebrow}
            title={dict.home.cases.title}
            subtitle={dict.home.cases.subtitle}
          />
          <Link
            href={`/${locale}/work`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            {dict.home.cases.viewAll}
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => (
            <CaseCard key={item.slug} item={item} locale={locale} readLabel={dict.common.readCase} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
