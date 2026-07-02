import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import logo from "@/public/HeaderWhiteLogo.png";
import blackBoxLogo from "@/public/black-box-logo1.png";

const NAV_KEYS = ["home", "services", "about", "projects", "contact"] as const;

export default async function Footer() {
  const t = await getTranslations("Footer");
  const tHeader = await getTranslations("Header");
  const currentYear = new Date().getFullYear();

  const menuItems = NAV_KEYS.map((key) => ({
    key,
    label: tHeader(key),
    href: `#${key === "home" ? "home" : key}`,
  }));

  return (
    <footer className="bg-dark text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src={logo}
                alt={t("logoAlt")}
                className="h-[60px] md:h-[60px] w-auto object-contain mb-4"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              {t("description")}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">{t("quickLinks")}</h4>
            <ul className="space-y-3">
              {menuItems.map(({ key, label, href }) => (
                <li key={key}>
                  <a
                    href={href}
                    className="text-gray-400 hover:text-secondary transition-colors"
                    aria-label={t("goToSectionAria", { section: label })}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">{t("contactInfo")}</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail
                  className="w-5 h-5 text-secondary flex-shrink-0 mt-1"
                  aria-label={t("emailIconAria")}
                />
                <div>
                  <p className="text-gray-400 text-sm mb-1">{t("email")}</p>
                  <a
                    href="mailto:office@md-mechatronica.com"
                    className="text-white hover:text-secondary transition-colors break-all"
                    aria-label={t("emailAria")}>
                    office@md-mechatronica.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin
                  className="w-5 h-5 text-secondary flex-shrink-0 mt-1"
                  aria-label={t("addressIconAria")}
                />
                <div>
                  <p className="text-gray-400 text-sm mb-1">{t("address")}</p>
                  <p className="text-white">
                    {t("addressLine1")}
                    <br />
                    {t("addressLine2")}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-5 md:gap-8">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {t("copyright", { year: currentYear })} {t("nip")}
            </p>
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-gray-400 text-sm">{t("developmentBy")}</p>
              <Image
                src={blackBoxLogo}
                alt={t("blackBoxAlt")}
                className="h-[80px] lg:h-[100px] w-auto object-contain shrink-0 contrast-50"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
