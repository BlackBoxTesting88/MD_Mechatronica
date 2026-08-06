import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import StructuredData from "@/components/StructuredData";
import { routing } from "@/i18n/routing";
import {
  getLanguageAlternates,
  getLocalePath,
  getLocaleUrl,
  getOpenGraphAlternateLocales,
  getOpenGraphLocale,
} from "@/lib/seo";
import { getSiteUrl, OG_IMAGE_PATH, SITE_NAME } from "@/lib/site";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const siteUrl = getSiteUrl();
  const canonicalPath = getLocalePath(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalPath,
      languages: getLanguageAlternates(),
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: getLocaleUrl(locale),
      siteName: SITE_NAME,
      locale: getOpenGraphLocale(locale),
      alternateLocale: getOpenGraphAlternateLocales(locale),
      type: "website",
      images: [
        {
          url: OG_IMAGE_PATH,
          alt: t("ogImageAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [OG_IMAGE_PATH],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    icons: {
      icon: "/headerBlackLogo.png",
      apple: "/headerBlackLogo.png",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="font-sans">
        <StructuredData locale={locale} />
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
