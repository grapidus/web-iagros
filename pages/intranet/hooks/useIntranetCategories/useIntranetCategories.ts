import { useEffect, useState } from "react";
import { useAgroInsumosStore } from "../../../../components/Layout/Header/components/NavbarMenu/stores/agroInsumos.store";
import { AgroInsumosCategory } from "../../../../components/Layout/Header/components/NavbarMenu/models/agroInsumos.model";

interface CategoryFormData {
  name: string;
  slug: string;
  active?: boolean;
}

const useIntranetCategories = () => {
  const {
    allCategories,
    isLoading,
    error,
    fetchAllCategories,
    createCategory,
    updateCategory,
    deleteCategory,
    importCategories,
  } = useAgroInsumosStore();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<AgroInsumosCategory | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] =
    useState<AgroInsumosCategory | null>(null);
  const handleImport = async (file: File) => {
    await importCategories(file);
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);

  const handleOpenCreate = () => {
    setSelectedCategory(null);
    setIsFormOpen(true);
  };

  const handleOpenEdit = (category: AgroInsumosCategory) => {
    setSelectedCategory(category);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setSelectedCategory(null);
  };

  const handleSubmitForm = async (data: CategoryFormData) => {
    if (selectedCategory) {
      await updateCategory(selectedCategory.id, data);
    } else {
      await createCategory(data);
    }
    handleCloseForm();
  };

  const handleOpenDelete = (category: AgroInsumosCategory) => {
    setCategoryToDelete(category);
    setIsDeleteDialogOpen(true);
  };

  const handleCloseDelete = () => {
    setCategoryToDelete(null);
    setIsDeleteDialogOpen(false);
  };

  const handleConfirmDelete = async () => {
    if (categoryToDelete) {
      await deleteCategory(categoryToDelete.id);
      handleCloseDelete();
    }
  };

  return {
    categories: allCategories,
    isLoading,
    error,
    isFormOpen,
    selectedCategory,
    isDeleteDialogOpen,
    categoryToDelete,
    handleOpenCreate,
    handleOpenEdit,
    handleCloseForm,
    handleSubmitForm,
    handleOpenDelete,
    handleCloseDelete,
    handleConfirmDelete,
    handleImport,
  };
};

export default useIntranetCategories;
