'use client';

import dynamic from 'next/dynamic';

const FloatingObject = dynamic(
  () => import('./FloatingObject').then((mod) => mod.FloatingObject),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[320px] flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border border-zinc-200 dark:border-zinc-800 animate-pulse flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        </div>
      </div>
    ),
  }
);

export function HeroScene() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <FloatingObject />
    </div>
  );
}
