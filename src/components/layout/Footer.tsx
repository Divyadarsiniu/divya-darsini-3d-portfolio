import React from 'react';
import { PROFILE } from '@/data/profile';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/50 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-500 dark:text-zinc-400">
        <div>
          <p className="font-medium text-zinc-800 dark:text-zinc-200">
            {PROFILE.name} · {PROFILE.education.institution}
          </p>
          <p className="mt-1">
            B.Tech Computer Science & Engineering (2023–2027) · CGPA: {PROFILE.education.cgpa}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            GitHub
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Email
          </a>
          <a
            href="#hero"
            aria-label="Scroll to top"
            className="inline-flex items-center gap-1 p-2 rounded-md hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors text-zinc-700 dark:text-zinc-300"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Top</span>
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-zinc-200/60 dark:border-zinc-800/40 text-center text-[11px] text-zinc-400 dark:text-zinc-500">
        &ldquo;An engineer who can design, build, integrate, evaluate, and deploy intelligent software systems.&rdquo;
      </div>
    </footer>
  );
}
