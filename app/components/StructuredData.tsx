import { Gallery } from '../types/gallery'

interface StructuredDataProps {
  gallery: Gallery
}

export default function StructuredData({ gallery }: StructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: gallery.title,
    description: gallery.description,
    image: gallery.coverImage,
    url: `https://your-domain.com/gallery/${gallery.id}`
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}