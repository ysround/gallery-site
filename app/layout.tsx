import './globals.css'
import { ReactNode } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import Navigation from './components/Navigation'
import Sidebar from './components/Sidebar'
import { getAllCategories } from '@/utils/galleryData'

export const metadata: Metadata = {
  title: {
    default: 'Gallery Site',
    template: '%s | Gallery Site'
  },
  description: 'Discover and explore beautiful image galleries',
  keywords: ['gallery', 'images', 'photography', 'art'],
  openGraph: {
    title: 'Gallery Site',
    description: 'Discover and explore beautiful image galleries',
    url: 'https://your-domain.com',
    siteName: 'Gallery Site',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    title: 'Gallery Site',
    card: 'summary_large_image',
    site: '@yourtwitterhandle',
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
    shortcut: '/favicon.ico',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const categories = await getAllCategories();

  return (
    <html lang="en">
      <body>
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">Gallery Site</Link>
            <ul className="flex space-x-4">
              <li><Link href="/">Home</Link></li>
              {categories.map(category => (
                <li key={category.id}>
                  <Link href={`/category/${category.id}`}>{category.name}</Link>
                </li>
              ))}
              <li><Link href="/terms">利用規約</Link></li>
              <li><Link href="/disclaimer">免責事項</Link></li>
            </ul>
          </div>
        </nav>
        <main className="container mx-auto mt-8">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2023 Gallery Site. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link href="/terms" className="text-gray-300 hover:text-white">利用規約</Link>
              <Link href="/disclaimer" className="text-gray-300 hover:text-white">免責事項</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}