import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { formatDate } from "@/lib/format";
import type { Article } from "@/types";

export function ArticleCard({
  item,
  locale,
  minRead,
}: {
  item: Article;
  locale: Locale;
  minRead: string;
}) {
  return (
    <Link
      href={`/${locale}/journal/${item.slug}`}
      className="group flex flex-col overflow-hidden rounded-card border border-line bg-white/40 transition hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-paper-deep">
        <Image
          src={item.image}
          alt={item.title[locale]}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs text-ink-soft">
          <span className="eyebrow text-accent">{item.category[locale]}</span>
          <span aria-hidden="true">·</span>
          <span>
            {formatDate(item.date, locale)} · {item.readingTime} {minRead}
          </span>
        </div>
        <h3 className="mt-3 font-display text-xl font-medium leading-snug">
          {item.title[locale]}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{item.excerpt[locale]}</p>
      </div>
    </Link>
  );
}
