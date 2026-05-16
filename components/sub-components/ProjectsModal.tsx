'use client';

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
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
    if (!project) return null;
  
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-dark/80 backdrop-blur-sm z-50"
            />
  
            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl md:rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close project details"
                  className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-10"
                >
                  <X className="w-5 h-5 text-dark" />
                </button>
  
                {/* Image */}
                <div className="relative h-48 md:h-96 overflow-hidden rounded-t-2xl md:rounded-t-3xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                    aria-label={project.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-secondary text-white text-sm font-semibold px-5 py-2 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
  
                {/* Content */}
                <div className="p-6 md:p-8 lg:p-12">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark">
                      {project.title}
                    </h2>
                  </div>
  
                  <div className="flex items-center space-x-6 mb-8 pb-6 border-b border-gray-200">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Year</p>
                      <p className="text-lg font-semibold text-dark">
                        {project.year}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Client</p>
                      <p className="text-lg font-semibold text-dark">
                        {project.client}
                      </p>
                    </div>
                  </div>
  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>
  
                    <h3 className="text-xl font-bold text-dark mb-4">
                      Project Details
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      This project showcases our expertise in handling complex
                      industrial machinery installations and maintenance. Our team
                      of certified technicians worked closely with the client to
                      ensure minimal downtime and maximum efficiency.
                    </p>
  
                    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 mt-6">
                      <h4 className="font-bold text-dark mb-3">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-3" />
                          <span className="text-gray-700">
                            Professional installation and setup
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-3" />
                          <span className="text-gray-700">
                            Minimal production downtime
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-3" />
                          <span className="text-gray-700">
                            Complete documentation and training
                          </span>
                        </li>
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