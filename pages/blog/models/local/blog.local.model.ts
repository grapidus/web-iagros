// Modelos que usa el frontend internamente (camelCase, tipado estricto)

export type BlogCategory = 'agricola' | 'pecuario' | 'tecnologia';

export interface BlogLocal {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: BlogCategory;
  author: string;
  publishedAt: string;
  readingTime: number;
}

export interface BlogListLocalResponse {
  data: BlogLocal[];
  total: number;
  page: number;
  pageSize: number;
}

export interface BlogListLocalParams {
  search?: string;
  category?: BlogCategory | 'all';
  page?: number;
  pageSize?: number;
}
