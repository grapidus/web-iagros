import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Layout from "../../components/Layout/Layout";
import CategoryForm from "./components/CategoryForm/CategoryForm";
import CategoryList from "./components/CategoryList/CategoryList";
import useIntranetCategories from "./hooks/useIntranetCategories/useIntranetCategories";
import {
  CreateButton,
  IntranetContainer,
  IntranetHeader,
  IntranetInnerContainer,
  IntranetTitle,
} from "./styles/Intranet.styles";

function Intranet() {
  const {
    categories,
    isLoading,
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
  } = useIntranetCategories();

  return (
    <Layout>
      <IntranetContainer>
        <IntranetInnerContainer>
          <IntranetHeader>
            <IntranetTitle>Categories</IntranetTitle>
            <div style={{ display: "flex", gap: "12px" }}>
              <input
                type="file"
                accept=".xlsx,.xls"
                style={{ display: "none" }}
                id="import-file-input"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    handleImport(file);
                    e.target.value = "";
                  }
                }}
              />
              <CreateButton
                onClick={() =>
                  document.getElementById("import-file-input")?.click()
                }
              >
                Import Excel
              </CreateButton>
              <CreateButton onClick={handleOpenCreate}>
                + New Category
              </CreateButton>
            </div>
          </IntranetHeader>

          <CategoryList
            categories={categories}
            isLoading={isLoading}
            onEdit={handleOpenEdit}
            onDelete={handleOpenDelete}
          />

          <CategoryForm
            open={isFormOpen}
            selectedCategory={selectedCategory}
            isLoading={isLoading}
            onClose={handleCloseForm}
            onSubmit={handleSubmitForm}
          />

          <Dialog open={isDeleteDialogOpen} onClose={handleCloseDelete}>
            <DialogTitle>Delete Category</DialogTitle>
            <DialogContent>
              Are you sure you want to delete{" "}
              <strong>{categoryToDelete?.name}</strong>?
            </DialogContent>
            <DialogActions sx={{ padding: "16px 24px" }}>
              <Button onClick={handleCloseDelete}>Cancel</Button>
              <Button
                variant="contained"
                color="error"
                onClick={handleConfirmDelete}
                disabled={isLoading}
              >
                {isLoading ? "Deleting..." : "Delete"}
              </Button>
            </DialogActions>
          </Dialog>
        </IntranetInnerContainer>
      </IntranetContainer>
    </Layout>
  );
}

export default Intranet;
