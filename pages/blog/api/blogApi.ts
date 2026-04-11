import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { adaptBlogListToLocal, adaptBlogToLocal } from '../adapters/local/blog.local.adapter';
import { adaptParamsToServer } from '../adapters/server/blog.server.adapter';
import { BlogListLocalParams, BlogListLocalResponse, BlogLocal } from '../models/local/blog.local.model';
import { BlogListServerResponse, BlogServer } from '../models/server/blog.server.model';

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api',
  }),
  endpoints: (builder) => ({

    // GET /blogs — recibe params locales, envía params del servidor, devuelve modelo local
    getBlogs: builder.query<BlogListLocalResponse, BlogListLocalParams>({
      query: (params) => ({
        url: '/blogs',
        params: adaptParamsToServer(params),        // local → server
      }),
      transformResponse: (raw: BlogListServerResponse) =>
        adaptBlogListToLocal(raw),                  // server → local
    }),

    // GET /blogs/:slug — devuelve modelo local
    getBlogBySlug: builder.query<BlogLocal, string>({
      query: (slug) => `/blogs/${slug}`,
      transformResponse: (raw: BlogServer) =>
        adaptBlogToLocal(raw),                      // server → local
    }),

  }),
});

export const { useGetBlogsQuery, useGetBlogBySlugQuery } = blogApi;
