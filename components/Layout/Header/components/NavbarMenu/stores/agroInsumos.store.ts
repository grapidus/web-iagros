import { create } from "zustand";
import { AgroInsumosCategory } from "../models/agroInsumos.model";
import {
  fetchAgroInsumosCategories,
  fetchAllAgroInsumosCategories,
  createAgroInsumosCategory,
  updateAgroInsumosCategory,
  deleteAgroInsumosCategory,
  importAgroInsumosCategories,
} from "../services/agroInsumos.service";

interface AgroInsumosState {
  categories: AgroInsumosCategory[];
  allCategories: AgroInsumosCategory[];
  isLoading: boolean;
  error: string | null;
}

interface AgroInsumosActions {
  fetchCategories: () => Promise<void>;
  fetchAllCategories: () => Promise<void>;
  importCategories: (file: File) => Promise<void>;
  createCategory: (data: { name: string; slug: string }) => Promise<void>;
  updateCategory: (
    id: string,
    data: { name?: string; slug?: string; active?: boolean },
  ) => Promise<void>;
  deleteCategory: (id: string) => Promise<void>;
}

type AgroInsumosStore = AgroInsumosState & AgroInsumosActions;

export const useAgroInsumosStore = create<AgroInsumosStore>((set) => ({
  categories: [],
  allCategories: [],
  isLoading: false,
  error: null,

  fetchCategories: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetchAgroInsumosCategories();
      set({ categories: response.data, isLoading: false });
    } catch (error) {
      set({
        isLoading: false,
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  },

  importCategories: async (file) => {
    set({ isLoading: true, error: null });
    try {
      await importAgroInsumosCategories(file);
      const response = await fetchAgroInsumosCategories();
      const allResponse = await fetchAllAgroInsumosCategories();
      set({
        categories: response.data,
        allCategories: allResponse.data,
        isLoading: false,
      });
    } catch (error) {
      set({
        isLoading: false,
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  },

  fetchAllCategories: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetchAllAgroInsumosCategories();
      set({ allCategories: response.data, isLoading: false });
    } catch (error) {
      set({
        isLoading: false,
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  },

  createCategory: async (data) => {
    set({ isLoading: true, error: null });
    try {
      await createAgroInsumosCategory(data);
      const response = await fetchAgroInsumosCategories();
      const allResponse = await fetchAllAgroInsumosCategories();
      set({
        categories: response.data,
        allCategories: allResponse.data,
        isLoading: false,
      });
    } catch (error) {
      set({
        isLoading: false,
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  },

  updateCategory: async (id, data) => {
    set({ isLoading: true, error: null });
    try {
      await updateAgroInsumosCategory(id, data);
      const response = await fetchAgroInsumosCategories();
      const allResponse = await fetchAllAgroInsumosCategories();
      set({
        categories: response.data,
        allCategories: allResponse.data,
        isLoading: false,
      });
    } catch (error) {
      set({
        isLoading: false,
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  },

  deleteCategory: async (id) => {
    set({ isLoading: true, error: null });
    try {
      await deleteAgroInsumosCategory(id);
      set((state) => ({
        categories: state.categories.filter((cat) => cat.id !== id),
        allCategories: state.allCategories.filter((cat) => cat.id !== id),
        isLoading: false,
      }));
    } catch (error) {
      set({
        isLoading: false,
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  },
}));
