// Modelos que refleja exactamente lo que devuelve el backend

export interface BlogServer {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  published_at: string;   // snake_case del backend
  reading_time: number;   // snake_case del backend
}

export interface BlogListServerResponse {
  data: BlogServer[];
  total: number;
  page: number;
  page_size: number;      // snake_case del backend
}

export interface BlogListServerParams {
  search?: string;
  category?: string;
  page?: number;
  page_size?: number;     // snake_case del backend
}
