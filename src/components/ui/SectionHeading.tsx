import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 sm:mb-16 ${
        align === 'center' ? 'text-center mx-auto' : 'text-left'
      } ${className}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
