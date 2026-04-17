// Modelos que refleja exactamente lo que devuelve el backend

export interface BlogCategoryServer {
  id: string;
  name: string;
  slug: string;
}

export interface BlogServer {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  thumbnail: string;
  blogCategory: BlogCategoryServer;
  publishedAt: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  content?: string;
}

export interface BlogMetaServer {
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface BlogListServerResponse {
  data: BlogServer[];
  meta: BlogMetaServer;
}

export interface BlogListServerParams {
  search?: string;
  category?: string;
  page?: number;
  page_size?: number; // snake_case del backend
}

export interface BlogCategoriesServerResponse {
  id: string;
  name: string;
  slug: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}
