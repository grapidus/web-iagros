// Adapta datos del BACKEND → FRONTEND
// Se usa en transformResponse de RTK Query para normalizar lo que llega del servidor

import {
  BlogCategoryLocal,
  BlogListLocalResponse,
  BlogLocal
} from '../../models/local/blog.local.model';
import {
  BlogCategoriesServerResponse,
  BlogListServerResponse,
  BlogServer
} from '../../models/server/blog.server.model';

export function adaptBlogToLocal(server: BlogServer): BlogLocal {
  return {
    id: server.id,
    slug: server.slug,
    title: server.title,
    excerpt: server.shortDescription,
    thumbnail: server.thumbnail,
    category: server.blogCategory.name,
    categorySlug: server.blogCategory.slug,
    publishedAt: server.publishedAt,
    ...(server.content !== undefined && { content: server.content })
  };
}

export function adaptBlogListToLocal(server: BlogListServerResponse): BlogListLocalResponse {
  return {
    data: server.data.map(adaptBlogToLocal),
    total: server.meta.total,
    page: server.meta.page,
    pageSize: server.meta.pageSize,
    totalPages: server.meta.totalPages
  };
}

export function adaptBlogCategoryToLocal(
  server: BlogCategoriesServerResponse[]
): BlogCategoryLocal[] {
  return server.map((cat) => ({
    id: cat.id,
    name: cat.name,
    slug: cat.slug,
    active: cat.active
  }));
}
