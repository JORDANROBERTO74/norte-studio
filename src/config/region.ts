/**
 * Single source of truth for the market this studio serves.
 * Change this file to relocate the studio: currency and formatting follow.
 */
export const region = {
  id: "es",
  /** ISO 4217 code used for pricing and formatting. */
  currency: "EUR",
} as const;

export type Region = typeof region;
