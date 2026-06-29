import { Heart, Zap, Shield, Users, type LucideIcon } from "lucide-react";
import type { CSSProperties } from "react";
import { getTranslations } from "next-intl/server";

const VALUE_KEYS = ["honesty", "passion", "quality", "dedication"] as const;

const VALUE_CONFIG: Record<
  (typeof VALUE_KEYS)[number],
  { icon: LucideIcon; number: string }
> = {
  honesty: { icon: Heart, number: "01" },
  passion: { icon: Zap, number: "02" },
  quality: { icon: Shield, number: "03" },
  dedication: { icon: Users, number: "04" },
};

export default async function Values() {
  const t = await getTranslations("Values");

  return (
    <section className="section-padding bg-gradient-to-br from-dark via-dark-light to-dark">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 values-header-enter">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            {t("eyebrow")}
          </span>
          <h2 className="heading-lg mt-4 mb-6 text-white">
            {t("title")}{" "}
            <span className="text-secondary">{t("titleHighlight")}</span>
          </h2>
          <p className="text-gray-300 text-lg">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUE_KEYS.map((key, index) => {
            const { icon: Icon, number } = VALUE_CONFIG[key];

            return (
              <div
                key={key}
                className="relative group values-card-enter"
                style={{ "--values-index": index } as CSSProperties}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 h-full hover:bg-white/10 transition-all duration-300 hover:border-secondary/50">
                  <div className="text-6xl font-bold text-white/10 mb-4 group-hover:text-secondary/20 transition-colors">
                    {number}
                  </div>

                  <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300">
                    <Icon
                      className="w-8 h-8 text-secondary group-hover:text-white transition-colors duration-300"
                      aria-hidden
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {t(`items.${key}.description`)}
                  </p>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
