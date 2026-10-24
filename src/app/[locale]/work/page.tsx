import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseCard } from "@/components/shared/case-card";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container, Section } from "@/components/ui/layout";
import { cases } from "@/content/cases";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return buildMetadata({
    locale,
    path: "/work",
    title: dict.meta.work.title,
    description: dict.meta.work.description,
  });
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={dict.work.hero.eyebrow}
        title={dict.work.hero.title}
        subtitle={dict.work.hero.subtitle}
      />

      <section className="bg-ink text-paper">
        <Container className="py-14 sm:py-16">
          <p className="eyebrow text-accent-soft">{dict.work.metrics.eyebrow}</p>
          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {dict.work.metrics.items.map((item) => (
              <div key={item.label} className="border-t border-paper/15 pt-5">
                <dd className="font-display text-4xl font-medium sm:text-5xl">{item.value}</dd>
                <dt className="mt-2 text-sm text-paper/60">{item.label}</dt>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow={dict.work.list.eyebrow}
            title={dict.work.list.title}
            subtitle={dict.work.list.subtitle}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((item) => (
              <CaseCard key={item.slug} item={item} locale={locale} readLabel={dict.common.readCase} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-paper-deep/50">
        <Container>
          <SectionHeading
            title={dict.work.trusted.title}
            subtitle={dict.work.trusted.subtitle}
            align="center"
          />
        </Container>
      </Section>

      <CtaBand
        locale={locale}
        title={dict.home.cta.title}
        subtitle={dict.home.cta.subtitle}
        button={dict.home.cta.button}
        href="/contact"
      />
    </>
  );
}
