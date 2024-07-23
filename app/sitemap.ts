import { MetadataRoute } from 'next'
import { getAllGalleries } from '@/utils/galleryData'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const galleries = await getAllGalleries()

  const galleryEntries = galleries.map(gallery => ({
    url: `https://your-domain.com/gallery/${gallery.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://your-domain.com',
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1,
    },
    ...galleryEntries,
  ]
}