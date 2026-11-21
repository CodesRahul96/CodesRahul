import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import AppBackground from '../components/AppBackground';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from '../context/ThemeContext';
import ThemedToaster from '../components/ThemedToaster';
import PortfolioChatbot from '../components/PortfolioChatbot';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://www.codesrahul.in'),
  title: {
    default: 'Rahul Misal — Full Stack Developer & Technical SEO Specialist | Pune, India',
    template: '%s | Rahul Misal — CodesRahul',
  },
  description: 'Rahul Misal (CodesRahul) is a Full Stack Developer, Technical SEO Specialist & Android Engineer in Pune, Maharashtra, India. Expert in Next.js, MERN stack, Core Web Vitals (95+ score), Schema.org microdata, and high-performance native apps.',
  keywords: [
    'Rahul Misal',
    'CodesRahul',
    'Full Stack Developer Pune',
    'Technical SEO Specialist Pune',
    'SEO Executive Pune',
    'Freelance Web Developer Pune',
    'Freelancer Pune',
    'Core Web Vitals Expert India',
    'Next.js Developer Pune',
    'React Developer Pune',
    'Shopify Developer Pune',
    'Android Developer Pune',
    'Android App Developer Maharashtra',
    'Web Developer Deccan Pune',
    'MERN Stack Developer Pune',
    'Full Stack Software Engineer India',
    'Freelance Android Developer India',
    'Node.js Developer Pune',
    'Schema.org SEO Specialist India',
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
    title: 'Rahul Misal — Full Stack Developer & Technical SEO Specialist in Pune, India',
    description: 'Rahul Misal (CodesRahul) is a Full Stack Developer, Technical SEO Specialist & Android Engineer in Pune, Maharashtra, India building high-performance Next.js systems, Google #1 ranked platforms, and native Android apps.',
    siteName: 'CodesRahul',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rahul Misal — Full Stack Engineer & Technical SEO Specialist Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rahul Misal — Full Stack Engineer & Technical SEO Specialist',
    description: 'Full Stack Software Engineer & SEO Specialist from Pune, India building scalable Next.js web applications, Google #1 ranked platforms, and native Android apps.',
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
      { url: '/favicon.ico', sizes: '48x48 32x32 16x16', type: 'image/x-icon' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { url: '/logo.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  verification: {
    google: 'jMdcUsLFgDXDPnCIoTOtCuX7FwhAEYZsMcrt16PdVvw',
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Pune',
    'geo.position': '18.5204;73.8567',
    'ICBM': '18.5204, 73.8567',
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
        'Technical SEO Specialist Pune',
        'Android Developer Pune',
      ],
      url: 'https://www.codesrahul.in',
      image: 'https://www.codesrahul.in/logo.png',
      jobTitle: [
        'Full-Stack Developer & Freelancer',
        'Technical SEO Specialist',
        'Android App Developer',
        'MERN Stack Engineer',
        'Performance & Core Web Vitals Consultant'
      ],
      description: 'Rahul Misal is a Full-Stack Developer, Technical SEO Specialist, and Android App Developer in Pune, Maharashtra, India. He builds scalable MERN stack web applications, Next.js systems, and native Kotlin Android apps with enterprise security, 95+ Core Web Vitals, and top-tier Google search performance.',
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
        'https://blogsify.vercel.app/',
      ],
      knowsAbout: [
        'Full Stack Web Development',
        'Next.js 14 & Next.js 15 App Router',
        'React.js',
        'Technical SEO & Google #1 Rank Optimization',
        'Structured Schema.org JSON-LD Microdata',
        'Core Web Vitals (LCP, INP, CLS)',
        'Node.js & Express REST APIs',
        'MongoDB & PostgreSQL Databases',
        'Shopify & Headless E-Commerce Development',
        'Native Android Development (Kotlin, Jetpack Compose)',
        'Socket.io Realtime Architecture',
        'Tailwind CSS',
        'TypeScript',
        'HSTS Preload & Enterprise Web Security'
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://www.codesrahul.in/#service',
      name: 'CodesRahul — Web Development & Technical SEO Services',
      url: 'https://www.codesrahul.in',
      founder: {
        '@id': 'https://www.codesrahul.in/#person',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pune',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN',
      },
      areaServed: [
        { '@type': 'City', name: 'Pune' },
        { '@type': 'State', name: 'Maharashtra' },
        { '@type': 'Country', name: 'India' },
        { '@type': 'AdministrativeArea', name: 'Worldwide (Remote)' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Software Engineering & SEO Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom Next.js & Full-Stack Web Development',
              description: 'End-to-end web applications built with Next.js App Router, React, Node.js, and modern relational/document databases.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Technical SEO Audits & Structured Data Implementation',
              description: 'Comprehensive crawl error remediation, Google Search Console indexing fixes, and JSON-LD Schema.org microdata.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Core Web Vitals & PageSpeed Performance Optimization',
              description: 'Deep optimization for LCP, CLS, INP, and TTFB achieving 90+ to 100/100 Google Lighthouse scores.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Native Android Mobile Application Engineering',
              description: 'Native Android apps engineered in Kotlin using Jetpack Compose, Material You UI, and hardware-accelerated playback.',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.codesrahul.in/#website',
      url: 'https://www.codesrahul.in',
      name: 'CodesRahul',
      alternateName: 'Rahul Misal Portfolio — Top Freelancer, Full-Stack & Technical SEO Specialist in Pune',
      description: 'Official developer portfolio of Rahul Misal (CodesRahul) — Full-Stack Developer, Freelance Web Developer, Technical SEO Specialist, and Android Engineer in Pune, Maharashtra, India.',
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
          name: 'Looking for a Full Stack Developer or Technical SEO Specialist in Pune?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Rahul Misal (CodesRahul) is a Pune-based Full Stack and Android Software Engineer with 2.5+ years of experience delivering MERN stack web applications, Next.js portals, and native Kotlin mobile apps. Available for on-site meetings in Pune (Deccan, Baner, Hinjewadi) and remote contracts across Maharashtra, India, and worldwide.',
          },
        },
        {
          '@type': 'Question',
          name: 'What technologies and engineering domains do you specialize in?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Rahul's core engineering stack includes Next.js 15, React, Node.js, Express, MongoDB, TypeScript, Tailwind CSS, and native Android (Kotlin, Jetpack Compose), backed by enterprise HTTP security (HSTS, CSP) and Technical SEO audits.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide Technical SEO and Core Web Vitals optimization?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Rahul executes deep technical SEO audits, structured Schema.org microdata (JSON-LD), crawl budget optimization, and Core Web Vitals speed tuning (LCP < 1.5s, CLS < 0.05, INP < 50ms) to secure #1 organic Google rankings, proven by platforms like UdemyWala and Samrat Megastore.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you handle Shopify and E-Commerce storefront engineering?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. Rahul provides custom Shopify theme modifications, Liquid bug fixes, headless Next.js e-commerce storefronts, and Google Merchant product structured data integration to maximize checkout conversion and mobile performance.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does the freelance project workflow and delivery timeline work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Projects begin with clear scoping and milestone planning, followed by rapid sprint development with staging previews. Code is delivered with clean git commits, comprehensive documentation, zero-downtime deployments, and GST-ready invoices.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I hire Rahul Misal for my project or company?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Reach out directly via the Contact page at codesrahul.in/contact, email codesrahul96@gmail.com, or message on WhatsApp at +91 88051 59425. Rahul is an immediate joiner available for full-time positions, freelance contracts, and technical consulting.',
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
          description: 'High-performance course & coupon platform engineered for search dominance with Schema.org microdata, dynamic sitemaps, HSTS/CSP security, and SWR caching. Ranked #1 globally on Google Search.',
          url: 'https://udemywala.xyz/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'TaskFlow',
          description: 'Enterprise productivity platform with Kanban boards, real-time collaboration via Socket.IO, JWT + Google OAuth, and hardened security architecture.',
          url: 'https://taskflow.indevs.in/',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Samrat Megastore',
          description: 'E-commerce platform technical SEO audit, Schema.org product structured data integration, and Google Search Console indexing resolution.',
          url: 'https://samratmegastore.com/',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'ROMs Daniel Springer',
          description: 'Technical SEO improvements, Core Web Vitals speed optimization, and React state hydration bug fixing for Austrian client.',
          url: 'https://roms.danielspringer.at/',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'PlayNox Player',
          description: 'High-performance native Android video player powered by MPV/libmpv with hardware acceleration, Material You dynamic colors, and gesture controls.',
          url: 'https://github.com/CodesRahul96/PlayNox.git',
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
                  var saved = localStorage.getItem('app-theme') || localStorage.getItem('theme') || 'system';
                  var isDark = saved === 'dark' || (saved === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  var root = document.documentElement;
                  if (isDark) {
                    root.classList.add('dark');
                    root.classList.remove('light');
                    root.style.colorScheme = 'dark';
                  } else {
                    root.classList.remove('dark');
                    root.classList.add('light');
                    root.style.colorScheme = 'light';
                  }
                  var meta = document.querySelector('meta[name="theme-color"]');
                  var color = isDark ? '#050508' : '#f8fafc';
                  if (!meta) {
                    meta = document.createElement('meta');
                    meta.setAttribute('name', 'theme-color');
                    document.head.appendChild(meta);
                  }
                  meta.setAttribute('content', color);
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
            <PortfolioChatbot />
            <Analytics />
            <SpeedInsights />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
