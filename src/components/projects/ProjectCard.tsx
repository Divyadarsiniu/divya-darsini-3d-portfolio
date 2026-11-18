'use client';

import React from 'react';
import Link from 'next/link';
import { ProjectCaseStudy } from '@/types';
import { ArrowUpRight, Maximize2, GitBranch } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectCaseStudy;
  onOpenModal: (project: ProjectCaseStudy) => void;
}

export function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  return (
    <div className="group rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-zinc-950 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-xl hover:-translate-y-1">
      <div>
        {/* Header Metadata */}
        <div className="flex items-center justify-between mb-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <span className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 text-zinc-800 dark:text-zinc-200">
            {project.category}
          </span>
          <span>{project.year}</span>
        </div>

        {/* Project Name */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors">
          {project.title}
        </h3>

        {/* Problem-Oriented Description */}
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
          {project.problemStatement}
        </p>

        {/* Relevant Visual / Architectural Highlights */}
        <div className="my-5 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-900 font-mono text-xs text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-1.5 font-semibold text-zinc-800 dark:text-zinc-200 mb-1.5">
            <GitBranch className="w-3.5 h-3.5 text-zinc-500" />
            <span>Architecture Highlight</span>
          </div>
          <p className="text-[11px] leading-relaxed line-clamp-2">
            {project.architecture.description}
          </p>
        </div>

        {/* Metrics Badge Row if present */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 my-4">
            {project.metrics.map((m, i) => (
              <div
                key={i}
                className="p-2 rounded-lg bg-zinc-100/60 dark:bg-zinc-900/40 border border-zinc-200/40 dark:border-zinc-800/40 text-center"
              >
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 block truncate">
                  {m.label}
                </span>
                <span className="text-xs font-mono font-bold text-zinc-900 dark:text-zinc-100">
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Technology Stack Badges */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.stack.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-800/50"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer: View Details Modal and Dedicated Page Link */}
      <div className="mt-8 pt-5 border-t border-zinc-100 dark:border-zinc-900 flex items-center justify-between gap-2">
        <button
          onClick={() => onOpenModal(project)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300 py-1.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 rounded"
          aria-label={`View quick case study modal for ${project.title}`}
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>Quick Overview</span>
        </button>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 py-1.5 transition-colors group-hover:translate-x-0.5"
          aria-label={`Open full case-study page for ${project.title}`}
        >
          <span>Full Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
        </Link>
      </div>
    </div>
  );
}
