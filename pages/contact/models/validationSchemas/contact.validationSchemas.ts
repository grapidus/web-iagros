import * as Yup from 'yup';
import { contactTypeValues } from '../../constants/contactOptions';

export const validationSchema = Yup.object({
  names: Yup.string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre es demasiado largo')
    .required('El nombre es requerido'),
  lastNames: Yup.string()
    .min(2, 'Los apellidos deben tener al menos 2 caracteres')
    .max(50, 'Los apellidos son demasiado largos')
    .required('Los apellidos son requeridos'),
  email: Yup.string()
    .email('Correo electrónico inválido')
    .required('El correo electrónico es requerido'),
  company: Yup.string().required('La empresa es requerida'),
  phone: Yup.string()
    .matches(/^[0-9+\-\s()]{8,15}$/, 'Número de teléfono inválido')
    .required('El teléfono es requerido'),
  contactType: Yup.string()
    .oneOf(contactTypeValues, 'Seleccione una opción válida')
    .required('Seleccione el tipo de contacto'),
  topicOfInterest: Yup.string().required('El tema de interés es requerido')
});
