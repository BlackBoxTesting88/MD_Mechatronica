import { getTranslations } from "next-intl/server";
import { PROJECT_KEYS, PROJECT_META, type Project } from "@/data/projectData";
import ProjectsInteractive from "./sub-components/ProjectsInteractive";

export default async function Projects() {
  const t = await getTranslations("Projects");

  const projects: Project[] = PROJECT_KEYS.map((key) => ({
    id: key,
    title: t(`items.${key}.title`),
    category: t(`items.${key}.category`),
    description: t(`items.${key}.description`),
    image: PROJECT_META[key].image,
    year: PROJECT_META[key].year,
  }));

  return (
    <section id="projects" className="bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32 py-20">
            <div className="hero-enter">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                {t("eyebrow")}
              </span>
              <h2 className="heading-lg mt-4 mb-6 text-dark">
                {t("title")}
                <br />
                <span className="text-primary">{t("titleHighlight")}</span>
              </h2>

              <div className="w-16 h-1 bg-secondary mb-8" />

              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {t("paragraph1")}
              </p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                {t("paragraph2")}
              </p>

              <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-gray-200">
                <div>
                  <p className="text-3xl font-bold text-primary mb-1">500+</p>
                  <p className="text-gray-600 text-sm">{t("statProjects")}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary mb-1">200+</p>
                  <p className="text-gray-600 text-sm">{t("statClients")}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary mb-1">20+</p>
                  <p className="text-gray-600 text-sm">{t("statYears")}</p>
                </div>
              </div>
            </div>
          </div>

          <ProjectsInteractive projects={projects} />
        </div>
      </div>
    </section>
  );
}
