import './globals.css'
import { ReactNode } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import Navigation from './components/Navigation'
import Sidebar from './components/Sidebar'

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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header className="bg-gray-800 text-white p-4">
          <div className="container mx-auto">
            <Navigation />
          </div>
        </header>
        <div className="container mx-auto flex-grow flex flex-col md:flex-row">
          <main className="flex-grow p-4 w-full md:w-3/4">
            {children}
          </main>
          <aside className="w-full md:w-1/4 p-4 bg-gray-100">
            <Sidebar />
          </aside>
        </div>
        <footer className="bg-gray-800 text-white p-4">
          <div className="container mx-auto text-center">
            © 2024 Gallery Site. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}