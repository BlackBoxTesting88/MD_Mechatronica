import { routing } from "@/i18n/routing";
import { getSiteUrl } from "@/lib/site";

export function getLocalePath(locale: string): string {
  return locale === routing.defaultLocale ? "/" : `/${locale}`;
}

export function getLocaleUrl(locale: string): string {
  const base = getSiteUrl();
  const path = getLocalePath(locale);

  return path === "/" ? base : `${base}${path}`;
}

export function getLanguageAlternates(): Record<string, string> {
  const alternates = Object.fromEntries(
    routing.locales.map((locale) => [locale, getLocalePath(locale)])
  );

  alternates["x-default"] = getLocalePath(routing.defaultLocale);

  return alternates;
}

const OPEN_GRAPH_LOCALES: Record<string, string> = {
  en: "en_US",
  de: "de_DE",
  pl: "pl_PL",
};

export function getOpenGraphLocale(locale: string): string {
  return OPEN_GRAPH_LOCALES[locale] ?? "en_US";
}

export function getOpenGraphAlternateLocales(locale: string): string[] {
  const current = getOpenGraphLocale(locale);

  return routing.locales
    .map((entry) => getOpenGraphLocale(entry))
    .filter((entry) => entry !== current);
}
