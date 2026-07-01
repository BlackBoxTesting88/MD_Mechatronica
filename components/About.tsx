import { CheckCircle, Award } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import { getTranslations } from "next-intl/server";
import collibriImage from "@/public/images/Collibri.webp";
import alegroSaudiArabiaImage from "@/public/images/Alegro_SaudiArabia.webp";
import boleroInstallationImage from "@/public/images/Bolero_Installation.webp";
import hoeraufBdmCompactImage from "@/public/images/Hoerauf_BDM_Compact.webp";

export default async function About() {
  const t = await getTranslations("About");

  const additionalServices = [
    t("additionalService1"),
    t("additionalService2"),
    t("additionalService3"),
  ];

  const features = [t("feature1"), t("feature2"), t("feature3")];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="about-enter-left">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              {t("eyebrow")}
            </span>
            <h2 className="heading-lg mt-4 mb-6">
              {t("title")}{" "}
              <span className="text-primary">{t("titleHighlight")}</span>{" "}
              {t("titleSuffix")}
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {t("description")}
            </p>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-primary/10">
              <div className="space-y-3">
                {additionalServices.map((service, index) => (
                  <div
                    key={service}
                    className="flex items-center space-x-3 about-stagger-item"
                    style={{ "--about-index": index } as CSSProperties}>
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-start space-x-3 about-stagger-item"
                  style={{ "--about-index": index } as CSSProperties}>
                  <CheckCircle
                    className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5"
                    aria-hidden
                  />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="btn-primary inline-block"
              aria-label={t("ctaAria")}>
              {t("cta")}
            </a>
          </div>

          <div className="relative about-enter-right">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-gradient-to-br from-primary to-primary-dark rounded-xl overflow-hidden relative">
                  <Image
                    src={collibriImage}
                    alt={t("imageCollibri")}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="h-64 bg-gradient-to-br from-secondary to-secondary-dark rounded-xl overflow-hidden relative">
                  <Image
                    src={alegroSaudiArabiaImage}
                    alt={t("imageAlegro")}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 bg-gradient-to-br from-primary-dark to-primary rounded-xl overflow-hidden relative">
                  <Image
                    src={boleroInstallationImage}
                    alt={t("imageBolero")}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="h-48 bg-gradient-to-br from-secondary-dark to-secondary rounded-xl overflow-hidden relative">
                  <Image
                    src={hoeraufBdmCompactImage}
                    alt={t("imageHoerauf")}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-6 border-4 border-secondary">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-secondary" aria-hidden />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-dark">ISO</h4>
                  <p className="text-sm text-gray-600">{t("isoCertified")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
