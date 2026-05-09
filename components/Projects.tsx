'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'Müller Martini Diamant Installation',
    category: 'Installation & Setup',
    image: '/images/Muller-Martini-Diamant-MC-35-7-scaled.webp',
    description: 'Complete installation and calibration of Diamant hardcover system for major printing facility in Germany.',
    year: '2024',
    client: 'PrintTech GmbH',
  },
  {
    title: 'Kolbus RF Complete Overhaul',
    category: 'Maintenance & Repair',
    image: '/images/x800_muellermartini-diamant-11862325.webp',
    description: 'Full mechanical and electrical overhaul of Kolbus RF binding line with modernization and automation upgrades.',
    year: '2024',
    client: 'Europa Binding SA',
  },
  {
    title: 'Three-Knife Trimmer Upgrade',
    category: 'Modernization',
    image: '/images/x800_muellermartini-zenith-s-450470.webp',
    description: 'Technology upgrade for Esprit trimmer including automation systems and safety improvements.',
    year: '2023',
    client: 'Nordic Print AS',
  },
  {
    title: 'Emergency Production Line Repair',
    category: 'Emergency Support',
    image: '/images/x800_muellermartini-diamant-12398885.webp',
    description: '24-hour emergency response for critical production line failure, restoring operations within deadline.',
    year: '2023',
    client: 'FastPrint Industries',
  },
];

// Project Modal Component
function ProjectModal({ project, isOpen, onClose }: { project: typeof projects[0] | null; isOpen: boolean; onClose: () => void }) {
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
                onClick={onClose}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-10"
              >
                <X className="w-5 h-5 text-dark" />
              </button>

              {/* Image */}
              <div className="relative h-48 md:h-96 overflow-hidden rounded-t-2xl md:rounded-t-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
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
                    <p className="text-lg font-semibold text-dark">{project.year}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Client</p>
                    <p className="text-lg font-semibold text-dark">{project.client}</p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <h3 className="text-xl font-bold text-dark mb-4">Project Details</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    This project showcases our expertise in handling complex industrial machinery installations 
                    and maintenance. Our team of certified technicians worked closely with the client to ensure 
                    minimal downtime and maximum efficiency.
                  </p>
                  
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 mt-6">
                    <h4 className="font-bold text-dark mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-3" />
                        <span className="text-gray-700">Professional installation and setup</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-3" />
                        <span className="text-gray-700">Minimal production downtime</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-3" />
                        <span className="text-gray-700">Complete documentation and training</span>
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

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" className="bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Sticky Content */}
          <div className="lg:sticky lg:top-32 py-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Projects
              </span>
              <h2 className="heading-lg mt-4 mb-6 text-dark">
                Our latest<br />
                <span className="text-primary">projects.</span>
              </h2>
              
              <div className="w-16 h-1 bg-secondary mb-8" />
              
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                At MD Mechatronica, we rely on honesty, discipline and hard work. We believe our 
                success can be attributed to upholding a simple set of core values that date back 
                to the beginning of the company.
              </p>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                MD Mechatronica is an integrated service firm offering installation, maintenance, 
                and repair services to customers throughout Europe. Unique to MD Mechatronica is 
                the fact that we conduct all services in-house with highly skilled technicians.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-gray-200">
                <div>
                  <h4 className="text-3xl font-bold text-primary mb-1">500+</h4>
                  <p className="text-gray-600 text-sm">Projects Done</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-primary mb-1">200+</h4>
                  <p className="text-gray-600 text-sm">Happy Clients</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-primary mb-1">15+</h4>
                  <p className="text-gray-600 text-sm">Years Exp.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Scrolling Projects */}
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
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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
                        <ArrowRight className="w-8 h-8 text-primary" />
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
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </section>
  );
}
