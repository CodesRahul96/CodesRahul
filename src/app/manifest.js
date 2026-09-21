export default function manifest() {
  return {
    name: 'Rahul Misal — CodesRahul',
    short_name: 'CodesRahul',
    description: 'Portfolio & Software Engineering Services of Rahul Misal — Full Stack & Android Developer in Pune, India.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050508',
    theme_color: '#f59e0b',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable any',
      },
      {
        src: '/logo.png',
        sizes: '96x96',
        type: 'image/png',
      },
    ],
  };
}
