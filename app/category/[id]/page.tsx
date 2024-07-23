import { Metadata } from 'next';
import { getCategoryById, getGalleriesByCategory } from '@/utils/galleryData';
import GalleryList from '../../components/GalleryList';

interface CategoryPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categoryId = parseInt(params.id);
  const category = await getCategoryById(categoryId);

  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }

  return {
    title: `${category.name} Galleries`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categoryId = parseInt(params.id);
  const category = await getCategoryById(categoryId);
  const galleries = await getGalleriesByCategory(categoryId);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{category.name} Galleries</h1>
      <p className="mb-6">{category.description}</p>
      <GalleryList galleries={galleries} />
    </div>
  );
}