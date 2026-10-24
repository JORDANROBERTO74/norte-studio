import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import type { Locale } from "@/i18n/config";
import type { CaseStudy } from "@/types";

export function CaseCard({
  item,
  locale,
  readLabel,
}: {
  item: CaseStudy;
  locale: Locale;
  readLabel: string;
}) {
  return (
    <Link
      href={`/${locale}/work/${item.slug}`}
      className="group flex flex-col overflow-hidden rounded-card border border-line bg-white/40 transition hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-paper-deep">
        <Image
          src={item.image}
          alt={item.client}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="eyebrow text-ink-soft">
            {item.sector[locale]} · {item.year}
          </p>
          <ArrowUpRight className="size-5 text-accent transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <h3 className="mt-3 font-display text-xl font-medium">{item.client}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{item.summary[locale]}</p>
        <p className="mt-4 text-sm font-semibold text-accent">{readLabel}</p>
      </div>
    </Link>
  );
}
