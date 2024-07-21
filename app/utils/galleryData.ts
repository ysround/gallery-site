import fs from 'fs';
import path from 'path';
import { Gallery } from '../types/gallery';

const dataDirectory = path.join(process.cwd(), 'public', 'data');

export function getAllGalleries(): Gallery[] {
  const filePath = path.join(dataDirectory, 'galleries.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const galleries: Gallery[] = JSON.parse(jsonData);
  return galleries;
}

export function getGalleryById(id: number): Gallery | undefined {
  const galleries = getAllGalleries();
  return galleries.find(gallery => gallery.id === id);
}