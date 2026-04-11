import { create } from 'zustand';
import { BlogCategory } from '../models/local/blog.local.model';

type Category = BlogCategory | 'all';

interface BlogUIState {
  search: string;
  category: Category;
  page: number;
  setSearch: (search: string) => void;
  setCategory: (category: Category) => void;
  setPage: (page: number) => void;
  reset: () => void;
}

export const useBlogStore = create<BlogUIState>((set) => ({
  search: '',
  category: 'all',
  page: 1,

  setSearch: (search) => set({ search, page: 1 }),
  setCategory: (category) => set({ category, page: 1 }),
  setPage: (page) => set({ page }),
  reset: () => set({ search: '', category: 'all', page: 1 }),
}));
