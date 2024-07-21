import { MetadataRoute } from 'next'
import { mockGalleries } from './data/mockGalleries'

export default function sitemap(): MetadataRoute.Sitemap {
  const galleries = mockGalleries.map(gallery => ({
    url: `https://your-domain.com/gallery/${gallery.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [
    {
      url: 'https://your-domain.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...galleries,
  ]
}