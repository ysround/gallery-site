export interface Image {
  src: string;
  alt: string;
}

export interface Gallery {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  images: Image[];
}