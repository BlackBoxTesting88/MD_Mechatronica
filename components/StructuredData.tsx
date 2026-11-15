import { getTranslations } from "next-intl/server";
import { getLocaleUrl } from "@/lib/seo";
import { getSiteUrl, OG_IMAGE_PATH, SITE_EMAIL, SITE_NAME } from "@/lib/site";

type StructuredDataProps = {
  locale: string;
};

export default async function StructuredData({ locale }: StructuredDataProps) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    description: t("structuredDataDescription"),
    url: getLocaleUrl(locale),
    email: SITE_EMAIL,
    image: `${getSiteUrl()}${OG_IMAGE_PATH}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ul. Przedwiośnia 23/8",
      addressLocality: "Piaseczno",
      postalCode: "05-500",
      addressCountry: "PL",
    },
    areaServed: {
      "@type": "GeoCircle",
      name: "Europe",
    },
    knowsAbout: [
      "Müller Martini printing machines",
      "Kolbus binding machines",
      "Hörauf printing machines",
      "Industrial machinery maintenance",
      "Machine installation",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
