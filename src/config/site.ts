/**
 * Canonical origin for metadata, canonical links, hreflang, sitemap, robots and
 * Open Graph URLs. Set NEXT_PUBLIC_SITE_URL on the host (the Vercel production
 * domain, for example); the fallback keeps local builds pointing at the live site.
 */
const FALLBACK_URL = "https://norte-studio.vercel.app";

function resolveSiteUrl(): string {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return (value && value.length > 0 ? value : FALLBACK_URL).replace(/\/+$/, "");
}

export const site = {
  name: "Norte Studio",
  legalName: "Norte Studio S.L.",
  domain: "nortestudio.es",
  url: resolveSiteUrl(),
  email: "hola@nortestudio.es",
  phone: "+34 960 123 456",
  address: {
    street: "Carrer de la Mar 12, El Cabanyal",
    city: "Valencia",
    country: "Spain",
    countryCode: "ES",
  },
  social: {
    instagram: "https://instagram.com/nortestudio",
    linkedin: "https://linkedin.com/company/nortestudio",
    x: "https://x.com/nortestudio",
  },
  /** Top-level routes. The `key` maps to a dictionary label under `nav`. */
  nav: [
    { key: "about", href: "/about" },
    { key: "services", href: "/services" },
    { key: "work", href: "/work" },
    { key: "journal", href: "/journal" },
    { key: "contact", href: "/contact" },
  ],
} as const;
