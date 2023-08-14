export default function robots() {
  return {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://vinaykulka.vercel.app/sitemap.xml',
  }
}
