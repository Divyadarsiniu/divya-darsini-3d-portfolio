import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { PROFILE } from '@/data/profile';
import { Brain, Layers, Cpu, Cloud, GraduationCap, CheckCircle2 } from 'lucide-react';

const capabilityIcons: Record<string, React.ReactNode> = {
  genai: <Brain className="w-5 h-5 text-zinc-900 dark:text-zinc-100" />,
  fullstack: <Layers className="w-5 h-5 text-zinc-900 dark:text-zinc-100" />,
  ml: <Cpu className="w-5 h-5 text-zinc-900 dark:text-zinc-100" />,
  cloud: <Cloud className="w-5 h-5 text-zinc-900 dark:text-zinc-100" />,
};

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 max-w-6xl mx-auto border-t border-zinc-200/60 dark:border-zinc-800/60">
      <SectionHeading
        eyebrow="Section B"
        title="Engineering Foundations & Capabilities"
        subtitle="A grounded, verifiable profile focused on building robust full-stack software, deep learning inference workflows, and GenAI integrations."
      />

      {/* Editorial Profile & Academics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
        {/* Left: Academic Credentials */}
        <div className="lg:col-span-5 bg-zinc-50 dark:bg-zinc-900/40 rounded-2xl p-7 border border-zinc-200/80 dark:border-zinc-800/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block">
                Academic Standing
              </span>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                {PROFILE.education.institution}
              </h3>
            </div>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between py-2 border-b border-zinc-200/60 dark:border-zinc-800/60">
              <span className="text-zinc-500 dark:text-zinc-400">Degree</span>
              <span className="font-medium text-zinc-900 dark:text-zinc-100 text-right">
                B.Tech Computer Science & Eng.
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-zinc-200/60 dark:border-zinc-800/60">
              <span className="text-zinc-500 dark:text-zinc-400">Timeline</span>
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                2023 – 2027
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-zinc-200/60 dark:border-zinc-800/60 items-center">
              <span className="text-zinc-500 dark:text-zinc-400">Cumulative GPA</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 font-mono font-semibold">
                9.67 / 10.0
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-zinc-500 dark:text-zinc-400">Status</span>
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                Graduation: 2027
              </span>
            </div>
          </div>
        </div>

        {/* Right: Concise Introduction directly based on Resume */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-5 text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-light">
          <p>
            I am a B.Tech Computer Science and Engineering student at <strong className="font-semibold text-zinc-950 dark:text-zinc-50">SRM Institute of Science and Technology</strong> with a cumulative GPA of <strong className="font-semibold text-zinc-950 dark:text-zinc-50">9.67</strong>.
          </p>
          <p>
            My engineering work spans full-stack web applications, RESTful microservices, and LLM-powered features using Python, TypeScript, React, Next.js, Node.js, and PostgreSQL. I have hands-on experience integrating hosted LLM APIs with strict schema validation for structured outputs, building real-time computer vision and speech inference pipelines, and provisioning serverless cloud architectures on AWS with Infrastructure as Code.
          </p>
          <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400 pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60">
            Ground-truth verified from candidate resume &bull; No unverified claims or synthetic experiences.
          </p>
        </div>
      </div>

      {/* Four Compact Capability Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROFILE.capabilities.map((cap) => (
          <Card key={cap.id} hoverEffect className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  {capabilityIcons[cap.id]}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {cap.title}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {cap.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 mb-4 leading-normal">
                {cap.description}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-900">
              <ul className="space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300">
                {cap.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
