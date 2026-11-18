'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ProjectCaseStudyModal } from '@/components/projects/ProjectCaseStudyModal';
import { PROJECTS } from '@/data/projects';
import { ProjectCaseStudy } from '@/types';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = (project: ProjectCaseStudy) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-24 sm:py-32 px-6 max-w-6xl mx-auto border-t border-zinc-200/60 dark:border-zinc-800/60">
      <SectionHeading
        eyebrow="Section D"
        title="Featured Engineering Projects"
        subtitle="Six production and research projects spanning LLM integrations, two-way computer vision, serverless cloud systems, and speech recognition benchmarks."
      />

      {/* Grid of 6 Featured Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            onOpenModal={handleOpenModal}
          />
        ))}
      </div>

      {/* Accessible Interactive Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
