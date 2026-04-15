import { createApi } from '@reduxjs/toolkit/query/react';
import { createIagrosBaseQuery } from '../../../lib/iagrosBaseQuery';
import {
  adaptBlogCategoryToLocal,
  adaptBlogListToLocal,
  adaptBlogToLocal
} from '../adapters/local/blog.local.adapter';
import { adaptParamsToServer } from '../adapters/server/blog.server.adapter';
import {
  BlogCategoryLocal,
  BlogListLocalParams,
  BlogListLocalResponse,
  BlogLocal
} from '../models/local/blog.local.model';
import {
  BlogCategoriesServerResponse,
  BlogListServerResponse,
  BlogServer
} from '../models/server/blog.server.model';

export const blogApi = createApi({
  baseQuery: createIagrosBaseQuery(process.env.NEXT_PUBLIC_API_URL),
  endpoints: (builder) => ({
    // GET /blogs — Listar artículos con filtros
    getBlogs: builder.query<BlogListLocalResponse, BlogListLocalParams>({
      query: (params) => ({
        url: '/blogs',
        method: 'GET',
        params: adaptParamsToServer(params),
        showOnErrorAlert: true,
        getData: (res: any) => ({ data: res.data, meta: res.meta })
      }),
      transformResponse: (raw: BlogListServerResponse) => {
        return adaptBlogListToLocal(raw);
      }
    }),

    // GET /blogs/:slug — Obtener un artículo por slug
    getBlogBySlug: builder.query<BlogLocal, string>({
      query: (slug) => ({
        method: 'GET',
        url: `/blogs/${slug}`,
        showOnErrorAlert: true
      }),
      transformResponse: (raw: BlogServer) => adaptBlogToLocal(raw)
    }),

    // GET /blog-categories — Obtener categorías
    getBlogCategories: builder.query<BlogCategoryLocal[], void>({
      query: () => ({
        method: 'GET',
        url: '/blog-categories',
        showOnErrorAlert: true
      }),
      transformResponse: (raw: BlogCategoriesServerResponse[]) => {
        return adaptBlogCategoryToLocal(raw);
      }
    })
  }),
  reducerPath: 'blogApi'
});

export const {
  useGetBlogsQuery,
  useGetBlogBySlugQuery,
  useGetBlogCategoriesQuery
} = blogApi;
