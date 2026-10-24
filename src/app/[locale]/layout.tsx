import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/config/site";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, locales } from "@/i18n/config";
import "../globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "en");

  return {
    metadataBase: new URL(site.url),
    title: {
      default: dict.meta.home.title,
      template: `%s`,
    },
    description: dict.meta.home.description,
    applicationName: site.name,
    icons: { icon: "/icon.svg" },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      url: site.url,
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);
  const nav = site.nav.map((item) => ({
    href: item.href,
    label: dict.nav[item.key],
  }));

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressCountry: site.address.countryCode,
    },
    sameAs: [site.social.instagram, site.social.linkedin, site.social.x],
  };

  return (
    <html
      lang={locale}
      className={`${fraunces.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
        >
          {dict.common.skip}
        </a>

        <Header
          locale={locale}
          nav={nav}
          contactLabel={dict.nav.contact}
          contactHref="/contact"
          languageLabel={dict.nav.language}
          menuLabel={dict.nav.menu}
          closeLabel={dict.common.close}
          homeLabel={dict.common.brand}
        />
        <main id="contenido">{children}</main>
        <Footer locale={locale} dict={dict} />

        <JsonLd data={organization} />
      </body>
    </html>
  );
}
