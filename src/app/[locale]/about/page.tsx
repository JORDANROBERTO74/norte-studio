import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "@/components/icons";
import { Stats } from "@/components/home/stats";
import { ArticleCard } from "@/components/shared/article-card";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container, Section } from "@/components/ui/layout";
import { articles } from "@/content/articles";
import { team } from "@/content/team";
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
    path: "/about",
    title: dict.meta.about.title,
    description: dict.meta.about.description,
  });
}

export default async function AboutPage({
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
        eyebrow={dict.about.hero.eyebrow}
        title={dict.about.hero.title}
        subtitle={dict.about.hero.subtitle}
      />

      <Stats dict={dict} />

      <Section>
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow={dict.about.history.eyebrow} title={dict.about.history.title} />
          </div>
          <div>
            <p className="text-lg leading-relaxed text-ink-soft">{dict.about.history.body1}</p>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">{dict.about.history.body2}</p>

            <ol className="mt-10 border-t border-line">
              {dict.about.history.timeline.map((item) => (
                <li key={item.year} className="grid grid-cols-[4rem_1fr] gap-4 border-b border-line py-5">
                  <span className="font-mono text-sm text-accent">{item.year}</span>
                  <span className="text-ink">{item.text}</span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section className="bg-paper-deep/50">
        <Container>
          <SectionHeading eyebrow={dict.about.values.eyebrow} title={dict.about.values.title} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {dict.about.values.items.map((item, index) => (
              <div key={item.title} className="rounded-card border border-line bg-paper p-8">
                <span className="font-mono text-sm text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-medium">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow={dict.about.team.eyebrow}
            title={dict.about.team.title}
            subtitle={dict.about.team.subtitle}
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <li key={member.name} className="rounded-card border border-line bg-white/40 p-7">
                <span className="grid size-16 place-items-center rounded-full bg-ink font-display text-xl font-medium text-paper">
                  {member.initials}
                </span>
                <h3 className="mt-5 font-display text-lg font-medium">{member.name}</h3>
                <p className="mt-1 text-sm text-ink-soft">{member.role[locale]}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section className="bg-paper-deep/50">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow={dict.about.insights.eyebrow}
              title={dict.about.insights.title}
            />
            <Link
              href={`/${locale}/journal`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              {dict.about.insights.viewAll}
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {articles.slice(0, 3).map((item) => (
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
