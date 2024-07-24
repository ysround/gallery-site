'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Category } from '@/types/gallery';

interface CategoryListProps {
  categories: Category[];
  counts: Record<number, number>;
}

export default function CategoryList({ categories, counts }: CategoryListProps) {
  const pathname = usePathname();

  return (
    <ul>
      {categories.map(category => {
        const isActive = pathname === `/category/${category.id}`;
        const count = counts[category.id] || 0;
        return (
          <li key={category.id} className="mb-2">
            <Link 
              href={`/category/${category.id}`}
              className={`flex justify-between items-center p-2 rounded ${
                isActive 
                  ? 'bg-blue-500 text-white' 
                  : 'text-blue-600 hover:bg-blue-100'
              }`}
            >
              <span>{category.name}</span>
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                {count}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}