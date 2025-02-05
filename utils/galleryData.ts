import { Gallery, Category } from '@/types/gallery';
import path from 'path';
import fs from 'fs/promises';
import getConfig from 'next/config';


const { serverRuntimeConfig } = getConfig();

export async function getAllGalleries(): Promise<Gallery[]> {
  try {
    const filePath = path.join(serverRuntimeConfig.PROJECT_ROOT, 'public', 'data', 'galleries.json');
    const jsonData = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(jsonData);
    if (!Array.isArray(data)) {
      throw new Error('Galleries data is not an array');
    }
    return data;
  } catch (error) {
    console.error('Error fetching galleries:', error);
    return [];
  }
}

export async function getGalleryById(id: number): Promise<Gallery | undefined> {
  const allGalleries = await getAllGalleries();
  return allGalleries.find(gallery => gallery.id === id);
}

export async function getAllCategories(): Promise<Category[]> {
  try {
    const filePath = path.join(serverRuntimeConfig.PROJECT_ROOT, 'public', 'data', 'categories.json');
    const jsonData = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(jsonData);
    if (!Array.isArray(data)) {
      throw new Error('Categories data is not an array');
    }
    return buildCategoryHierarchy(data);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

function buildCategoryHierarchy(categories: Category[]): Category[] {
  const categoryMap = new Map<number, Category>();
  const rootCategories: Category[] = [];

  // First pass: Create a map of all categories
  categories.forEach(category => {
    categoryMap.set(category.id, { ...category, children: [] });
  });

  // Second pass: Build the hierarchy
  categories.forEach(category => {
    const categoryWithChildren = categoryMap.get(category.id)!;
    if (category.parentId === null) {
      rootCategories.push(categoryWithChildren);
    } else {
      const parentCategory = categoryMap.get(category.parentId);
      if (parentCategory) {
        parentCategory.children?.push(categoryWithChildren);
      }
    }
  });

  return rootCategories;
}

export async function getCategoryById(id: number): Promise<Category | undefined> {
  const allCategories = await getAllCategories();
  return allCategories.find(category => category.id === id);
}

export async function getGalleriesByCategory(categoryId: number): Promise<Gallery[]> {
  const allGalleries = await getAllGalleries();
  return allGalleries.filter(gallery => gallery.categories.includes(categoryId));
}
