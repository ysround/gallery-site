import Link from 'next/link';
import Image from 'next/image';
import { Gallery } from '@/types/gallery';

interface GalleryListProps {
  galleries: Gallery[];
}

export default function GalleryList({ galleries }: GalleryListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {galleries.map((gallery) => (
        <Link key={gallery.id} href={`/gallery/${gallery.id}`}>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <div className="relative h-48">
              <Image
                src={gallery.coverImage}
                alt={`Cover image for ${gallery.title}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{gallery.title}</h2>
              <p className="text-gray-600 text-sm">{gallery.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}