import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PROJECTS } from '@/data/projects';
import { ArrowLeft, ArrowUpRight, CheckCircle2, AlertCircle, BarChart3, Layers, Wrench, ShieldCheck, Calendar, Folder } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} | Divya Darsini Portfolio`,
    description: project.problemStatement.slice(0, 160),
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <header className="mb-12 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-semibold border border-zinc-200/80 dark:border-zinc-800/80">
              <Folder className="w-3 h-3 text-zinc-500" />
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-zinc-500" />
              {project.year}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.12]">
            {project.title}
          </h1>

          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-light">
            {project.tagline}
          </p>

          {/* Quick Metrics Bar */}
          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
              {project.metrics.map((m, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/70 dark:border-zinc-800/70"
                >
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 block font-mono">
                    {m.label}
                  </span>
                  <span className="text-lg font-bold font-mono text-zinc-900 dark:text-zinc-100 mt-1 block">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </header>

        {/* 8-Part Case Study Content Body */}
        <div className="space-y-12">
          {/* 1. Problem Statement */}
          <section id="problem">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
              1. Problem Statement
            </h2>
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/80 text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {project.problemStatement}
            </div>
          </section>

          {/* 2. Solution Overview */}
          <section id="solution">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
              2. Solution Overview
            </h2>
            <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-light">
              {project.solutionOverview}
            </p>
          </section>

          {/* 3. Architecture */}
          <section id="architecture">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-zinc-500" />
              3. Architecture & System Flow
            </h2>
            <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400 mb-4">
              {project.architecture.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.architecture.components.map((comp, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-xs"
                >
                  <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 mb-1.5">
                    {comp.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {comp.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Technologies Breakdown */}
          <section id="technologies">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-4 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-zinc-500" />
              4. Technologies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.technologies.map((tech, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-zinc-200/70 dark:border-zinc-800/70 bg-zinc-50/50 dark:bg-zinc-900/30"
                >
                  <span className="text-xs font-mono font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block mb-2">
                    {tech.category}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {tech.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-200/60 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Implementation */}
          <section id="implementation">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
              5. Implementation Lifecycle
            </h2>
            <div className="space-y-3">
              {project.implementation.map((step, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/30 dark:bg-zinc-900/20 flex items-start gap-4"
                >
                  <span className="font-mono text-xs font-bold text-zinc-400 dark:text-zinc-500 pt-0.5">
                    Step 0{i + 1}
                  </span>
                  <span className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Candidate Contribution */}
          <section id="contribution">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-zinc-500" />
              6. My Direct Contribution
            </h2>
            <div className="space-y-2.5">
              {project.contribution.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800/80"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* 7. Outcomes & Available Metrics */}
          <section id="outcomes">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-3 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-zinc-500" />
              7. Outcomes & Empirical Metrics
            </h2>
            <div className="space-y-2 mb-6">
              {project.outcomes.map((outcome, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100 shrink-0 mt-2" />
                  <span className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>

            {/* Special Stuttered Speech Benchmarking Matrix */}
            {project.disfluencyData && (
              <div className="p-6 rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/60">
                <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 mb-4">
                  Word Error Rate (WER) Comparative Analysis on Stuttered Speech
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm font-mono">
                    <thead>
                      <tr className="border-b border-zinc-200 dark:border-zinc-800 text-zinc-500">
                        <th className="py-2.5 pr-4">Model Architecture</th>
                        <th className="py-2.5 pr-4">Verbatim WER</th>
                        <th className="py-2.5">Analysis / CTC Token Behavior</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200/70 dark:divide-zinc-800/70">
                      <tr>
                        <td className="py-3 font-bold text-emerald-700 dark:text-emerald-400">
                          Whisper-small (Encoder-Decoder)
                        </td>
                        <td className="py-3 font-bold text-base">5.88%</td>
                        <td className="py-3 text-zinc-600 dark:text-zinc-400 font-sans text-xs">
                          Contextual cross-attention successfully retained phoneme fidelity across disfluent blocks and word repetitions.
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 font-bold text-amber-700 dark:text-amber-400">
                          Wav2Vec2 (CTC Architecture)
                        </td>
                        <td className="py-3 font-bold text-base">44.12%</td>
                        <td className="py-3 text-zinc-600 dark:text-zinc-400 font-sans text-xs">
                          Suffered severe Connectionist Temporal Classification (CTC) token collapse during prolonged phonemes and repetitive syllable boundaries.
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 font-bold text-blue-700 dark:text-blue-400">
                          gTTS Round Trip
                        </td>
                        <td className="py-3 font-bold text-base">9.09%</td>
                        <td className="py-3 text-zinc-600 dark:text-zinc-400 font-sans text-xs">
                          Text regenerated to audio and transcribed back achieved high fidelity round-trip benchmark.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <strong>Boundary Scoping:</strong> These experimental findings are strictly documented for the specific annotated dataset under study. As per scientific evaluation principles, these metrics are not generalized beyond this project scope.
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* 8. Links and Verification */}
          <section id="links" className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Verified Resume Project Entry</span>
            </div>
            <div className="flex items-center gap-3">
              {project.links.github && (
                <Button href={project.links.github} variant="outline" size="md" isExternal>
                  View GitHub Profile
                  <ArrowUpRight className="w-4 h-4 ml-1 opacity-70" />
                </Button>
              )}
              <Button href="/#contact" size="md">
                Inquire About This Project
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
