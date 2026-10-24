import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MailIcon, MapPinIcon, ArrowUpRight } from "@/components/icons";
import { ContactForm } from "@/components/contact/contact-form";
import { PageHero } from "@/components/shared/page-hero";
import { Container, Section } from "@/components/ui/layout";
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
    path: "/contact",
    title: dict.meta.contact.title,
    description: dict.meta.contact.description,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const info = dict.contact.info;

  return (
    <>
      <PageHero
        eyebrow={dict.contact.hero.eyebrow}
        title={dict.contact.hero.title}
        subtitle={dict.contact.hero.subtitle}
      />

      <Section>
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <ContactForm dict={dict} />
          </div>

          <aside className="flex flex-col gap-8">
            <div>
              <p className="eyebrow text-accent">{info.eyebrow}</p>
              <h2 className="display-md mt-4">{info.title}</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">{info.text}</p>
            </div>

            <dl className="space-y-5 border-t border-line pt-6">
              <div className="flex items-start gap-3">
                <MailIcon className="mt-0.5 size-5 text-accent" />
                <div>
                  <dt className="eyebrow text-ink-soft">{info.emailLabel}</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${site.email}`}
                      className="font-medium text-ink hover:text-accent"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 size-5 text-accent" />
                <div>
                  <dt className="eyebrow text-ink-soft">{info.locationLabel}</dt>
                  <dd className="mt-1 text-ink">
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.country}
                  </dd>
                </div>
              </div>
            </dl>

            <div className="border-t border-line pt-6">
              <p className="eyebrow text-ink-soft">{info.socialLabel}</p>
              <ul className="mt-3 space-y-2">
                {[
                  { label: "Instagram", href: site.social.instagram },
                  { label: "LinkedIn", href: site.social.linkedin },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium text-ink hover:text-accent"
                    >
                      {item.label}
                      <ArrowUpRight className="size-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </Section>
    </>
  );
}
