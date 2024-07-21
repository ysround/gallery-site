'use client'

import { useState } from 'react'
import Link from 'next/link'

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
          ) : (
            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
          )}
        </svg>
      </button>
      {isMenuOpen && (
        <ul className="absolute top-full left-0 right-0 bg-gray-800 p-4">
          <li><Link href="/" className="block py-2 hover:text-gray-300">Home</Link></li>
          <li><Link href="/categories" className="block py-2 hover:text-gray-300">Categories</Link></li>
          <li><Link href="/favorites" className="block py-2 hover:text-gray-300">Favorites</Link></li>
          <li><Link href="/about" className="block py-2 hover:text-gray-300">About</Link></li>
        </ul>
      )}
    </div>
  )
}

export default MobileMenu