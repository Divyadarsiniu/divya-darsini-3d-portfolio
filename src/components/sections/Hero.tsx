'use client';

import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { PROFILE } from '@/data/profile';
import { HeroScene } from '@/components/3d/HeroScene';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-32 pb-12 px-6 overflow-hidden max-w-6xl mx-auto"
      aria-label="Introduction and hero overview"
    >
      {/* Background subtle radial ambient light */}
      <div
        className="absolute top-1/3 right-1/4 -z-10 w-96 h-96 rounded-full bg-zinc-200/40 dark:bg-zinc-800/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        {/* Left Column: Large Typography & Identity */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/80 text-xs font-mono text-zinc-600 dark:text-zinc-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>SRMIST CSE &bull; CGPA 9.67 &bull; Grad 2027</span>
          </div>

          {/* Large Bold Typography */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.08] text-balance">
            {PROFILE.name}
          </h1>

          <p className="mt-4 text-xl sm:text-2xl font-light text-zinc-600 dark:text-zinc-300 tracking-tight">
            Junior Gen AI & Full-Stack Engineer
          </p>

          <p className="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
            Architecting intelligent systems that pair hosted LLM reasoning with production full-stack engines, deep learning inference pipelines, and scalable AWS serverless infrastructure.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <Button href="#projects" size="lg">
              View Featured Projects
              <ArrowDown className="w-4 h-4 ml-1" />
            </Button>
            <Button href={PROFILE.resumePath} variant="outline" size="lg" isExternal>
              Download Resume
              <ArrowUpRight className="w-4 h-4 ml-1 opacity-70" />
            </Button>
            <Button href="#contact" variant="ghost" size="lg">
              Contact
            </Button>
          </div>

          {/* Core capability pills */}
          <div className="mt-10 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80 w-full grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400">
            <div>
              <span className="block text-zinc-900 dark:text-zinc-200 font-semibold">Generative AI</span>
              Structured Output & APIs
            </div>
            <div>
              <span className="block text-zinc-900 dark:text-zinc-200 font-semibold">Full-Stack</span>
              Next.js, Node, PostgreSQL
            </div>
            <div>
              <span className="block text-zinc-900 dark:text-zinc-200 font-semibold">Machine Learning</span>
              Vision, CNN & Speech WER
            </div>
            <div>
              <span className="block text-zinc-900 dark:text-zinc-200 font-semibold">Cloud Systems</span>
              AWS Lambda, DynamoDB, SAM
            </div>
          </div>
        </div>

        {/* Right Column: Carefully Positioned 3D Signature Object */}
        <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[420px] lg:h-[480px] flex items-center justify-center">
          <HeroScene />
          <div className="absolute bottom-2 text-center text-[10px] font-mono tracking-wider uppercase text-zinc-400 dark:text-zinc-500 pointer-events-none">
            [ Interactive Polyhedral Mesh &bull; Drag / Hover ]
          </div>
        </div>
      </div>

      {/* Small Minimal Scroll Indicator */}
      <div className="flex items-center justify-between pt-8 border-t border-zinc-100 dark:border-zinc-900 text-xs text-zinc-400 dark:text-zinc-500 font-mono">
        <span className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
          Chennai, India (IST)
        </span>
        <a
          href="#about"
          className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
          aria-label="Scroll to Section B: About"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
