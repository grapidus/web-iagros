import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  CircularProgress,
} from "@mui/material";
import { AgroInsumosCategory } from "../../../../components/Layout/Header/components/NavbarMenu/models/agroInsumos.model";
import {
  DeleteButton,
  EditButton,
  StatusChip,
  TableContainer,
} from "../../styles/Intranet.styles";

interface CategoryListProps {
  categories: AgroInsumosCategory[];
  isLoading: boolean;
  onEdit: (category: AgroInsumosCategory) => void;
  onDelete: (category: AgroInsumosCategory) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  isLoading,
  onEdit,
  onDelete,
}) => {
  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Name</strong>
            </TableCell>
            <TableCell>
              <strong>Slug</strong>
            </TableCell>
            <TableCell>
              <strong>Status</strong>
            </TableCell>
            <TableCell>
              <strong>Created At</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Actions</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id} hover>
              <TableCell>{category.name}</TableCell>
              <TableCell>{category.slug}</TableCell>
              <TableCell>
                <StatusChip active={category.active}>
                  {category.active ? "Active" : "Inactive"}
                </StatusChip>
              </TableCell>
              <TableCell>
                {new Date(category.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell align="right">
                <EditButton onClick={() => onEdit(category)}>Edit</EditButton>
                <DeleteButton onClick={() => onDelete(category)}>
                  Delete
                </DeleteButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CategoryList;
