// Opciones para el tipo de contacto
export const contactTypeOptions = [
  { value: 'peticion', label: 'Petición' },
  { value: 'sugerencia', label: 'Sugerencia' },
  { value: 'otra', label: 'Otra' }
];

// Extraemos solo los valores para usar en validaciones
export const contactTypeValues = contactTypeOptions.map(
  (option) => option.value
);
