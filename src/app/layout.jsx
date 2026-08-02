import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import AppBackground from '../components/AppBackground';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from 'sonner';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://www.codesrahul.in'),
  title: {
    default: 'Rahul Misal — Full Stack Developer | React, Next.js & Node.js',
    template: '%s | Rahul Misal',
  },
  description: 'Rahul Misal is a Full Stack Software Engineer from Pune, India specializing in React, Next.js, Node.js, and MERN stack web applications. Available for full-time roles and freelance projects.',
  keywords: [
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js',
    'MERN Stack',
    'Frontend Engineer',
    'Backend Developer',
    'Rahul Misal',
    'CodesRahul',
    'Pune Developer',
    'Web Developer India',
  ],
  authors: [{ name: 'Rahul Misal', url: 'https://www.codesrahul.in' }],
  creator: 'Rahul Misal',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.codesrahul.in',
    title: 'Rahul Misal — Full Stack Developer | React, Next.js & Node.js',
    description: 'Rahul Misal is a Full Stack Software Engineer from Pune, India. Building high-performance web applications with React, Next.js, and Node.js.',
    siteName: 'CodesRahul',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rahul Misal — Full Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rahul Misal — Full Stack Developer | React, Next.js & Node.js',
    description: 'Full Stack Software Engineer from Pune, India. Building with React, Next.js & Node.js.',
    creator: '@codesrahul',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#050508] text-gray-200 antialiased selection:bg-amber-500 selection:text-black relative">
        <AppBackground />
        <div className="flex flex-col min-h-screen relative z-10">
          <Preloader />
          <Navbar />
          <main className="flex-grow pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto w-full">
            {children}
          </main>
          <Footer />
          <Toaster position="bottom-right" theme="dark" toastOptions={{ style: { background: '#050508', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' } }} />
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
