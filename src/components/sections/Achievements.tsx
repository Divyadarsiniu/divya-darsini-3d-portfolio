import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ACHIEVEMENTS } from '@/data/achievements';
import { Award, Trophy, Bug } from 'lucide-react';

const achievementIcons: Record<string, React.ReactNode> = {
  'sih-2025': <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
  'ultron-hackathon': <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  'bug-busters-2024': <Bug className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
};

export function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-32 px-6 max-w-6xl mx-auto border-t border-zinc-200/60 dark:border-zinc-800/60">
      <SectionHeading
        eyebrow="Section F"
        title="Competitive Hackathons & Milestones"
        subtitle="Resume-validated recognitions from national innovation challenges and competitive technical hackathons."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ACHIEVEMENTS.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-600 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60">
                  {achievementIcons[item.id]}
                </div>
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  {item.year}
                </span>
              </div>

              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                {item.title}
              </h3>

              <div className="mt-1.5 inline-block text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                {item.role}
              </div>

              <p className="mt-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-900 text-[11px] font-mono text-zinc-400">
              Verified Candidate Entry
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
