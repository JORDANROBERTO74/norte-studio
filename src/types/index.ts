export type Localized<T> = Record<"en" | "es", T>;

export type Metric = {
  /** Compact, locale-independent figure, e.g. "+42%". */
  value: string;
  label: Localized<string>;
};

export type CaseStudy = {
  slug: string;
  client: string;
  sector: Localized<string>;
  year: string;
  services: Localized<string[]>;
  image: string;
  summary: Localized<string>;
  challenge: Localized<string>;
  solution: Localized<string>;
  metrics: Metric[];
  featured: boolean;
};

export type Article = {
  slug: string;
  title: Localized<string>;
  excerpt: Localized<string>;
  date: string;
  readingTime: number;
  category: Localized<string>;
  image: string;
  body: Localized<string[]>;
};

export type TeamMember = {
  name: string;
  role: Localized<string>;
  initials: string;
};
