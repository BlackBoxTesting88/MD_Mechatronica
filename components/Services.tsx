"use client";

import { Wrench, Package, Settings, Zap, Shield, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const SERVICE_KEYS = [
  "repair",
  "installation",
  "parts",
  "emergency",
  "preventive",
  "modernization",
] as const;

type ServiceKey = (typeof SERVICE_KEYS)[number];

const SERVICE_CONFIG: Record<
  ServiceKey,
  { icon: React.ElementType; bgImage: string }
> = {
  repair: { icon: Wrench, bgImage: "/images/Alegro_SaudiArabia.webp" },
  installation: { icon: Settings, bgImage: "/images/Bolero_Installation_.webp" },
  parts: { icon: Package, bgImage: "/images/Bolero_Installation.webp" },
  emergency: { icon: Zap, bgImage: "/images/Collibri.webp" },
  preventive: { icon: Shield, bgImage: "/images/Diamant.webp" },
  modernization: { icon: Clock, bgImage: "/images/Hoerauf_BDM_Compact.webp" },
};

const SLIDESHOW_IMAGES = [
  "/images/Diamant.webp",
  "/images/Collibri.webp",
  "/images/Bolero_Installation.webp",
  "/images/Hoerauf_BDM_Compact.webp",
  "/images/Kolbus_KM200.webp",
  "/images/Kolbus_BF530.webp",
  "/images/Sorter.webp",
  "/images/Bolero_Installation_.webp",
  "/images/Alegro_SaudiArabia.webp",
] as const;

function MachineSlideshow() {
  const t = useTranslations("Services");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (SLIDESHOW_IMAGES.length < 2) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0">
          <Image
            src={SLIDESHOW_IMAGES[currentIndex]}
            alt={t("slideshowAlt", { index: currentIndex + 1 })}
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {SLIDESHOW_IMAGES.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={t("slideshowAlt", { index: index + 1 })}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-secondary w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function MachineList({ machines }: { machines: string[] }) {
  return (
    <ul className="space-y-2">
      {machines.map((machine) => (
        <li key={machine} className="flex items-start space-x-3 group">
          <div className="w-5 h-5 bg-secondary/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-secondary transition-colors">
            <svg
              className="w-3 h-3 text-secondary group-hover:text-white transition-colors"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden>
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="text-white/90 group-hover:text-white transition-colors">
            {machine}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Services() {
  const t = useTranslations("Services");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const hardcoverMachines = t.raw("expertise.hardcoverMachines") as string[];
  const trimmerMachines = t.raw("expertise.trimmerMachines") as string[];
  const binderMachines = t.raw("expertise.binderMachines") as string[];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            {t("eyebrow")}
          </span>
          <h2 className="heading-lg mt-4 mb-6">
            {t("title")}{" "}
            <span className="text-primary">{t("titleHighlight")}</span>{" "}
            {t("titleSuffix")}
          </h2>
          <p className="text-gray-600 text-lg">{t("subtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_KEYS.map((key, index) => {
            const { icon: Icon, bgImage } = SERVICE_CONFIG[key];
            const isHovered = hoveredIndex === index;
            const isOtherHovered =
              hoveredIndex !== null && hoveredIndex !== index;
            const title = t(`items.${key}.title`);
            const features = [
              t(`items.${key}.feature1`),
              t(`items.${key}.feature2`),
              t(`items.${key}.feature3`),
            ];

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{
                  y: -12,
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                className="relative group overflow-hidden rounded-2xl cursor-pointer"
                style={{
                  opacity: isOtherHovered ? 0.4 : 1,
                  filter: isOtherHovered ? "blur(2px) grayscale(50%)" : "none",
                  transition: "all 0.4s ease-in-out",
                }}>
                <div
                  className={`absolute inset-0 z-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}>
                  <Image
                    src={bgImage}
                    alt={title}
                    className="w-full h-full object-cover"
                    width={1000}
                    height={1000}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/70 via-secondary-dark/60 to-primary/70" />
                </div>

                <div
                  className={`relative p-8 h-full transition-all duration-300 ${isHovered ? "bg-transparent" : "bg-white shadow-lg border border-gray-100"}`}>
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 relative transition-all duration-300 ${isHovered ? "bg-white/20 backdrop-blur-sm" : "bg-primary/10"}`}>
                    <Icon
                      className={`w-8 h-8 transition-colors duration-300 ${isHovered ? "text-white" : "text-primary"}`}
                    />
                  </div>

                  <div className="absolute top-6 right-6">
                    <div
                      className={`text-xs font-bold px-3 py-1.5 rounded-full shadow-lg transition-all duration-300 ${isHovered ? "bg-white/20 text-white backdrop-blur-sm" : "bg-secondary text-white"}`}>
                      {t(`items.${key}.stats`)}
                    </div>
                  </div>

                  <h3
                    className={`text-xl font-bold mb-4 transition-colors duration-300 ${isHovered ? "text-white drop-shadow-lg" : "text-dark"}`}>
                    {title}
                  </h3>

                  <p
                    className={`mb-6 leading-relaxed font-medium transition-colors duration-300 ${isHovered ? "text-white drop-shadow-md" : "text-gray-600"}`}>
                    {t(`items.${key}.description`)}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div
                          className={`w-1.5 h-1.5 rounded-full mr-3 transition-colors duration-300 ${isHovered ? "bg-white" : "bg-secondary"}`}
                        />
                        <span
                          className={`transition-colors duration-300 font-medium ${isHovered ? "text-white drop-shadow-md" : "text-gray-700"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className="mt-auto pt-6 border-t transition-colors duration-300"
                    style={{
                      borderColor: isHovered
                        ? "rgba(255,255,255,0.2)"
                        : "rgba(229,231,235,1)",
                    }}>
                    <a
                      href="#contact"
                      aria-label={t("learnMoreAria")}
                      className={`font-bold text-sm transition-colors inline-flex items-center ${isHovered ? "text-white drop-shadow-md" : "text-primary"}`}>
                      {t("learnMore")}
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-br from-primary via-primary-dark to-primary-dark rounded-3xl p-10 md:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-block bg-secondary/20 backdrop-blur-sm px-6 py-2 rounded-full mb-4">
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                  {t("expertise.badge")}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t("expertise.title")}
              </h3>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                {t("expertise.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12 md:max-h-[600px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 md:overflow-y-auto md:max-h-[600px]">
                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <Settings className="w-5 h-5 text-secondary" />
                    </div>
                    <h4 className="text-xl font-bold text-secondary uppercase tracking-wide">
                      {t("expertise.hardcover")}
                    </h4>
                  </div>
                  <MachineList machines={hardcoverMachines} />
                </div>

                <div className="mb-6 pt-6 border-t border-white/10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <Package className="w-5 h-5 text-secondary" />
                    </div>
                    <h4 className="text-xl font-bold text-secondary uppercase tracking-wide">
                      {t("expertise.trimmers")}
                    </h4>
                  </div>
                  <MachineList machines={trimmerMachines} />
                </div>

                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <Wrench className="w-5 h-5 text-secondary" />
                    </div>
                    <h4 className="text-xl font-bold text-secondary uppercase tracking-wide">
                      {t("expertise.binders")}
                    </h4>
                  </div>
                  <MachineList machines={binderMachines} />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 relative h-64 md:h-[600px]">
                <MachineSlideshow />
              </motion.div>
            </div>

            <div className="text-center">
              <a
                href="#contact"
                aria-label={t("ctaAria")}
                className="inline-flex items-center space-x-2 bg-secondary hover:bg-secondary-dark text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
                <span>{t("cta")}</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
