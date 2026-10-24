import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Approach } from "@/components/home/approach";
import { Cases } from "@/components/home/cases";
import { Clients } from "@/components/home/clients";
import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { Testimonials } from "@/components/home/testimonials";
import { CtaBand } from "@/components/shared/cta-band";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/config/site";
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
    title: dict.meta.home.title,
    description: dict.meta.home.description,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  const service = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.legalName,
    url: `${site.url}/${locale}`,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressCountry: site.address.countryCode,
    },
    priceRange: "€€",
  };

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <Clients title={dict.home.clients.title} subtitle={dict.home.clients.subtitle} />
      <Cases locale={locale} dict={dict} />
      <Testimonials dict={dict} />
      <Stats dict={dict} />
      <Approach dict={dict} />
      <CtaBand
        locale={locale}
        title={dict.home.cta.title}
        subtitle={dict.home.cta.subtitle}
        button={dict.home.cta.button}
        href="/contact"
      />
      <JsonLd data={service} />
    </>
  );
}
