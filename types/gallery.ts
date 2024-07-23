export interface Image {
  src: string;
  alt: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
}

export interface Gallery {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  images: Image[];
  categories: number[];
}