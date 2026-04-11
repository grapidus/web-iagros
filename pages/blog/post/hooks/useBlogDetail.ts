import { useRouter } from 'next/router';
import { useGetBlogBySlugQuery } from '../../api/blogApi';

export function useBlogDetail() {
  const router = useRouter();
  const slug = typeof router.query.slug === 'string' ? router.query.slug : '';

  const { data: blog, isLoading, isError } = useGetBlogBySlugQuery(slug, {
    skip: !slug,
  });

  return { blog, isLoading, isError, slug };
}
