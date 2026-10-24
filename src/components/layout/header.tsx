"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, CloseIcon, MenuIcon } from "@/components/icons";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { Container } from "@/components/ui/layout";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/cn";

type NavItem = { label: string; href: string };

export function Header({
  locale,
  nav,
  contactLabel,
  contactHref,
  languageLabel,
  menuLabel,
  closeLabel,
  homeLabel,
}: {
  locale: Locale;
  nav: NavItem[];
  contactLabel: string;
  contactHref: string;
  languageLabel: string;
  menuLabel: string;
  closeLabel: string;
  homeLabel: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Link
            href={`/${locale}`}
            aria-label={homeLabel}
            className="flex items-center gap-2 font-display text-2xl font-medium tracking-tight text-ink"
          >
            <span className="inline-block size-2.5 rotate-45 bg-accent" aria-hidden="true" />
            Norte
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className="text-sm font-medium text-ink-soft transition hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <LocaleSwitcher locale={locale} label={languageLabel} className="hidden sm:flex" />

          <Link
            href={`/${locale}${contactHref}`}
            className="hidden items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition hover:bg-ink/85 md:inline-flex"
          >
            {contactLabel}
            <ArrowUpRight className="size-4" />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid size-10 place-items-center rounded-full border border-line bg-white/60 text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? closeLabel : menuLabel}
          >
            {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        hidden={!open}
        className={cn("border-t border-line bg-paper md:hidden", open ? "block" : "hidden")}
      >
        <Container className="flex flex-col gap-1 py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              className="rounded-xl px-2 py-3 text-base font-medium text-ink hover:bg-ink/5"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={`/${locale}${contactHref}`}
            className="mt-1 flex items-center justify-between rounded-xl bg-ink px-4 py-3 text-base font-medium text-paper"
            onClick={() => setOpen(false)}
          >
            {contactLabel}
            <ArrowUpRight className="size-5" />
          </Link>
          <div className="mt-2 flex items-center justify-between border-t border-line px-2 pt-4">
            <span className="eyebrow text-ink-soft">{languageLabel}</span>
            <LocaleSwitcher locale={locale} label={languageLabel} />
          </div>
        </Container>
      </div>
    </header>
  );
}
