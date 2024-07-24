import './globals.css'
import { Metadata } from 'next'
import Link from 'next/link'
import { getAllCategories, getCategoryGalleryCounts } from '@/utils/galleryData'
import CategoryList from './components/CategoryList'

export const metadata: Metadata = {
  title: 'Gallery Site',
  description: 'Explore beautiful image galleries',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const categories = await getAllCategories();
  const categoryCounts = await getCategoryGalleryCounts();

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">Gallery Site</Link>
            <ul className="flex space-x-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/terms">利用規約</Link></li>
              <li><Link href="/disclaimer">免責事項</Link></li>
            </ul>
          </div>
        </nav>
        <div className="container mx-auto flex-grow flex flex-col md:flex-row">
          <main className="w-full md:w-3/4 p-4 order-2 md:order-1">
            {children}
          </main>
          <aside className="w-full md:w-1/4 p-4 bg-gray-100 order-1 md:order-2">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <CategoryList categories={categories} counts={categoryCounts} />
          </aside>
        </div>
        <footer className="bg-gray-800 text-white p-4">
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