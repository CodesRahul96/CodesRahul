export const metadata = {
  title: 'About Rahul Misal — Full Stack Engineer & Technical SEO Specialist',
  description: 'Background, engineering journey, and technical specializations of Rahul Misal — Full Stack Software Engineer and Technical SEO Specialist based in Pune, India. Specializing in Next.js, MERN stack, Core Web Vitals, and native Android development.',
  keywords: [
    'Rahul Misal Biography',
    'Full Stack Engineer Pune',
    'Technical SEO Specialist Pune',
    'MERN Stack Developer Experience',
    'Android Kotlin Engineer Pune',
    'CodesRahul About',
  ],
  alternates: {
    canonical: 'https://www.codesrahul.in/about',
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: 'https://www.codesrahul.in/about',
    title: 'About Rahul Misal — Full Stack Engineer & Technical SEO Specialist',
    description: 'Detailed background, technical skills, and engineering experience of Rahul Misal — Full Stack Software Engineer from Pune, India specializing in Next.js, Core Web Vitals, and Android development.',
    siteName: 'CodesRahul',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About Rahul Misal — Full Stack Engineer & Technical SEO Specialist',
      },
    ],
  },
};

const aboutBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.codesrahul.in',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'About',
      item: 'https://www.codesrahul.in/about',
    },
  ],
};

export default function AboutLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutBreadcrumb) }}
      />
      {children}
    </>
  );
}
