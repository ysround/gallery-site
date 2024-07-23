import Link from 'next/link';
import Image from 'next/image';
import { Gallery } from '../../types/gallery';

interface GalleryListProps {
  galleries: Gallery[];
}

export default function GalleryList({ galleries }: GalleryListProps) {
  if (!galleries || galleries.length === 0) {
    return <p>No galleries found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {galleries.map((gallery) => (
        <Link key={gallery.id} href={`/gallery/${gallery.id}`}>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <div className="relative w-full pt-[75%]"> {/* 4:3 アスペクト比 */}
              <Image
                src={gallery.coverImage}
                alt={`Cover image for ${gallery.title}`}
                layout="fill"
                objectFit="cover"
                className="absolute top-0 left-0 w-full h-full"
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