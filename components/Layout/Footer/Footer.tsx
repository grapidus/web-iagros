import React from 'react';
import {
  FooterBottom,
  FooterContainer,
  FooterSection,
  FooterWrapper,
  LogoSection,
  MapContainer,
  SocialIcons,
  TermsLinks,
  WaveContainer
} from './styles/Footer.styles';

const Footer: React.FC = () => {
  return (
    <>
      <WaveContainer />
      <FooterContainer>
        <FooterWrapper>
          <LogoSection>
            <img
              src="https://iagros.com/wp-content/uploads/2024/10/LOGO-BLANCO.png"
              alt="Logo AGROS"
            />
            <h3>Mi sitio web</h3>
            <SocialIcons>
              <a
                href="https://www.youtube.com/@iagrocolombia8729"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://iagros.com/wp-content/uploads/2024/08/YOUTUBE@2x.png"
                  alt="YouTube"
                />
              </a>
              <a
                href="https://www.instagram.com/iagroglobal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://iagros.com/wp-content/uploads/2024/08/INSTAGRAM@2x.png"
                  alt="Instagram"
                />
              </a>
              <a
                href="https://x.com/iagros"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://iagros.com/wp-content/uploads/2024/08/X@2x.png"
                  alt="X"
                />
              </a>
              <a
                href="https://www.facebook.com/iagrosglobal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://iagros.com/wp-content/uploads/2024/08/FACEBOOK@2x.png"
                  alt="Facebook"
                />
              </a>
              <a
                href="https://www.tiktok.com/@iagroglobal?_t=8qGZWSxljfh&_r=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://iagros.com/wp-content/uploads/2024/08/TIK-TOK@2x.png"
                  alt="TikTok"
                />
              </a>
            </SocialIcons>
          </LogoSection>

          <FooterSection>
            <h3>Servicios</h3>
            <ul>
              <li>
                <a href="/nuestra-organizacion/">Nuestra organización</a>
              </li>
              <li>
                <a href="/agro-insumos/">Agroinsumos</a>
              </li>
              <li>
                <a href="/servicios-y-asesorias/">Asesorías y servicios</a>
              </li>
              <li>
                <a href="/blog/">Blog</a>
              </li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>Contacto</h3>
            <p>Carrera 9 No.16 -91</p>
            <p>
              <strong>Teléfono: </strong>
              <a href="tel:+573105803425" style={{ color: 'white' }}>
                +57 310 5803425
              </a>
            </p>
            <p>
              <strong>Email: </strong>
              <a href="mailto:iagro@iagros.com" style={{ color: 'white' }}>
                iagro@iagros.com
              </a>
            </p>
            <p>
              <strong>Horario de atención:</strong>
            </p>
            <p>Lunes a viernes: 6 am – 12:30 pm</p>
            <p>2:00 pm - 5:00 pm</p>
            <p>Sábados: 6:00 am - 12:00 pm</p>
          </FooterSection>

          <FooterSection>
            <h3>Nuestra Ubicación</h3>
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
          <p>© 2024 Mi Sitio Web. Todos los derechos reservados.</p>
          <TermsLinks>
            <a
              target="_blank"
              href="https://iagros.com/wp-content/uploads/2024/10/Politica-de-Tratamiento-de-Datos-Personales.pdf"
              rel="noopener noreferrer"
            >
              Política de privacidad
            </a>
            <a
              target="_blank"
              href="https://iagros.com/wp-content/uploads/2024/10/Terminos-y-Condiciones-de-Iagros.pdf"
              rel="noopener noreferrer"
            >
              Términos y condiciones
            </a>
          </TermsLinks>
        </FooterBottom>
      </FooterContainer>
    </>
  );
};

export default Footer;
