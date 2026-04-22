import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { useEffect, useState } from "react";
import { AgroInsumosCategory } from "../../../../components/Layout/Header/components/NavbarMenu/models/agroInsumos.model";

interface CategoryFormData {
  name: string;
  slug: string;
  active?: boolean;
}

interface CategoryFormProps {
  open: boolean;
  selectedCategory: AgroInsumosCategory | null;
  isLoading: boolean;
  onClose: () => void;
  onSubmit: (data: CategoryFormData) => Promise<void>;
}

const CategoryForm: React.FC<CategoryFormProps> = ({
  open,
  selectedCategory,
  isLoading,
  onClose,
  onSubmit,
}) => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (selectedCategory) {
      setName(selectedCategory.name);
      setSlug(selectedCategory.slug);
      setActive(selectedCategory.active);
    } else {
      setName("");
      setSlug("");
      setActive(true);
    }
  }, [selectedCategory, open]);

  const handleSubmit = async () => {
    await onSubmit({ name, slug, active });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        {selectedCategory ? "Edit Category" : "Create Category"}
      </DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          pt: "16px !important",
        }}
      >
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Slug"
          variant="outlined"
          fullWidth
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />
        {selectedCategory && (
          <FormControlLabel
            control={
              <Switch
                checked={active}
                onChange={(e) => setActive(e.target.checked)}
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked": { color: "#61CE70" },
                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                    backgroundColor: "#61CE70",
                  },
                }}
              />
            }
            label={active ? "Active" : "Inactive"}
          />
        )}
      </DialogContent>
      <DialogActions sx={{ padding: "16px 24px" }}>
        <Button onClick={onClose} disabled={isLoading}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={isLoading || !name || !slug}
          sx={{ background: "#ee7007", "&:hover": { background: "#d4620a" } }}
        >
          {isLoading ? "Saving..." : "Save"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CategoryForm;
