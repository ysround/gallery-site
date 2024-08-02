export interface Image {
  src: string;
  alt: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  parentId: number | null;
  children?: Category[];
}

export interface Gallery {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  images: Image[];
  categories: number[];
}