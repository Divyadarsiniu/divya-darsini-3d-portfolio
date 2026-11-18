import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PROFILE } from '@/data/profile';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 px-6 max-w-6xl mx-auto border-t border-zinc-200/60 dark:border-zinc-800/60">
      <SectionHeading
        eyebrow="Section G"
        title="Formal Education & Academic Rigor"
        subtitle="Undergraduate curriculum foundation spanning theoretical computation, intelligent systems, and scalable infrastructure."
      />

      <div className="rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-zinc-950 p-7 sm:p-9 shadow-xs">
        {/* University Header Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-zinc-200/80 dark:border-zinc-800/80">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 shrink-0">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                {PROFILE.education.institution}
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-300 font-medium mt-0.5">
                {PROFILE.education.degree}
              </p>
              <p className="text-xs font-mono text-zinc-500 mt-1">
                Duration: {PROFILE.education.duration} &bull; {PROFILE.education.status}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto bg-zinc-50 dark:bg-zinc-900 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                Cumulative Grade Point Average
              </span>
              <span className="text-xl font-mono font-extrabold text-zinc-900 dark:text-zinc-100">
                {PROFILE.education.cgpa} <span className="text-xs font-normal text-zinc-400">/ 10.0</span>
              </span>
            </div>
          </div>
        </div>

        {/* Relevant Coursework Section */}
        <div className="pt-8">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-4 h-4 text-zinc-500" />
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              Verified Relevant Coursework
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {PROFILE.coursework.map((course) => (
              <div
                key={course.name}
                className="p-3.5 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-zinc-900/30 flex flex-col justify-between"
              >
                <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">
                  {course.name}
                </span>
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mt-2">
                  {course.domain}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
