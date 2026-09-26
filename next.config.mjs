// =============================================================================
// PRIMARY DOMAIN CONFIGURATION
// To change your website URL in the future (e.g. to https://codesrahul.com):
// Option 1: Set NEXT_PUBLIC_BASE_URL in your Vercel Project Environment Variables.
// Option 2: Update the fallback URL below directly!
// =============================================================================
const PRIMARY_DOMAIN = (process.env.NEXT_PUBLIC_BASE_URL || 'https://www.codesrahul.in').replace(/\/$/, '');
const primaryHost = new URL(PRIMARY_DOMAIN).host;

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Bypass Vercel's /_next/image optimizer (free tier = 1000 req/month limit).
    // Images are served directly as static files from Vercel's CDN — no quota hit.
    unoptimized: true,
  },
  async redirects() {
    const redirectsList = [
      // 1. Auto-redirect from Vercel default domain to the primary domain
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'codesrahul.vercel.app',
          },
        ],
        destination: `${PRIMARY_DOMAIN}/:path*`,
        permanent: true,
      },
      // 2. Blog external redirects
      {
        source: '/blog',
        destination: 'https://blogsify.vercel.app/',
        permanent: false,
      },
      {
        source: '/blogs',
        destination: 'https://blogsify.vercel.app/',
        permanent: false,
      },
    ];

    // If PRIMARY_DOMAIN is ever changed to another URL (e.g., https://codesrahul.com),
    // automatically forward legacy custom domains (codesrahul.in & www.codesrahul.in) too
    if (primaryHost !== 'www.codesrahul.in' && primaryHost !== 'codesrahul.in') {
      redirectsList.unshift(
        {
          source: '/:path*',
          has: [{ type: 'host', value: 'www.codesrahul.in' }],
          destination: `${PRIMARY_DOMAIN}/:path*`,
          permanent: true,
        },
        {
          source: '/:path*',
          has: [{ type: 'host', value: 'codesrahul.in' }],
          destination: `${PRIMARY_DOMAIN}/:path*`,
          permanent: true,
        }
      );
    }

    return redirectsList;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com https://vitals.vercel-insights.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              `img-src 'self' data: blob: https: ${PRIMARY_DOMAIN}`,
              "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com https://*.vercel-analytics.com",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
