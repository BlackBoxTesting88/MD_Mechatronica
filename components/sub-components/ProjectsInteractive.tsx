'use client';

import { useState } from 'react';
import type { Project } from '@/data/projectData';
import ProjectList from './ProjectList';
import ProjectModal from './ProjectsModal';

type ProjectsInteractiveProps = {
  projects: Project[];
};

export default function ProjectsInteractive({ projects }: ProjectsInteractiveProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <ProjectList projects={projects} openModal={openModal} />
      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
