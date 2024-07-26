import './globals.css'
import { Metadata } from 'next'
import Link from 'next/link'
import { getAllCategories } from '@/utils/galleryData'
import CategoryList from '@/app/components/CategoryList'
import ScrollToTopButton from '@/app/components/ScrollToTopButton'

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

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">Gallery Site</Link>
          </div>
        </nav>
        <div className="container mx-auto flex-grow flex flex-col md:flex-row">
          {/* モバイル用カテゴリーリスト */}
          <div className="md:hidden w-full p-4 bg-gray-100 overflow-x-auto">
            <CategoryList categories={categories} isMobile={true} />
          </div>
          {/* メインコンテンツ */}
          <main className="w-full md:w-3/4 p-4 order-2 md:order-1">
            {children}
          </main>
          {/* PC用サイドバー */}
          <aside className="hidden md:block w-full md:w-1/4 p-4 bg-gray-100 order-1 md:order-2">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <CategoryList categories={categories} isMobile={false} />
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
        <ScrollToTopButton />
      </body>
    </html>
  )
}