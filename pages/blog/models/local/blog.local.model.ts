// Modelos que usa el frontend internamente (camelCase, tipado estricto)

export type BlogCategory = string;

export interface BlogCategoryLocal {
  id: string;
  name: string;
  slug: string;
  active: boolean;
}

export interface BlogLocal {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  category: BlogCategory;
  categorySlug: string;
  publishedAt: string;
  author?: string;
  content?: string;
}

export interface BlogListLocalResponse {
  data: BlogLocal[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface BlogListLocalParams {
  search?: string;
  category?: BlogCategory | 'all';
  page?: number;
  pageSize?: number;
}
