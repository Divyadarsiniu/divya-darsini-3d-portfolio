import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { PROFILE } from '@/data/profile';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `${PROFILE.name} | Junior Gen AI & Full-Stack Engineer`,
  description: `${PROFILE.name} - B.Tech CSE at SRM Institute of Science and Technology (CGPA 9.67). Specializing in Generative AI, Full-Stack Development, Machine Learning, and Cloud Systems.`,
  keywords: [
    'Divya Darsini',
    'Divya Darsini U',
    'Gen AI Engineer',
    'Full Stack Engineer',
    'Machine Learning',
    'SRMIST',
    'Next.js Portfolio',
    'Whisper',
    'OpenAI API',
    'Serverless AWS',
  ],
  authors: [{ name: PROFILE.name, url: PROFILE.github }],
  creator: PROFILE.name,
  openGraph: {
    title: `${PROFILE.name} | Gen AI & Full-Stack Engineer`,
    description: PROFILE.tagline,
    url: 'https://divyadarsiniu.vercel.app',
    siteName: `${PROFILE.name} Portfolio`,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PROFILE.name} | Gen AI & Full-Stack Engineer`,
    description: PROFILE.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
