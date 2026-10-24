import { region } from "@/config/region";
import type { Locale } from "@/i18n/config";

const localeTag: Record<Locale, string> = { en: "en-GB", es: "es-ES" };

export function formatPrice(minorUnits: number, locale: Locale): string {
  return new Intl.NumberFormat(localeTag[locale], {
    style: "currency",
    currency: region.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(minorUnits / 100);
}

export function formatDate(value: string, locale: Locale): string {
  return new Intl.DateTimeFormat(localeTag[locale], { dateStyle: "long" }).format(
    new Date(value),
  );
}
