'use client';

import { Project } from "@/data/projectData";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ProjectList({
  projects,
  openModal,
}: {
  projects: Project[];
  openModal: (project: Project) => void;
}) {
  return (
    <div className="space-y-16 py-20">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group"
        >
          {/* Project Image */}
          <div
            className="relative h-96 overflow-hidden rounded-2xl mb-6 cursor-pointer"
            onClick={() => openModal(project)}
          >
            <Image
              src={project.image as string}
              alt={project.title as string}
              width={1000}
              height={1000}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              aria-label={project.title}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent" />

            {/* Category Badge */}
            <div className="absolute top-6 left-6">
              <span className="bg-secondary text-white text-sm font-semibold px-5 py-2 rounded-full">
                {project.category}
              </span>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center justify-between text-white text-sm mb-3">
                <span className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full">
                  {project.year}
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full">
                  {project.client}
                </span>
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight
                    className="w-8 h-8 text-primary"
                    aria-label="View Project Details"
                  />
                </div>
                <p className="text-white font-semibold">View Project Details</p>
              </div>
            </div>
          </div>

          {/* Project Info */}
          <div>
            <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              {project.description}
            </p>
            <button
              onClick={() => openModal(project)}
              className="text-primary font-semibold text-sm hover:text-primary-dark transition-colors inline-flex items-center group"
              aria-label="Learn More"
            >
              Learn More
              <ArrowRight
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                aria-label="Learn More"
              />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
