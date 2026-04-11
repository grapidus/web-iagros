// Adapta datos del BACKEND → FRONTEND
// Se usa en transformResponse de RTK Query para normalizar lo que llega del servidor

import { BlogListLocalResponse, BlogLocal } from '../../models/local/blog.local.model';
import { BlogListServerResponse, BlogServer } from '../../models/server/blog.server.model';

export function adaptBlogToLocal(server: BlogServer): BlogLocal {
  return {
    id: server.id,
    slug: server.slug,
    title: server.title,
    excerpt: server.excerpt,
    content: server.content,
    image: server.image,
    category: server.category as BlogLocal['category'],
    author: server.author,
    publishedAt: server.published_at,
    readingTime: server.reading_time,
  };
}

export function adaptBlogListToLocal(server: BlogListServerResponse): BlogListLocalResponse {
  return {
    data: server.data.map(adaptBlogToLocal),
    total: server.total,
    page: server.page,
    pageSize: server.page_size,
  };
}
