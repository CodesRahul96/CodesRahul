export const metadata = {
  title: 'Contact Rahul Misal — Hire Full Stack & Technical SEO Specialist in Pune',
  description: 'Initiate a project, hire for full-time engineering roles, or discuss freelance contracts with Rahul Misal — Full Stack Software Engineer and Technical SEO Specialist based in Pune, India.',
  keywords: [
    'Hire Full Stack Developer Pune',
    'Hire Technical SEO Specialist Pune',
    'Hire MERN Stack Developer Pune',
    'Hire Android Developer',
    'Contact CodesRahul',
  ],
  alternates: {
    canonical: 'https://www.codesrahul.in/contact',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.codesrahul.in/contact',
    title: 'Contact Rahul Misal — Hire Full Stack & SEO Specialist in Pune',
    description: 'Get in touch with Rahul Misal for software engineering, technical SEO audits, and freelance contracts in Pune, India or remote worldwide.',
    siteName: 'CodesRahul',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact Rahul Misal — CodesRahul',
      },
    ],
  },
};

const contactBreadcrumb = {
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
      name: 'Contact',
      item: 'https://www.codesrahul.in/contact',
    },
  ],
};

export default function ContactLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactBreadcrumb) }}
      />
      {children}
    </>
  );
}
