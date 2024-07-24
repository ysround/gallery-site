'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Category } from '@/types/gallery';

interface CategoryListProps {
  categories: Category[];
}

export default function CategoryList({ categories }: CategoryListProps) {
  const pathname = usePathname();

  return (
    <ul>
      {categories.map(category => {
        const isActive = pathname === `/category/${category.id}`;
        return (
          <li key={category.id} className="mb-2">
            <Link 
              href={`/category/${category.id}`}
              className={`block p-2 rounded ${
                isActive 
                  ? 'bg-blue-500 text-white' 
                  : 'text-blue-600 hover:bg-blue-100'
              }`}
            >
              {category.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}