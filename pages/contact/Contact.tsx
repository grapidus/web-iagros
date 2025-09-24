import { FormikProvider, useFormik } from 'formik';

import FormikSelect from '../../components/FormFields/FormikSelect/FormikSelect';
import FormikTextField from '../../components/FormFields/FormikTextField/FormikTextField';
import Layout from '../../components/Layout/Layout';
import useSendFormContact from './hooks/sendFormContact/useSendFormContact';
import { initialValuesContact } from './models/initial/contact.initial';
import { validationSchema } from './models/validationSchemas/contact.validationSchemas';
import {
  ButtonWrapper,
  ContactContainer,
  ContactHeader,
  Description,
  FormColumn,
  FormContainer,
  FormGrid,
  FormNote,
  NoteText,
  StyledSubmitButton,
  Title
} from './styles/Contact.styles';

function Contact() {
  const { contactTypeOptions, handleSubmit } = useSendFormContact();

  const formik = useFormik({
    initialValues: initialValuesContact,
    onSubmit: () => {
      handleSubmit(formik.values, formik);
    },
    validationSchema: validationSchema
  });

  return (
    <Layout>
      <FormikProvider value={formik}>
        <ContactContainer>
          {/* Encabezado */}
          <ContactHeader>
            <Title>Escríbenos</Title>
            <Description>
              ¡Envíanos tus peticiones! Si tienes alguna solicitud o
              requerimiento, te invitamos a utilizar este formulario. Tu
              colaboración es valiosa para nosotros. ¡Gracias por participar!
            </Description>
          </ContactHeader>

          {/* Formulario */}
          <FormContainer>
            <FormGrid>
              {/* Nombres */}
              <FormColumn half>
                <FormikTextField name="names" label="Nombres" />
              </FormColumn>

              {/* Apellidos */}
              <FormColumn half>
                <FormikTextField name="lastNames" label="Apellidos" />
              </FormColumn>

              {/* Correo electrónico */}
              <FormColumn half>
                <FormikTextField
                  name="email"
                  label="Correo electrónico"
                  type="email"
                />
              </FormColumn>

              {/* Empresa */}
              <FormColumn half>
                <FormikTextField name="company" label="Empresa" />
              </FormColumn>

              {/* Teléfono */}
              <FormColumn half>
                <FormikTextField name="phone" label="Teléfono" />
              </FormColumn>

              {/* Tipo de contacto */}
              <FormColumn half>
                <FormikSelect
                  name="contactType"
                  label="Tipo de contacto"
                  options={contactTypeOptions}
                  placeholder="Seleccione una opción"
                />
              </FormColumn>

              {/* Tema de interés */}
              <FormColumn>
                <FormikTextField
                  name="topicOfInterest"
                  label="Tema de interés"
                  multiline
                  rows={4}
                />
              </FormColumn>

              {/* Botón de envío */}
              <FormColumn>
                <ButtonWrapper>
                  <StyledSubmitButton
                    variant="contained"
                    type="button"
                    loading={formik.isSubmitting}
                    onClick={() => formik.handleSubmit()}
                    disabled={formik.isSubmitting}
                  >
                    {formik.isSubmitting ? 'Enviando...' : 'Enviar formulario'}
                  </StyledSubmitButton>
                  <FormNote>
                    <NoteText>
                      * Todos los campos son obligatorios excepto el mensaje.
                    </NoteText>
                  </FormNote>
                </ButtonWrapper>
              </FormColumn>
            </FormGrid>
          </FormContainer>
        </ContactContainer>
      </FormikProvider>
    </Layout>
  );
}

export default Contact;
