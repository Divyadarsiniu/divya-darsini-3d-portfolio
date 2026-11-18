'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormData } from '@/lib/validation';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { PROFILE } from '@/data/profile';
import { Mail, Github, Linkedin, FileDown, Send, CheckCircle2, AlertCircle, ArrowUpRight, Loader2 } from 'lucide-react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState<string>('');
  const [mailtoFallbackUrl, setMailtoFallbackUrl] = useState<string>('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      honeypot: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setServerMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setServerMessage(result.message || 'Your message has been sent successfully.');
        if (result.mailtoFallback) {
          setMailtoFallbackUrl(result.mailtoFallback);
        }
        reset();
      } else {
        setSubmitStatus('error');
        setServerMessage(result.error || 'Failed to submit form. Please use the direct email link.');
      }
    } catch {
      setSubmitStatus('error');
      setServerMessage('Network connectivity issue. Please reach out directly via email.');
      const directMailto = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${data.subject}`
      )}&body=${encodeURIComponent(`Hi Divya,\n\n${data.message}\n\nFrom: ${data.name} (${data.email})`)}`;
      setMailtoFallbackUrl(directMailto);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 max-w-6xl mx-auto border-t border-zinc-200/60 dark:border-zinc-800/60">
      <SectionHeading
        eyebrow="Section H"
        title="Have an interesting problem to solve?"
        subtitle="Available for Junior Gen AI Engineer roles, full-stack systems engineering, and research collaborations."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Channels & Resume Download */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-7 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/80 space-y-5">
            <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Direct Contact & Professional Links
            </h3>

            {/* Email link */}
            <a
              href={`mailto:${PROFILE.email}`}
              className="flex items-center gap-3.5 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white transition-colors group"
            >
              <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 group-hover:scale-105 transition-transform">
                <Mail className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
              </div>
              <div className="truncate">
                <span className="block text-[11px] font-mono text-zinc-400">Email Address</span>
                <span className="truncate">{PROFILE.email}</span>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white transition-colors group"
            >
              <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 group-hover:scale-105 transition-transform">
                <Github className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
              </div>
              <div>
                <span className="block text-[11px] font-mono text-zinc-400">GitHub</span>
                <span className="flex items-center gap-1">
                  github.com/Divyadarsiniu <ArrowUpRight className="w-3 h-3 opacity-60" />
                </span>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white transition-colors group"
            >
              <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 group-hover:scale-105 transition-transform">
                <Linkedin className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
              </div>
              <div>
                <span className="block text-[11px] font-mono text-zinc-400">LinkedIn</span>
                <span className="flex items-center gap-1">
                  divya-darsini-u-832b602ab <ArrowUpRight className="w-3 h-3 opacity-60" />
                </span>
              </div>
            </a>

            {/* Resume Download CTA */}
            <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60">
              <a
                href={PROFILE.resumePath}
                download
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 font-medium text-sm hover:opacity-90 transition-opacity"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Official Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: React Hook Form with Zod and Honeypot */}
        <div className="lg:col-span-7 bg-white dark:bg-zinc-950 p-7 sm:p-9 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 shadow-xs">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
            {/* Honeypot field for anti-bot spam protection */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Leave blank</label>
              <input
                id="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                {...register('honeypot')}
              />
            </div>

            {/* Grid for Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  {...register('name')}
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:focus:ring-zinc-400 ${
                    errors.name
                      ? 'border-red-500 bg-red-50/20'
                      : 'border-zinc-300 dark:border-zinc-800'
                  }`}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500 font-mono">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  {...register('email')}
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:focus:ring-zinc-400 ${
                    errors.email
                      ? 'border-red-500 bg-red-50/20'
                      : 'border-zinc-300 dark:border-zinc-800'
                  }`}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500 font-mono">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
              >
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Inquiry topic or project opportunity"
                {...register('subject')}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:focus:ring-zinc-400 ${
                  errors.subject
                    ? 'border-red-500 bg-red-50/20'
                    : 'border-zinc-300 dark:border-zinc-800'
                }`}
                aria-invalid={!!errors.subject}
              />
              {errors.subject && (
                <p className="mt-1 text-xs text-red-500 font-mono">
                  {errors.subject.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Describe your inquiry, project scope, or opportunity..."
                {...register('message')}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:focus:ring-zinc-400 ${
                  errors.message
                    ? 'border-red-500 bg-red-50/20'
                    : 'border-zinc-300 dark:border-zinc-800'
                }`}
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500 font-mono">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submission Status Message */}
            {submitStatus === 'success' && (
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                <div>
                  <p className="font-semibold">{serverMessage}</p>
                  {mailtoFallbackUrl && (
                    <a
                      href={mailtoFallbackUrl}
                      className="underline font-mono text-[11px] block mt-1 hover:text-emerald-900"
                    >
                      Click here to also send a copy directly from your email client &rarr;
                    </a>
                  )}
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-xs text-red-800 dark:text-red-200 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                <div>
                  <p className="font-semibold">{serverMessage}</p>
                  {mailtoFallbackUrl && (
                    <a
                      href={mailtoFallbackUrl}
                      className="underline font-mono text-[11px] block mt-1 font-semibold"
                    >
                      Use mailto fallback to send your message &rarr;
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full sm:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    <span>Verifying & Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    <span>Send Message</span>
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
