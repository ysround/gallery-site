'use client';

import Image from 'next/image';
import { useState } from 'react';
import Modal from '../../components/Modal';
import { Image as GalleryImage } from '@/types/gallery';

interface GalleryClientProps {
  images: GalleryImage[];
}

export default function GalleryClient({ images }: GalleryClientProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative w-full pb-[56.25%] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="contain"
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <Modal onClose={() => setSelectedImage(null)}>
          <div className="relative w-full h-[80vh]">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Modal>
      )}
    </>
  );
}