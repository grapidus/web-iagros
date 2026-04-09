import { FormikProvider, useFormik } from 'formik';

import FormikSelect from '../../components/FormFields/FormikSelect/FormikSelect';
import FormikTextField from '../../components/FormFields/FormikTextField/FormikTextField';
import HeroSection from '../../components/HeroSection';
import Layout from '../../components/Layout/Layout';
import useSendFormContact from './hooks/sendFormContact/useSendFormContact';
import { initialValuesContact } from './models/initial/contact.initial';
import { validationSchema } from './models/validationSchemas/contact.validationSchemas';
import {
  ButtonWrapper,
  ContactContainer,
  ContactHeader,
  ContactInfo,
  ContactInnerContainer,
  Description,
  FeatureIcon,
  FeatureItem,
  FeatureText,
  FormColumn,
  FormContainer,
  FormGrid,
  FormNote,
  FormSection,
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
      <HeroSection
        title=""
        subtitle=""
        backgroundImage="https://iagros.com/wp-content/uploads/2024/08/ESCRIBANOS-2.png"
        height="300px"
        mobileHeight="100px"
        overlay={false}
        overlayOpacity={0.6}
        hideTextOnMobile={true}
        mobileBackgroundPosition="center top"
        backgroundSize="cover"
        mobileBackgroundSize="contain"
      />
      <FormikProvider value={formik}>
        <ContactContainer>
          <ContactInnerContainer>
            {/* Panel de información */}
            <ContactInfo>
              <ContactHeader>
                <Title>¡Conecta con Nosotros!</Title>
                <Description>
                  Impulsa tu proyecto agrícola con nuestro equipo experto.
                  Estamos aquí para transformar tus ideas en realidad.
                </Description>
              </ContactHeader>

              {/* Tarjetas de características */}
              <FeatureItem>
                <FeatureIcon>🌱</FeatureIcon>
                <FeatureText>
                  <h3>Innovación Agrícola</h3>
                  <p>Soluciones tecnológicas para el campo moderno</p>
                </FeatureText>
              </FeatureItem>

              <FeatureItem>
                <FeatureIcon>🚀</FeatureIcon>
                <FeatureText>
                  <h3>Respuesta Rápida</h3>
                  <p>Te contactamos en menos de 24 horas</p>
                </FeatureText>
              </FeatureItem>

              <FeatureItem>
                <FeatureIcon>💡</FeatureIcon>
                <FeatureText>
                  <h3>Asesoría Experta</h3>
                  <p>Consultoría personalizada para tu negocio</p>
                </FeatureText>
              </FeatureItem>
            </ContactInfo>

            {/* Sección del formulario */}
            <FormSection>
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
                        {formik.isSubmitting
                          ? 'Enviando...'
                          : 'Enviar formulario'}
                      </StyledSubmitButton>
                      <FormNote>
                        <NoteText>
                          * Todos los campos son obligatorios excepto el
                          mensaje.
                        </NoteText>
                      </FormNote>
                    </ButtonWrapper>
                  </FormColumn>
                </FormGrid>
              </FormContainer>
            </FormSection>
          </ContactInnerContainer>
        </ContactContainer>
      </FormikProvider>
    </Layout>
  );
}

export default Contact;
