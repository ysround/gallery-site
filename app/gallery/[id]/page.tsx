import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { getGalleryById, getCategoryById } from '@/utils/galleryData';
import GalleryClient from './GalleryClient';
import { Category } from '@/types/gallery';
import Breadcrumb from '../../components/Breadcrumb';

interface GalleryPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: GalleryPageProps): Promise<Metadata> {
  const galleryId = parseInt(params.id);
  const gallery = await getGalleryById(galleryId);

  if (!gallery) {
    return {
      title: 'Gallery Not Found',
    };
  }

  return {
    title: gallery.title,
    description: gallery.description,
  };
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const galleryId = parseInt(params.id);
  const gallery = await getGalleryById(galleryId);

  if (!gallery) {
    return <div>Gallery not found</div>;
  }

  const categoryPromises = gallery.categories.map(getCategoryById);
  const categories = (await Promise.all(categoryPromises)).filter((category): category is Category => category !== undefined);

  const breadcrumbItems = [
    { label: 'Galleries', href: '/' },
    { label: gallery.title, href: `/gallery/${gallery.id}` },
  ];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      <div className="relative w-full aspect-w-16 aspect-h-9 mb-6">
        <Image
          src={gallery.coverImage}
          alt={`Cover image for ${gallery.title}`}
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          quality={85}
          priority={true}
          className="rounded-lg"
        />
      </div>
      <h1 className="text-3xl font-bold mb-4">{gallery.title}</h1>
      <p className="mb-4">{gallery.description}</p>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Categories:</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <Link key={category.id} href={`/category/${category.id}`}>
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <GalleryClient images={gallery.images} />
    </div>
  );
}