import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({
  children,
  className = '',
  hoverEffect = false,
  ...props
}: CardProps) {
  return (
    <div
      className={`rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 p-6 sm:p-7 transition-all duration-300 ${
        hoverEffect
          ? 'hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-lg hover:-translate-y-1'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
