'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { RESEARCH_INFO } from '@/data/research';
import { CheckCircle2, Clock, ShieldAlert, FileText, Database, Video, Users, CheckSquare } from 'lucide-react';

const metricIcons = [
  <Video key="1" className="w-4 h-4 text-zinc-500" />,
  <FileText key="2" className="w-4 h-4 text-zinc-500" />,
  <Users key="3" className="w-4 h-4 text-zinc-500" />,
  <CheckSquare key="4" className="w-4 h-4 text-zinc-500" />,
  <Database key="5" className="w-4 h-4 text-zinc-500" />,
  <CheckCircle2 key="6" className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
];

export function Research() {
  return (
    <section id="research" className="py-24 sm:py-32 px-6 max-w-6xl mx-auto border-t border-zinc-200/60 dark:border-zinc-800/60">
      <SectionHeading
        eyebrow="Section E"
        title={RESEARCH_INFO.title}
        subtitle={`${RESEARCH_INFO.role} · ${RESEARCH_INFO.institution} (${RESEARCH_INFO.location}, ${RESEARCH_INFO.year})`}
      />

      {/* Scoping Disclaimer */}
      <div className="mb-12 p-4 rounded-xl bg-zinc-100/70 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 flex items-start gap-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
        <ShieldAlert className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
        <span>{RESEARCH_INFO.disclaimer}</span>
      </div>

      {/* Numerical Statistics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-16">
        {RESEARCH_INFO.metrics.map((metric, i) => (
          <div
            key={i}
            className="p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider truncate">
                {metric.label}
              </span>
              {metricIcons[i]}
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-zinc-900 dark:text-zinc-50 tracking-tight">
              {metric.value}
              {metric.suffix && <span className="text-sm font-normal text-zinc-500">{metric.suffix}</span>}
            </div>
            <p className="mt-2 text-[11px] text-zinc-500 dark:text-zinc-400 leading-tight">
              {metric.description}
            </p>
          </div>
        ))}
      </div>

      {/* Behavioral Domains Overview */}
      <div className="mb-16 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/80">
        <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-3">
          Six Observed Behavioral Domains
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs font-medium text-zinc-800 dark:text-zinc-200">
          {RESEARCH_INFO.domains.map((dom, i) => (
            <div
              key={i}
              className="p-3 rounded-lg bg-white dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-800/60 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
              <span>{dom}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Workflow Diagram & Stage Progression */}
      <div>
        <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-6">
          Research Methodology & Execution Pipeline
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {RESEARCH_INFO.workflowSteps.map((step) => {
            const isCompleted = step.status === 'completed';
            return (
              <Card
                key={step.step}
                className={`relative flex flex-col justify-between ${
                  isCompleted
                    ? 'border-zinc-200 dark:border-zinc-800'
                    : 'border-blue-300 dark:border-blue-900/60 bg-blue-50/20 dark:bg-blue-950/10'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-zinc-400">
                      Phase 0{step.step}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-md ${
                        isCompleted
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 animate-pulse'
                      }`}
                    >
                      {isCompleted ? (
                        <>
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Completed</span>
                        </>
                      ) : (
                        <>
                          <Clock className="w-3 h-3" />
                          <span>Ongoing</span>
                        </>
                      )}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-3">
                    {step.summary}
                  </p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {step.details}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-900 text-[10px] font-mono text-zinc-400">
                  {isCompleted
                    ? 'Documented in IEEE Paper'
                    : 'Validated with Cohen\'s Kappa'}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
