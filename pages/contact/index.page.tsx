import { Clock, Lightbulb, Mail, MapPin, Phone, Sprout, Zap } from 'lucide-react';
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
  ContactInfoCard,
  ContactInfoDiv,
  ContactInfoGrid,
  ContactInnerContainer,
  Description,
  EyebrowLabel,
  FeatureIcon,
  FeatureItem,
  FeatureText,
  FormColumn,
  FormContainer,
  FormGrid,
  FormNote,
  FormSection,
  FormTitle,
  InfoLabel,
  InfoValue,
  NoteText,
  StyledSubmitButton,
  Title
} from './styles/Contact.styles';

const FEATURES = [
  {
    icon: <Sprout size={22} color="#fff" strokeWidth={2} />,
    bg: 'linear-gradient(135deg, #3d8b4a, #61CE70)',
    title: 'Innovación Agrícola',
    text: 'Soluciones tecnológicas para el campo moderno'
  },
  {
    icon: <Zap size={22} color="#fff" strokeWidth={2} />,
    bg: 'linear-gradient(135deg, #c05e00, #ee7007)',
    title: 'Respuesta Rápida',
    text: 'Te contactamos en menos de 24 horas'
  },
  {
    icon: <Lightbulb size={22} color="#fff" strokeWidth={2} />,
    bg: 'linear-gradient(135deg, #1a2e1d, #2d5234)',
    title: 'Asesoría Experta',
    text: 'Consultoría personalizada para tu negocio'
  }
];

function Contact() {
  const { contactTypeOptions, handleSubmit } = useSendFormContact();

  const formik = useFormik({
    initialValues: initialValuesContact,
    onSubmit: () => {
      handleSubmit(formik.values, formik);
    },
    validationSchema
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

            {/* ── Panel de información ── */}
            <ContactInfo>
              <ContactHeader>
                <EyebrowLabel>Escríbenos</EyebrowLabel>
                <Title>
                  Conecta con <span>nuestro equipo</span>
                </Title>
                <Description>
                  Impulsa tu proyecto agrícola con expertos que entienden el
                  campo. Estamos listos para transformar tus ideas en resultados.
                </Description>
              </ContactHeader>

              {FEATURES.map((f) => (
                <FeatureItem key={f.title}>
                  <FeatureIcon $color={f.bg}>{f.icon}</FeatureIcon>
                  <FeatureText>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </FeatureText>
                </FeatureItem>
              ))}

              {/* Datos de contacto */}
              <ContactInfoGrid>
                <ContactInfoCard href="tel:+573105803425">
                  <InfoLabel><Phone size={10} style={{ display: 'inline', marginRight: 4 }} />Teléfono</InfoLabel>
                  <InfoValue>+57 310 5803425</InfoValue>
                </ContactInfoCard>

                <ContactInfoCard href="mailto:iagro@iagros.com">
                  <InfoLabel><Mail size={10} style={{ display: 'inline', marginRight: 4 }} />Email</InfoLabel>
                  <InfoValue>iagro@iagros.com</InfoValue>
                </ContactInfoCard>

                <ContactInfoDiv>
                  <InfoLabel><MapPin size={10} style={{ display: 'inline', marginRight: 4 }} />Dirección</InfoLabel>
                  <InfoValue>Carrera 9 No. 16-91</InfoValue>
                </ContactInfoDiv>

                <ContactInfoDiv>
                  <InfoLabel><Clock size={10} style={{ display: 'inline', marginRight: 4 }} />Horario</InfoLabel>
                  <InfoValue>Lun–Vie 6am–12:30pm / 2–5pm · Sáb 6am–12pm</InfoValue>
                </ContactInfoDiv>
              </ContactInfoGrid>
            </ContactInfo>

            {/* ── Formulario ── */}
            <FormSection>
              <FormContainer>
                <FormTitle>Envíanos un mensaje</FormTitle>
                <FormGrid>
                  <FormColumn half>
                    <FormikTextField name="names" label="Nombres" />
                  </FormColumn>

                  <FormColumn half>
                    <FormikTextField name="lastNames" label="Apellidos" />
                  </FormColumn>

                  <FormColumn half>
                    <FormikTextField name="email" label="Correo electrónico" type="email" />
                  </FormColumn>

                  <FormColumn half>
                    <FormikTextField name="company" label="Empresa" />
                  </FormColumn>

                  <FormColumn half>
                    <FormikTextField name="phone" label="Teléfono" />
                  </FormColumn>

                  <FormColumn half>
                    <FormikSelect
                      name="contactType"
                      label="Tipo de contacto"
                      options={contactTypeOptions}
                      placeholder="Seleccione una opción"
                    />
                  </FormColumn>

                  <FormColumn>
                    <FormikTextField
                      name="topicOfInterest"
                      label="Tema de interés"
                      multiline
                      rows={4}
                    />
                  </FormColumn>

                  <FormColumn>
                    <ButtonWrapper>
                      <StyledSubmitButton
                        variant="contained"
                        type="button"
                        loading={formik.isSubmitting}
                        onClick={() => formik.handleSubmit()}
                        disabled={formik.isSubmitting}
                      >
                        {formik.isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
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
            </FormSection>

          </ContactInnerContainer>
        </ContactContainer>
      </FormikProvider>
    </Layout>
  );
}

export default Contact;
