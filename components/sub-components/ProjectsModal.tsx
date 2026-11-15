"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import type { Project } from "@/data/projectData";

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  const t = useTranslations("Projects");

  if (!project) return null;

  const achievements = [
    t("modalAchievement1"),
    t("modalAchievement2"),
    t("modalAchievement3"),
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-dark/80 backdrop-blur-sm z-50"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl md:rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                onClick={onClose}
                aria-label={t("modalCloseAria")}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-10">
                <X className="w-5 h-5 text-dark" />
              </button>

              <div className="relative h-48 md:h-96 overflow-hidden rounded-t-2xl md:rounded-t-3xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />

                <div className="absolute top-6 left-6">
                  <span className="bg-secondary text-white text-sm font-semibold px-5 py-2 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8 lg:p-12">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-dark">
                    {project.title}
                  </h2>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <h3 className="text-xl font-bold text-dark mb-4">
                    {t("modalDetailsTitle")}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {t("modalDetailsBody")}
                  </p>

                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 mt-6">
                    <h4 className="font-bold text-dark mb-3">
                      {t("modalAchievementsTitle")}
                    </h4>
                    <ul className="space-y-2">
                      {achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-3" />
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
