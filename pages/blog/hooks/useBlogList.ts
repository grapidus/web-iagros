import { useEffect, useState } from 'react';
import { useGetBlogsQuery } from '../api/blogApi';
import { useBlogStore } from '../store/useBlogStore';

const PAGE_SIZE = 9;

export function useBlogList() {
  const { search, category, page } = useBlogStore();
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 350);
    return () => clearTimeout(timer);
  }, [search]);

  const { data, isLoading, isFetching, isError } = useGetBlogsQuery({
    search: debouncedSearch || undefined,
    category: category !== 'all' ? category : undefined,
    page,
    pageSize: PAGE_SIZE,
  });

  return {
    blogs: data?.data ?? [],
    total: data?.total ?? 0,
    totalPages: data?.totalPages ?? 0,
    isLoading,
    isFetching,
    isError,
  };
}
