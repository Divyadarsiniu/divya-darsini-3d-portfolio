'use client';

import React from 'react';
import Link from 'next/link';
import { ProjectCaseStudy } from '@/types';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { ArrowUpRight, CheckCircle2, AlertCircle, BarChart3, Layers, Wrench, ShieldCheck } from 'lucide-react';

interface ProjectCaseStudyModalProps {
  project: ProjectCaseStudy | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectCaseStudyModal({
  project,
  isOpen,
  onClose,
}: ProjectCaseStudyModalProps) {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title}>
      {/* Category and Subtitle */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-zinc-200 dark:border-zinc-800 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-semibold">
            {project.category}
          </span>
          <span className="text-zinc-500">Year: {project.year}</span>
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 text-zinc-900 dark:text-zinc-100 hover:underline font-semibold"
        >
          Dedicated Page <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* 1. Problem Statement */}
      <section>
        <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100" />
          1. Problem Statement
        </h4>
        <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed bg-zinc-50 dark:bg-zinc-900/40 p-4 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60">
          {project.problemStatement}
        </p>
      </section>

      {/* 2. Solution Overview */}
      <section>
        <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100" />
          2. Solution Overview
        </h4>
        <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
          {project.solutionOverview}
        </p>
      </section>

      {/* 3. Architecture & Components */}
      <section>
        <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 flex items-center gap-2">
          <Layers className="w-3.5 h-3.5 text-zinc-500" />
          3. Architecture
        </h4>
        <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-3">
          {project.architecture.description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {project.architecture.components.map((c, i) => (
            <div
              key={i}
              className="p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30"
            >
              <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 block mb-1">
                {c.name}
              </span>
              <span className="text-xs text-zinc-600 dark:text-zinc-400 leading-normal block">
                {c.detail}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Technologies Breakdown */}
      <section>
        <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 flex items-center gap-2">
          <Wrench className="w-3.5 h-3.5 text-zinc-500" />
          4. Technologies
        </h4>
        <div className="space-y-2">
          {project.technologies.map((t, i) => (
            <div key={i} className="text-xs flex flex-wrap items-baseline gap-2">
              <span className="font-mono text-zinc-500 dark:text-zinc-400 min-w-[120px]">
                {t.category}:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {t.items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-mono text-[11px]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Implementation Steps */}
      <section>
        <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100" />
          5. Implementation
        </h4>
        <ul className="space-y-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
          {project.implementation.map((step, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="font-mono text-zinc-400 text-xs shrink-0 mt-0.5">
                [0{i + 1}]
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 6. Candidate Contribution */}
      <section>
        <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-zinc-500" />
          6. My Contribution
        </h4>
        <ul className="space-y-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
          {project.contribution.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 7. Outcomes & Available Metrics */}
      <section>
        <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 flex items-center gap-2">
          <BarChart3 className="w-3.5 h-3.5 text-zinc-500" />
          7. Outcomes & Verified Metrics
        </h4>
        <ul className="space-y-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 mb-4">
          {project.outcomes.map((outcome, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0 mt-2" />
              <span>{outcome}</span>
            </li>
          ))}
        </ul>

        {/* Special Stuttered Speech Comparison Chart if Project 6 */}
        {project.disfluencyData && (
          <div className="mt-4 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
            <h5 className="font-bold text-xs font-mono text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-1.5">
              <span>Experimental Word Error Rate (WER) Benchmarks</span>
            </h5>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-zinc-200 dark:border-zinc-800 text-zinc-500">
                    <th className="py-2 pr-4">Model Architecture</th>
                    <th className="py-2 pr-4">Verbatim WER</th>
                    <th className="py-2">Observed Behavior & Disfluency Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200/60 dark:divide-zinc-800/60">
                  <tr>
                    <td className="py-2.5 font-bold text-emerald-700 dark:text-emerald-400">
                      Whisper-small (Encoder-Decoder)
                    </td>
                    <td className="py-2.5 font-bold">5.88%</td>
                    <td className="py-2.5 text-zinc-600 dark:text-zinc-400 font-sans">
                      Robust contextual cross-attention preserved transcription integrity across disfluent pauses.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-bold text-amber-700 dark:text-amber-400">
                      Wav2Vec2 (CTC Architecture)
                    </td>
                    <td className="py-2.5 font-bold">44.12%</td>
                    <td className="py-2.5 text-zinc-600 dark:text-zinc-400 font-sans">
                      Connectionist Temporal Classification token collapse during sound prolongations and repetitions.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-bold text-blue-700 dark:text-blue-400">
                      gTTS Round Trip
                    </td>
                    <td className="py-2.5 font-bold">9.09%</td>
                    <td className="py-2.5 text-zinc-600 dark:text-zinc-400 font-sans">
                      Evaluated synthetic audio regeneration fidelity back to text.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-3 p-2.5 rounded bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-[11px] text-amber-900 dark:text-amber-200 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>
                <strong>Scoping Note:</strong> These empirical findings are specific to the annotated experimental stuttered speech test set and should not be generalized as universal clinical diagnostic performance.
              </span>
            </div>
          </div>
        )}
      </section>

      {/* 8. Links and Actions */}
      <section className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {project.links.verified && (
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-700 dark:text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Ground Truth Verified in Candidate Resume
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {project.links.github && (
            <Button
              href={project.links.github}
              variant="outline"
              size="sm"
              isExternal
            >
              GitHub Profile
              <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-70" />
            </Button>
          )}
          <Button href={`/projects/${project.slug}`} size="sm">
            Read Dedicated Case Study
          </Button>
        </div>
      </section>
    </Modal>
  );
}
