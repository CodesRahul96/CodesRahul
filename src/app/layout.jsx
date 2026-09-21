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
    default: 'Rahul Misal — Full Stack & Android Developer | Freelancer in Pune, India',
    template: '%s | Rahul Misal — CodesRahul',
  },
  description: 'Rahul Misal (CodesRahul) is a top Full Stack Developer, Freelancer & Android App Developer based in Pune, Maharashtra, India. Specialized in high-performance MERN stack web applications, Next.js, and native Android apps (Kotlin, Jetpack Compose). Available for hire and freelance contracts.',
  keywords: [
    'Rahul Misal',
    'CodesRahul',
    'Full Stack Developer Pune',
    'Freelance Web Developer Pune',
    'Freelancer Pune',
    'Android Developer Pune',
    'Android App Developer Maharashtra',
    'Web Developer Pune',
    'Web Developer Maharashtra',
    'MERN Stack Developer Pune',
    'Full Stack Software Engineer India',
    'Freelance Android Developer India',
    'React Developer Pune',
    'Next.js Developer India',
    'Node.js Developer Pune',
    'Kotlin Developer Pune',
    'Mobile App Developer Pune',
    'Frontend Developer Pune',
    'Backend Engineer Pune',
    'Hire Full Stack Developer India',
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
    title: 'Rahul Misal — Full Stack Developer, Freelancer & Android App Dev in Pune, India',
    description: 'Rahul Misal (CodesRahul) is a Full Stack Developer, Freelancer & Android App Developer in Pune, Maharashtra, India building production MERN applications, Next.js systems, and Kotlin mobile apps.',
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
  verification: {
    google: 'jMdcUsLFgDXDPnCIoTOtCuX7FwhAEYZsMcrt16PdVvw',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://www.codesrahul.in/#person',
      name: 'Rahul Misal',
      alternateName: [
        'CodesRahul',
        'Rahul Misal Pune',
        'codesrahul96',
        'Rahul Developer',
        'Freelance Web Developer Pune',
        'Android Developer Pune',
      ],
      url: 'https://www.codesrahul.in',
      image: 'https://www.codesrahul.in/logo.png',
      jobTitle: [
        'Full-Stack Developer & Freelancer',
        'Android App Developer',
        'MERN Stack Engineer',
        'Technical SEO Engineer',
        'Senior Software Engineer'
      ],
      description: 'Rahul Misal is a top Full-Stack Developer, Freelancer, and Android App Developer in Pune, Maharashtra, India. He builds scalable MERN stack web applications, Next.js systems, and native Kotlin Android apps with enterprise security and top-tier SEO performance.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pune',
        addressRegion: 'Maharashtra',
        postalCode: '411001',
        addressCountry: 'India',
      },
      sameAs: [
        'https://github.com/CodesRahul96',
        'https://linkedin.com/in/codesrahul',
        'https://instagram.com/codes.rahul',
      ],
      knowsAbout: [
        'Full Stack Web Development',
        'Freelance Software Engineering',
        'MERN Stack (MongoDB, Express, React, Node.js)',
        'Android App Development',
        'Kotlin & Jetpack Compose',
        'Next.js 15 & React.js',
        'Technical SEO & Google Rank Optimization',
        'RESTful APIs & GraphQL',
        'Socket.io Realtime Architecture',
        'Tailwind CSS',
        'TypeScript',
        'HSTS Preload & Enterprise Web Security'
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.codesrahul.in/#website',
      url: 'https://www.codesrahul.in',
      name: 'CodesRahul',
      alternateName: 'Rahul Misal Portfolio — Top Freelancer, Full-Stack & Android Developer in Pune',
      description: 'Official developer portfolio of Rahul Misal (CodesRahul) — Full-Stack Developer, Freelance Web Developer, and Android Engineer in Pune, Maharashtra, India.',
      publisher: {
        '@id': 'https://www.codesrahul.in/#person',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.codesrahul.in/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who is the best freelance Full Stack & Android developer in Pune?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Rahul Misal (CodesRahul) is a premier freelance Full Stack Developer and Android Engineer based in Pune, Maharashtra, India. With 3+ years of experience and over 20 completed projects, Rahul specializes in production-ready MERN stack applications, modern Next.js websites, and high-performance native Android apps built with Kotlin.',
          },
        },
        {
          '@type': 'Question',
          name: 'What services does Rahul Misal offer as a freelance developer in Maharashtra?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Rahul Misal provides end-to-end software development services including custom MERN stack web applications, Next.js eCommerce/SaaS portals, native Android apps (Kotlin & Jetpack Compose), REST/Socket.IO API architectures, Technical SEO optimization for Google #1 rankings, and enterprise security hardening.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I hire Rahul Misal for web or Android app development in Pune or remotely?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can hire Rahul Misal directly through his website at codesrahul.in/contact, via email at codesrahul96@gmail.com, or on WhatsApp/Phone at +91 88051 59425. He is available for full-time engineering roles, freelance contracts, and startup consulting across Pune, India, and internationally.',
          },
        },
        {
          '@type': 'Question',
          name: 'What notable projects has Rahul Misal built?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Notable projects include UdemyWala (education platform with #1 Google ranking and SGE citation eligibility), TaskFlow (enterprise real-time Kanban system with Socket.IO & JWT), PlayNox Player (hardware-accelerated native Android video player in Kotlin/Compose), and Blogsify (MERN blogging platform).',
          },
        },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://www.codesrahul.in/#projects',
      name: 'Featured Software Engineering Projects by Rahul Misal',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'UdemyWala',
          description: 'High-performance course & coupon platform engineered for search dominance with Schema.org microdata, dynamic sitemaps, HSTS/CSP security, and SWR caching.',
          url: 'https://udemywala.xyz/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'TaskFlow',
          description: 'Enterprise productivity platform with Kanban boards, real-time collaboration via Socket.IO, JWT + Google OAuth, and hardened security architecture.',
          url: 'https://github.com/CodesRahul96/TaskFlow.git',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'PlayNox Player',
          description: 'High-performance native Android video player powered by MPV/libmpv with hardware acceleration, Material You dynamic colors, and gesture controls.',
          url: 'https://github.com/CodesRahul96/PlayNox.git',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Blogsify',
          description: 'MERN stack blogging platform with JWT authentication, rich text editing, and real-time community comments.',
          url: 'https://blogsify.vercel.app/',
        },
      ],
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
