'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SKILLS, SKILL_CATEGORIES, SkillCategoryFilter, mapCategoryToFilter } from '@/data/skills';
import { Link2 } from 'lucide-react';

export function Skills() {
  const [selectedFilter, setSelectedFilter] = useState<SkillCategoryFilter>('All');
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const filteredSkills = SKILLS.filter((skill) => {
    if (selectedFilter === 'All') return true;
    return mapCategoryToFilter(skill.category) === selectedFilter;
  });

  const activeSkillObj = SKILLS.find((s) => s.name === activeSkill);

  return (
    <section id="skills" className="py-24 sm:py-32 px-6 max-w-6xl mx-auto border-t border-zinc-200/60 dark:border-zinc-800/60">
      <SectionHeading
        eyebrow="Section C"
        title="Technical Skills & Architecture Stack"
        subtitle="Categorized technologies and engineering practices from candidate projects and research. Verified without invented percentages or scores."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-zinc-200/60 dark:border-zinc-800/60" role="tablist">
        {SKILL_CATEGORIES.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={selectedFilter === cat}
            onClick={() => {
              setSelectedFilter(cat);
              setActiveSkill(null);
            }}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 ${
              selectedFilter === cat
                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 shadow-sm'
                : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {filteredSkills.map((skill) => {
          const isSelected = activeSkill === skill.name;
          const isConnected =
            activeSkillObj?.connections?.includes(skill.name) ?? false;

          return (
            <button
              key={skill.name}
              onClick={() => setActiveSkill(isSelected ? null : skill.name)}
              onMouseEnter={() => setActiveSkill(skill.name)}
              onMouseLeave={() => setActiveSkill(null)}
              className={`text-left p-3.5 rounded-xl border transition-all duration-200 relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 ${
                isSelected
                  ? 'border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950 scale-102 shadow-md z-10'
                  : isConnected
                  ? 'border-emerald-500/80 bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-200'
                  : 'border-zinc-200 dark:border-zinc-800/90 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-xs sm:text-sm tracking-tight truncate">
                  {skill.name}
                </span>
                {skill.connections && skill.connections.length > 0 && (
                  <Link2
                    className={`w-3 h-3 transition-opacity ${
                      isSelected || isConnected
                        ? 'opacity-100'
                        : 'opacity-30 group-hover:opacity-70'
                    }`}
                  />
                )}
              </div>
              <span
                className={`text-[10px] font-mono uppercase tracking-wider block mt-1 ${
                  isSelected
                    ? 'text-zinc-300 dark:text-zinc-600'
                    : isConnected
                    ? 'text-emerald-700 dark:text-emerald-400'
                    : 'text-zinc-400 dark:text-zinc-500'
                }`}
              >
                {skill.category}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Skill Inspector / Connection Visualization Drawer */}
      <div className="mt-8 p-5 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-900/40 text-xs sm:text-sm">
        {activeSkillObj ? (
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="font-bold text-zinc-900 dark:text-zinc-100 text-base">
                {activeSkillObj.name}
              </span>
              <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                {activeSkillObj.category}
              </span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-300 mb-3 leading-relaxed">
              {activeSkillObj.description}
            </p>
            {activeSkillObj.connections && activeSkillObj.connections.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60">
                <span className="text-zinc-400 dark:text-zinc-500 font-mono text-[11px] mr-1">
                  Connected Technologies:
                </span>
                {activeSkillObj.connections.map((c) => (
                  <span
                    key={c}
                    className="px-2 py-0.5 rounded-md bg-zinc-200/60 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-mono"
                  >
                    {c}
                  </span>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="text-zinc-500 dark:text-zinc-400 flex items-center justify-between">
            <span>Hover or select any technology card to view architecture context and connected stack dependencies.</span>
            <span className="font-mono text-[11px] hidden sm:inline text-zinc-400 dark:text-zinc-500">
              Total Technologies: {SKILLS.length}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
