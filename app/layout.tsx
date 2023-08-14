import './globals.css'
import type { Metadata } from 'next'

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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
