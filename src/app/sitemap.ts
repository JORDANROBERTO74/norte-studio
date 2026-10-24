import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { articles } from "@/content/articles";
import { cases } from "@/content/cases";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/work",
    "/journal",
    "/contact",
    ...cases.map((item) => `/work/${item.slug}`),
    ...articles.map((item) => `/journal/${item.slug}`),
  ];

  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${site.url}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency:
        route.startsWith("/work/") || route.startsWith("/journal/")
          ? ("monthly" as const)
          : ("weekly" as const),
      priority: route === "" ? 1 : route.startsWith("/work/") || route.startsWith("/journal/") ? 0.7 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((code) => [code, `${site.url}/${code}${route}`]),
        ),
      },
    })),
  );
}
