import { useEffect } from "react";
import { useAgroInsumosStore } from "../../stores/agroInsumos.store";

const useAgroInsumos = () => {
  const { categories, isLoading, error, fetchCategories } =
    useAgroInsumosStore();

  useEffect(() => {
    if (categories.length === 0 && !isLoading && !error) {
      fetchCategories();
    }
  }, []);

  return { categories, isLoading, error };
};

export default useAgroInsumos;
