'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Category } from '@/types/gallery';

interface CategoryListProps {
  categories: Category[];
  isMobile: boolean;
}

export default function CategoryList({ categories, isMobile }: CategoryListProps) {
  const pathname = usePathname();

  const renderCategory = (category: Category, depth: number = 0) => {
    const isActive = pathname === `/category/${category.id}`;
    const paddingLeft = `${depth * 1}rem`;

    return (
      <li key={category.id} style={{ paddingLeft }}>
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
        {category.children && category.children.length > 0 && (
          <ul className="ml-4">
            {category.children.map(child => renderCategory(child, depth + 1))}
          </ul>
        )}
      </li>
    );
  };

  if (isMobile) {
    return (
      <div className="flex flex-nowrap overflow-x-auto pb-2">
        {categories.map(category => (
          <Link 
            key={category.id}
            href={`/category/${category.id}`}
            className={`flex-shrink-0 px-3 py-2 rounded-full text-sm font-medium mr-2 ${
              pathname === `/category/${category.id}`
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            } transition-colors duration-200 ease-in-out`}
          >
            {category.name}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <ul>
      {categories.map(category => renderCategory(category))}
    </ul>
  );
}