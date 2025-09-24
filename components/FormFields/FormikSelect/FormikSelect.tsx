import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material';
import { useField } from 'formik';
import React from 'react';

// Interfaz para las opciones del select
export interface SelectOption {
  value: string;
  label: string;
}

// Interfaces para las props
interface FormikSelectProps {
  name: string;
  label: string;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  [key: string]: any; // Para otras props que pueda recibir el Select
}

// Componente principal
const FormikSelect: React.FC<FormikSelectProps> = ({
  name,
  label,
  options,
  placeholder,
  ...props
}) => {
  // Usamos el hook de Formik para conectar con el estado del formulario
  const [field, meta] = useField(name);

  // Extraemos si hay error y el mensaje
  const hasError = meta.touched && Boolean(meta.error);
  const errorMessage = meta.touched && meta.error ? meta.error : '';

  return (
    <FormControl fullWidth variant="outlined" error={hasError}>
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Select
        labelId={`${name}-label`}
        id={name}
        name={name}
        label={label}
        value={field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}
        {...props}
      >
        {placeholder && (
          <MenuItem value="">
            <em>{placeholder}</em>
          </MenuItem>
        )}
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {hasError && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
};

export default FormikSelect;
