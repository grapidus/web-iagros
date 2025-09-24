import { TextField, TextFieldProps } from '@mui/material';
import { useField } from 'formik';
import React from 'react';

// Interfaces para las props
interface FormikTextFieldProps extends Omit<TextFieldProps, 'name'> {
  name: string;
}

// Componente principal
const FormikTextField: React.FC<FormikTextFieldProps> = ({
  name,
  label,
  type = 'text',
  multiline = false,
  rows,
  placeholder,
  disabled,
  ...props
}) => {
  // Usamos el hook de Formik para conectar con el estado del formulario
  const [field, meta] = useField(name);

  // Extraemos si hay error y el mensaje
  const hasError = meta.touched && Boolean(meta.error);
  const errorMessage = meta.touched && meta.error ? meta.error : '';

  return (
    <TextField
      id={name}
      name={name}
      label={label}
      type={type}
      multiline={multiline}
      rows={rows}
      placeholder={placeholder}
      disabled={disabled}
      variant="outlined"
      fullWidth
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      error={hasError}
      helperText={errorMessage}
      {...props}
    />
  );
};

export default FormikTextField;
