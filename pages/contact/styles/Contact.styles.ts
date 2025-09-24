import { Button } from '@mui/material';
import styled from 'styled-components';
import theme from '../../../styles/theme';

// Contenedor principal
export const ContactContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
`;

// Cabecera con título y descripción
export const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 32px;
`;

// Título
export const Title = styled.h1`
  color: ${theme.colors.primary};
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 16px;
  font-family: inherit;
`;

// Descripción
export const Description = styled.p`
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
`;

// Formulario
export const FormContainer = styled.div`
  width: 100%;
  padding: 32px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

// Botón personalizado
export const StyledSubmitButton = styled(Button)`
  background-color: ${theme.colors.primary} !important;
  &:hover {
    background-color: #d86200 !important; /* Color un poco más oscuro para hover */
  }
  border-radius: 50px !important;
  padding: 12px 32px !important;
`;

// Contenedor para el botón
export const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 24px;
`;

// Sistema de Grid personalizado
export const FormGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -12px; /* Compensar el padding interno de las celdas */
`;

export const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

interface FormColumnProps {
  half?: boolean;
}

export const FormColumn = styled.div<FormColumnProps>`
  flex: 0 0 100%;
  max-width: 100%;
  padding: 12px;

  @media (min-width: 600px) {
    flex: ${(props) => (props.half ? '0 0 50%' : '0 0 100%')};
    max-width: ${(props) => (props.half ? '50%' : '100%')};
  }
`;

// Nota del formulario
export const FormNote = styled.div`
  margin-top: 16px;
  text-align: center;
`;

// Texto de nota
export const NoteText = styled.p`
  font-size: 0.75rem;
  color: #666;
  margin: 0;
`;
