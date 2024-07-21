import Image from 'next/image';
import { Metadata, ResolvingMetadata } from 'next'
import { getGalleryById } from '../../utils/galleryData';
import GalleryClient from './GalleryClient';

interface GalleryPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata(
  { params }: GalleryPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = parseInt(params.id);
  const gallery = getGalleryById(id);

  if (!gallery) {
    return {
      title: 'Gallery Not Found',
    };
  }

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: gallery.title,
    description: gallery.description,
    openGraph: {
      title: gallery.title,
      description: gallery.description,
      images: [
        {
          url: gallery.coverImage,
          width: 1200,
          height: 630,
          alt: gallery.title,
        },
        ...previousImages
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: gallery.title,
      description: gallery.description,
      images: [gallery.coverImage],
    },
  }
}

export default function GalleryPage({ params }: GalleryPageProps) {
  const gallery = getGalleryById(parseInt(params.id));

  if (!gallery) {
    return <div>Gallery not found</div>;
  }

  return (
    <div>
      <div className="relative w-full h-64 mb-6">
        <Image
          src={gallery.coverImage}
          alt={`Cover image for ${gallery.title}`}
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
        />
      </div>
      <h1 className="text-3xl font-bold mb-4">{gallery.title}</h1>
      <p className="mb-6">{gallery.description}</p>
      
      <GalleryClient images={gallery.images} />
    </div>
  );
}