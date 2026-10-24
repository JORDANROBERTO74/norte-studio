import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckIcon } from "@/components/icons";
import { CaseCard } from "@/components/shared/case-card";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container, Section } from "@/components/ui/layout";
import { cases } from "@/content/cases";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/cn";

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
    path: "/services",
    title: dict.meta.services.title,
    description: dict.meta.services.description,
  });
}

export default async function ServicesPage({
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
        eyebrow={dict.services.hero.eyebrow}
        title={dict.services.hero.title}
        subtitle={dict.services.hero.subtitle}
      />

      <Section>
        <Container>
          <SectionHeading
            eyebrow={dict.services.list.eyebrow}
            title={dict.services.list.title}
            subtitle={dict.services.list.subtitle}
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {dict.services.list.items.map((service, index) => (
              <div key={service.title} className="flex flex-col bg-paper p-8">
                <span className="font-mono text-sm text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-medium">{service.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{service.text}</p>
                <ul className="mt-5 space-y-1.5 border-t border-line pt-5">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-ink">
                      <CheckIcon className="size-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-paper-deep/50">
        <Container>
          <SectionHeading
            eyebrow={dict.services.projects.eyebrow}
            title={dict.services.projects.title}
            subtitle={dict.services.projects.subtitle}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cases
              .filter((item) => item.featured)
              .map((item) => (
                <CaseCard
                  key={item.slug}
                  item={item}
                  locale={locale}
                  readLabel={dict.common.readCase}
                />
              ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow={dict.services.plans.eyebrow}
            title={dict.services.plans.title}
            subtitle={dict.services.plans.subtitle}
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {dict.services.plans.plans.map((plan) => (
              <PlanCard
                key={plan.name}
                plan={plan}
                locale={locale}
                popularLabel={dict.services.plans.popular}
              />
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-ink-soft">{dict.services.plans.note}</p>
        </Container>
      </Section>

      <Section className="bg-ink text-paper">
        <Container>
          <SectionHeading eyebrow={dict.services.process.eyebrow} title={dict.services.process.title} dark />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dict.services.process.steps.map((step, index) => (
              <li key={step.title} className="border-t border-paper/15 pt-6">
                <span className="font-mono text-sm text-accent-soft">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-medium">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">{step.text}</p>
              </li>
            ))}
          </ol>
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

function PlanCard({
  plan,
  locale,
  popularLabel,
}: {
  plan: {
    name: string;
    priceLabel: string;
    price: number;
    period: string;
    blurb: string;
    features: string[];
    cta: string;
    featured: boolean;
  };
  locale: Locale;
  popularLabel: string;
}) {
  const price = plan.price > 0 ? formatPrice(plan.price, locale) : null;

  return (
    <div
      className={cn(
        "flex flex-col rounded-card border p-8",
        plan.featured
          ? "border-ink bg-ink text-paper shadow-soft"
          : "border-line bg-white/40",
      )}
    >
      <div className="flex items-center justify-between">
        <h3 className={cn("font-display text-xl font-medium", plan.featured ? "text-paper" : "text-ink")}>
          {plan.name}
        </h3>
        {plan.featured ? (
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-paper">
            {popularLabel}
          </span>
        ) : null}
      </div>

      <div className="mt-6 flex items-baseline gap-2">
        <span className={cn("text-sm", plan.featured ? "text-paper/60" : "text-ink-soft")}>
          {plan.priceLabel}
        </span>
        <span className={cn("font-display text-4xl font-medium", plan.featured ? "text-paper" : "text-ink")}>
          {price ?? "—"}
        </span>
        <span className={cn("text-sm", plan.featured ? "text-paper/60" : "text-ink-soft")}>
          {plan.period}
        </span>
      </div>

      <p className={cn("mt-3 text-sm leading-relaxed", plan.featured ? "text-paper/70" : "text-ink-soft")}>
        {plan.blurb}
      </p>

      <ul className="mt-6 flex-1 space-y-2.5 border-t pt-6">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className={cn("flex items-center gap-2 text-sm", plan.featured ? "text-paper/90" : "text-ink")}
          >
            <CheckIcon className={cn("size-4 shrink-0", plan.featured ? "text-accent-soft" : "text-accent")} />
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={`mailto:hola@nortestudio.es?subject=${encodeURIComponent(plan.name)}`}
        className={cn(
          "mt-8 inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium transition",
          plan.featured
            ? "bg-accent text-paper hover:bg-accent-soft hover:text-ink"
            : "border border-ink/25 text-ink hover:border-ink hover:bg-ink/5",
        )}
      >
        {plan.cta}
      </a>
    </div>
  );
}
