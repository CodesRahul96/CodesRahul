import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import AppBackground from '../components/AppBackground';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from '../context/ThemeContext';
import ThemedToaster from '../components/ThemedToaster';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://www.codesrahul.in'),
  title: {
    default: 'Rahul Misal — Full Stack Software Engineer | MERN Stack & Android Developer',
    template: '%s | Rahul Misal — CodesRahul',
  },
  description: 'Rahul Misal is a Full Stack Software Engineer from Pune, India specializing in production MERN stack architectures (MongoDB, Express, React, Node.js), Next.js, and native Android app development (Kotlin, Jetpack Compose). Available for full-time roles & contract engineering.',
  keywords: [
    'Rahul Misal',
    'CodesRahul',
    'Full Stack Developer',
    'Full Stack Software Engineer',
    'MERN Stack Developer',
    'MERN Stack Developer Pune',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'Android Developer',
    'Android App Developer India',
    'Kotlin Developer',
    'Jetpack Compose',
    'React Native Developer',
    'Frontend Engineer',
    'Backend Engineer',
    'REST API Architecture',
    'Web Developer Pune',
    'Software Engineer India',
  ],
  authors: [{ name: 'Rahul Misal', url: 'https://www.codesrahul.in' }],
  creator: 'Rahul Misal',
  publisher: 'CodesRahul',
  alternates: {
    canonical: 'https://www.codesrahul.in',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.codesrahul.in',
    title: 'Rahul Misal — Full Stack Software Engineer | MERN & Android Apps',
    description: 'Rahul Misal is a Full Stack Software Engineer from Pune, India building scalable MERN stack platforms, Next.js web applications, and native Android apps with Kotlin.',
    siteName: 'CodesRahul',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rahul Misal — Full Stack & Android Software Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rahul Misal — Full Stack Software Engineer | MERN & Android',
    description: 'Full Stack Software Engineer from Pune, India building scalable MERN web applications and native Android apps.',
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'icon', url: '/logo.svg', type: 'image/svg+xml' },
    ],
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://www.codesrahul.in/#person',
      name: 'Rahul Misal',
      alternateName: ['CodesRahul', 'Rahul Misal Pune', 'codesrahul96'],
      url: 'https://www.codesrahul.in',
      image: 'https://www.codesrahul.in/logo.png',
      jobTitle: [
        'Full Stack Software Engineer',
        'MERN Stack Developer',
        'Android App Developer',
        'Frontend Engineer'
      ],
      description: 'Full Stack Software Engineer from Pune, India specializing in React, Next.js, Node.js, MERN stack web applications, and native Android development.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pune',
        addressRegion: 'Maharashtra',
        addressCountry: 'India',
      },
      sameAs: [
        'https://github.com/CodesRahul96',
        'https://linkedin.com/in/codesrahul',
        'https://instagram.com/codes.rahul',
      ],
      knowsAbout: [
        'Full Stack Development',
        'MERN Stack',
        'React.js',
        'Next.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Android Development',
        'Kotlin',
        'Jetpack Compose',
        'React Native',
        'Tailwind CSS',
        'TypeScript',
        'RESTful APIs',
        'Socket.io Realtime Systems'
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.codesrahul.in/#website',
      url: 'https://www.codesrahul.in',
      name: 'CodesRahul',
      alternateName: 'Rahul Misal Portfolio',
      description: 'Official portfolio of Rahul Misal — Full Stack Software Engineer & Android Developer based in Pune, India.',
      publisher: {
        '@id': 'https://www.codesrahul.in/#person',
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var isDark = saved
                    ? saved === 'dark'
                    : window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                    document.documentElement.style.colorScheme = 'dark';
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                    document.documentElement.style.colorScheme = 'light';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body suppressHydrationWarning className="bg-[#f8fafc] text-slate-900 dark:bg-[#050508] dark:text-gray-200 antialiased selection:bg-amber-500 selection:text-black relative transition-colors duration-300">
        <ThemeProvider>
          <AppBackground />
          <div className="flex flex-col min-h-screen relative z-10">
            <Preloader />
            <Navbar />
            <main className="flex-grow pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto w-full">
              {children}
            </main>
            <Footer />
            <ThemedToaster />
            <Analytics />
            <SpeedInsights />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
