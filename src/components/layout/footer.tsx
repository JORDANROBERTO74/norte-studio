import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { Container } from "@/components/ui/layout";
import { site } from "@/config/site";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();

  const nav = site.nav.map((item) => ({
    href: item.href,
    label: dict.nav[item.key],
  }));

  return (
    <footer className="mt-8 border-t border-paper/10 bg-ink text-paper">
      <Container className="grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="flex items-center gap-2 font-display text-2xl font-medium">
            <span className="inline-block size-2.5 rotate-45 bg-accent" aria-hidden="true" />
            Norte
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/70">{dict.footer.tagline}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-soft hover:text-paper"
          >
            {site.email}
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <nav aria-label={dict.footer.explore}>
          <h2 className="eyebrow text-paper/50">{dict.footer.explore}</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={`/${locale}${item.href}`} className="text-paper/80 hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={dict.footer.studio}>
          <h2 className="eyebrow text-paper/50">{dict.footer.studio}</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="text-paper/80 hover:text-paper">
                {dict.footer.contact}
              </a>
            </li>
            <li>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-paper/80 hover:text-paper"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-paper/80 hover:text-paper"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-paper/10 py-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.legalName}. {dict.footer.rights}
        </p>
        <p>{dict.footer.note}</p>
      </Container>
    </footer>
  );
}
