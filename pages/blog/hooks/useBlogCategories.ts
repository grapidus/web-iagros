import { useGetBlogCategoriesQuery } from '../api/blogApi';
import { BlogCategoryLocal } from '../models/local/blog.local.model';

const ALL_OPTION: BlogCategoryLocal & { value: 'all' } = {
  id: 'all',
  name: 'Todos',
  slug: 'all',
  active: true,
  value: 'all',
};

export function useBlogCategories() {
  const { data, isLoading, isError } = useGetBlogCategoriesQuery();

  const categories = data
    ? [ALL_OPTION, ...data.map((cat) => ({ ...cat, value: cat.slug }))]
    : [ALL_OPTION];

  return { categories, isLoading, isError };
}
