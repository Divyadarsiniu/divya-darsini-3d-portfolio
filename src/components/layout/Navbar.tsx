'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '@/data/profile';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Research', href: '#research' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/60 dark:border-zinc-800/60 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-sm sm:text-base font-semibold tracking-wider text-zinc-900 dark:text-zinc-100 uppercase transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 rounded-sm"
        >
          <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100 group-hover:scale-125 transition-transform" />
          {PROFILE.shortName}
        </Link>

        {/* Right: Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  isActive
                    ? 'text-zinc-950 dark:text-zinc-50 font-semibold bg-zinc-100 dark:bg-zinc-900'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/40'
                } focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500`}
              >
                {link.name}
              </a>
            );
          })}

          <a
            href={PROFILE.resumePath}
            download
            className="ml-2 inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Resume
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500"
          aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-200 dark:border-zinc-800 px-6 py-6 transition-all duration-200">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50 py-2 border-b border-zinc-100 dark:border-zinc-900"
              >
                {link.name}
              </a>
            ))}
            <a
              href={PROFILE.resumePath}
              download
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950"
            >
              Download Resume
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
