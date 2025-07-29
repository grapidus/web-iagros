import React from 'react';
import {
  ContactLink,
  CopyrightText,
  FooterBottom,
  FooterContainer,
  FooterLink,
  FooterList,
  FooterListItem,
  FooterSection,
  FooterText,
  FooterTitle,
  FooterWrapper,
  LogoImage,
  MapContainer,
  SocialIcon,
  SocialIcons,
  SocialLink,
  TermsLink,
  TermsLinks,
  WaveContainer
} from './styles/Footer.styles';

const Footer: React.FC = () => {
  return (
    <>
      <WaveContainer />
      <FooterContainer>
        <FooterWrapper>
          <FooterSection>
            <LogoImage src="/images/logos/logo-blanco.png" alt="Logo AGROS" />
            <FooterTitle>Mis sitio web</FooterTitle>
            <SocialIcons>
              <SocialLink
                href="https://www.youtube.com/@iagrocolombia8729"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon src="/images/social/youtube.png" alt="YouTube" />
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/iagroglobal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon
                  src="/images/social/instagram.png"
                  alt="Instagram"
                />
              </SocialLink>
              <SocialLink
                href="https://x.com/iagros"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon src="/images/social/x.png" alt="X" />
              </SocialLink>
              <SocialLink
                href="https://www.facebook.com/iagrosglobal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon src="/images/social/facebook.png" alt="Facebook" />
              </SocialLink>
              <SocialLink
                href="https://www.tiktok.com/@iagroglobal?_t=8qGZWSxljfh&_r=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon src="/images/social/tiktok.png" alt="TikTok" />
              </SocialLink>
            </SocialIcons>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Servicios</FooterTitle>
            <FooterList>
              <FooterListItem>
                <FooterLink href="/nuestra-organizacion/">
                  Nuestra organización
                </FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href="/agro-insumos/">Agroinsumos</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href="/servicios-y-asesorias/">
                  Asesorías y servicios
                </FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href="/blog/">Blog</FooterLink>
              </FooterListItem>
            </FooterList>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Contacto</FooterTitle>
            <FooterText>Carrera 9 No.16 -91</FooterText>
            <FooterText>
              <strong>Teléfono: </strong>
              <ContactLink href="tel:+573105803425">
                +57 310 5803425
              </ContactLink>
            </FooterText>
            <FooterText>
              <strong>Email: </strong>
              <ContactLink href="mailto:iagro@iagros.com">
                iagro@iagros.com
              </ContactLink>
            </FooterText>
            <FooterText>
              <strong>Horario de atención:</strong>
            </FooterText>
            <FooterText>Lunes a viernes: 6 am – 12:30 pm</FooterText>
            <FooterText>2:00 pm - 5:00 pm</FooterText>
            <FooterText>Sábados: 6:00 am - 12:00 pm</FooterText>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Nuestra Ubicación</FooterTitle>
            <MapContainer>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31811.772672456227!2d-74.2452867!3d4.6878073!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f82adcb05b147%3A0x6d574902b1f412b6!2sIAGRO!5e0!3m2!1ses-419!2sco!4v1725072523450!5m2!1ses-419!2sco"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </MapContainer>
          </FooterSection>
        </FooterWrapper>

        <FooterBottom>
          <CopyrightText>
            © 2024 Mi Sitio Web. Todos los derechos reservados.
          </CopyrightText>
          <TermsLinks>
            <TermsLink
              target="_blank"
              href="https://iagros.com/wp-content/uploads/2024/10/Politica-de-Tratamiento-de-Datos-Personales.pdf"
              rel="noopener noreferrer"
            >
              Política de privacidad
            </TermsLink>
            <TermsLink
              target="_blank"
              href="https://iagros.com/wp-content/uploads/2024/10/Terminos-y-Condiciones-de-Iagros.pdf"
              rel="noopener noreferrer"
            >
              Términos y condiciones
            </TermsLink>
          </TermsLinks>
        </FooterBottom>
      </FooterContainer>
    </>
  );
};

export default Footer;
