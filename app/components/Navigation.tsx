// これはサーバーコンポーネントのまま
import Link from 'next/link'
import MobileMenu from './MobileMenu'

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">Gallery Site</Link>
      <div className="hidden md:flex md:space-x-4">
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <Link href="/categories" className="hover:text-gray-300">Categories</Link>
        <Link href="/favorites" className="hover:text-gray-300">Favorites</Link>
        <Link href="/about" className="hover:text-gray-300">About</Link>
      </div>
      <MobileMenu />
    </nav>
  )
}

export default Navigation