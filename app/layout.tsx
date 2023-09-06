import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'words',
  description: 'Showcase of Skills',
  keywords: [
    'Pagination',
    'Words',
    'Next.js 13',
    'Tailwind CSS',
    'Supabase integration',
    'Custom fonts in web design',
    'Pagination implementation for improved user experience',
    'Infinite scroll feature for seamless content browsing',
    'Responsive web design with Next.js and Tailwind CSS',
    'Fast-loading website using Next.js and Supabase database',
  ],
  openGraph: {
    images: ['https://words-livid.vercel.app/og.jpg'],
    description: 'Infinite scroll feature for seamless content browsing',
    type: 'website',
    url: 'https://words-livid.vercel.app',
    title: 'words-livid',
  },
  twitter: {
    images: ['https://words-livid.vercel.app/og.jpg'],
    description: 'Infinite scroll feature for seamless content browsing',
    card: 'summary_large_image',
    site: 'https://words-livid.vercel.app',
    title: 'Infinite scroll feature in Next js 13 using server actions.',
    creator: 'Jackx',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
