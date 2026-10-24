import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { ArticleCard } from "@/components/shared/article-card";
import { Container, Section } from "@/components/ui/layout";
import { buttonStyles } from "@/components/ui/button";
import { site } from "@/config/site";
import { articles, getArticle } from "@/content/articles";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/format";

export function generateStaticParams() {
  return articles.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const item = getArticle(slug);
  if (!item) return {};

  return buildMetadata({
    locale,
    path: `/journal/${slug}`,
    title: item.title[locale],
    description: item.excerpt[locale],
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const item = getArticle(slug);
  if (!item) notFound();
  const dict = getDictionary(locale);

  const index = articles.findIndex((a) => a.slug === slug);
  const next = articles[(index + 1) % articles.length];
  const related = articles.filter((a) => a.slug !== slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title[locale],
    description: item.excerpt[locale],
    datePublished: item.date,
    image: `${site.url}${item.image}`,
    author: { "@type": "Organization", name: site.legalName, url: site.url },
    publisher: { "@type": "Organization", name: site.legalName, url: site.url },
  };

  return (
    <>
      <article>
        <Container className="py-12 sm:py-16">
          <Link
            href={`/${locale}/journal`}
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition hover:text-ink"
          >
            <ArrowLeft className="size-4" />
            {dict.article.back}
          </Link>

          <header className="mx-auto mt-8 max-w-3xl text-center">
            <p className="eyebrow text-accent">{item.category[locale]}</p>
            <h1 className="display-lg mt-4">{item.title[locale]}</h1>
            <p className="mt-4 text-sm text-ink-soft">
              {dict.article.published} {formatDate(item.date, locale)} · {item.readingTime}{" "}
              {dict.common.minRead}
            </p>
          </header>
        </Container>

        <Container>
          <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] bg-paper-deep">
            <Image
              src={item.image}
              alt={item.title[locale]}
              fill
              priority
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="object-cover"
            />
          </div>
        </Container>

        <Container className="py-14 sm:py-20">
          <div className="mx-auto max-w-2xl space-y-6">
            {item.body[locale].map((paragraph, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? "font-display text-xl leading-relaxed text-ink"
                    : "text-lg leading-relaxed text-ink-soft"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </article>

      <Section className="bg-paper-deep/50">
        <Container>
          <div className="flex items-center justify-between gap-6">
            <h2 className="display-md">{dict.article.related}</h2>
            <Link
              href={`/${locale}/journal/${next.slug}`}
              className={buttonStyles({ variant: "secondary", size: "sm" })}
            >
              {dict.article.next}
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((relatedItem) => (
              <ArticleCard
                key={relatedItem.slug}
                item={relatedItem}
                locale={locale}
                minRead={dict.common.minRead}
              />
            ))}
          </div>
        </Container>
      </Section>

      <JsonLd data={articleSchema} />
    </>
  );
}
