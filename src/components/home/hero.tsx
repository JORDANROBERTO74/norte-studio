import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 size-96 rounded-full bg-accent/10 blur-3xl"
      />
      <Container className="relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="max-w-xl">
          <p className="eyebrow flex items-center gap-2 text-accent-soft">
            <span className="inline-block size-2 rotate-45 bg-accent-soft" aria-hidden="true" />
            {dict.home.hero.eyebrow}
          </p>

          <h1 className="display-xl mt-6">{dict.home.hero.title}</h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/70">
            {dict.home.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href={`/${locale}/work`} className={buttonStyles({ size: "lg" })}>
              {dict.home.hero.cta}
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href={`/${locale}/services`}
              className={buttonStyles({ variant: "outline", size: "lg" })}
            >
              {dict.home.hero.secondary}
            </Link>
          </div>

          <p className="eyebrow mt-8 text-paper/50">{dict.home.hero.note}</p>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-paper-deep">
            <Image
              src="/images/hero.jpg"
              alt={dict.home.hero.title}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 520px"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-4 max-w-[230px] rounded-2xl border border-paper/10 bg-paper p-4 text-ink shadow-soft">
            <p className="eyebrow text-accent">Norte Studio</p>
            <p className="mt-1 font-display text-lg leading-tight">{dict.common.tagline}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
