import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Research } from '@/components/sections/Research';
import { Achievements } from '@/components/sections/Achievements';
import { Education } from '@/components/sections/Education';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 antialiased selection:bg-zinc-900 selection:text-white dark:selection:bg-zinc-100 dark:selection:text-zinc-950">
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
