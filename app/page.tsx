import { getAllGalleries } from './utils/galleryData';
import GalleryList from './components/GalleryList';

export default function Home() {
  const galleries = getAllGalleries();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome to our Gallery</h1>
      <GalleryList galleries={galleries} />
    </div>
  );
}