'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Image as GalleryImage } from '@/types/gallery';

interface GalleryClientProps {
  images: GalleryImage[];
}

const IMAGES_PER_PAGE = 30;

export default function GalleryClient({ images }: GalleryClientProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastImage = currentPage * IMAGES_PER_PAGE;
  const indexOfFirstImage = indexOfLastImage - IMAGES_PER_PAGE;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="space-y-8">
        {currentImages.map((image, index) => (
          <div key={index} className="w-full">
            <Image
              src={image.src}
              alt={image.alt}
              width={1200}
              height={800}
              layout="responsive"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex justify-center space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded ${
                currentPage === page
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}