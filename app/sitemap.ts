import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getLocaleUrl } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  const languages = Object.fromEntries(
    routing.locales.map((locale) => [locale, getLocaleUrl(locale)])
  );

  languages["x-default"] = getLocaleUrl(routing.defaultLocale);

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages,
      },
    },
  ];
}
