export const metadata = {
  title: 'Projects & Engineering Showcase — Full Stack, Technical SEO & Android',
  description: 'Explore production-grade Next.js platforms, Google #1 ranked discovery engines, real-time collaboration tools, and native Android applications built by Rahul Misal (CodesRahul).',
  keywords: [
    'MERN Stack Projects',
    'Technical SEO Portfolio',
    'UdemyWala Google Rank 1',
    'TaskFlow Kanban',
    'Android Kotlin Apps',
    'CodesRahul Projects',
  ],
  alternates: {
    canonical: 'https://www.codesrahul.in/projects',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.codesrahul.in/projects',
    title: 'Projects & Engineering Showcase — Rahul Misal',
    description: 'Explore production Next.js platforms, Google #1 ranked web apps, and native Android applications engineered by Rahul Misal.',
    siteName: 'CodesRahul',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rahul Misal Engineering Projects Showcase',
      },
    ],
  },
};

const projectsBreadcrumb = {
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
      name: 'Projects',
      item: 'https://www.codesrahul.in/projects',
    },
  ],
};

export default function ProjectsLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsBreadcrumb) }}
      />
      {children}
    </>
  );
}
