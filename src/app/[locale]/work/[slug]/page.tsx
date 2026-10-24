import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container, Section } from "@/components/ui/layout";
import { buttonStyles } from "@/components/ui/button";
import { site } from "@/config/site";
import { cases, getCase } from "@/content/cases";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const item = getCase(slug);
  if (!item) return {};

  return buildMetadata({
    locale,
    path: `/work/${slug}`,
    title: `${item.client} — ${site.name}`,
    description: item.summary[locale],
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const item = getCase(slug);
  if (!item) notFound();
  const dict = getDictionary(locale);

  const index = cases.findIndex((c) => c.slug === slug);
  const next = cases[(index + 1) % cases.length];

  const creativeWork = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${item.client} — case study`,
    headline: item.summary[locale],
    about: item.sector[locale],
    datePublished: item.year,
    creator: { "@type": "Organization", name: site.legalName, url: site.url },
    image: `${site.url}${item.image}`,
  };

  return (
    <>
      <section className="bg-ink text-paper">
        <Container className="py-12 sm:py-16">
          <Link
            href={`/${locale}/work`}
            className="inline-flex items-center gap-2 text-sm font-medium text-paper/60 transition hover:text-paper"
          >
            <ArrowLeft className="size-4" />
            {dict.caseStudy.back}
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <h1 className="display-xl max-w-2xl">{item.client}</h1>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-paper/15 pt-6 text-sm sm:grid-cols-4">
              <div>
                <dt className="eyebrow text-paper/50">{dict.caseStudy.sector}</dt>
                <dd className="mt-1 text-paper/90">{item.sector[locale]}</dd>
              </div>
              <div>
                <dt className="eyebrow text-paper/50">{dict.caseStudy.year}</dt>
                <dd className="mt-1 text-paper/90">{item.year}</dd>
              </div>
              <div className="col-span-2">
                <dt className="eyebrow text-paper/50">{dict.caseStudy.services}</dt>
                <dd className="mt-1 text-paper/90">{item.services[locale].join(" · ")}</dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      <Section className="pt-10 sm:pt-14">
        <Container>
          <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] bg-paper-deep">
            <Image
              src={item.image}
              alt={item.client}
              fill
              priority
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="object-cover"
            />
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center font-display text-2xl leading-snug text-ink">
            {item.summary[locale]}
          </p>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="01" title={dict.caseStudy.challenge} />
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">{item.challenge[locale]}</p>
          </div>
          <div>
            <SectionHeading eyebrow="02" title={dict.caseStudy.solution} />
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">{item.solution[locale]}</p>
          </div>
        </Container>
      </Section>

      <Section className="bg-ink text-paper">
        <Container>
          <SectionHeading eyebrow="03" title={dict.caseStudy.results} dark />
          <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-card border border-paper/15 bg-paper/15 sm:grid-cols-3">
            {item.metrics.map((metric) => (
              <div key={metric.label[locale]} className="bg-ink p-8">
                <dd className="font-display text-4xl font-medium">{metric.value}</dd>
                <dt className="mt-2 text-sm text-paper/60">{metric.label[locale]}</dt>
              </div>
            ))}
          </dl>

          <div className="mt-14 flex items-center justify-between gap-6 border-t border-paper/15 pt-8">
            <p className="eyebrow text-paper/50">{dict.caseStudy.next}</p>
            <Link
              href={`/${locale}/work/${next.slug}`}
              className={buttonStyles({ variant: "outline" })}
            >
              {next.client}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </Section>

      <JsonLd data={creativeWork} />
    </>
  );
}
