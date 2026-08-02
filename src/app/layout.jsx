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
    default: 'CodesRahul - Digital Craftsmanship',
    template: '%s | CodesRahul',
  },
  description: 'Rahul — Full Stack Web Developer. I engineer bespoke digital experiences that live at the intersection of minimal design and robust architecture.',
  keywords: ['Full Stack Developer', 'React Developer', 'Next.js', 'Frontend Engineer', 'Rahul Misal'],
  authors: [{ name: 'Rahul Misal' }],
  creator: 'Rahul Misal',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'CodesRahul - Digital Craftsmanship',
    description: 'Rahul — Full Stack Web Developer. I build modern, bespoke web apps.',
    siteName: 'CodesRahul',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodesRahul - Digital Craftsmanship',
    description: 'Rahul — Full Stack Web Developer. I build modern, bespoke web apps.',
    creator: '@codesrahul',
  },
  robots: {
    index: true,
    follow: true,
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
