import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/shared/article-card";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container, Section } from "@/components/ui/layout";
import { articles } from "@/content/articles";
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
    path: "/journal",
    title: dict.meta.journal.title,
    description: dict.meta.journal.description,
  });
}

export default async function JournalPage({
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
        eyebrow={dict.journal.hero.eyebrow}
        title={dict.journal.hero.title}
        subtitle={dict.journal.hero.subtitle}
      />

      <Section>
        <Container>
          <SectionHeading
            eyebrow={dict.journal.list.eyebrow}
            title={dict.journal.list.title}
            subtitle={dict.journal.list.subtitle}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((item) => (
              <ArticleCard key={item.slug} item={item} locale={locale} minRead={dict.common.minRead} />
            ))}
          </div>
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
