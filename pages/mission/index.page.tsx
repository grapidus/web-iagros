import HeroSection from '../../components/HeroSection/HeroSection';
import Layout from '../../components/Layout/Layout';
import {
  ContentSection,
  FocusIcon,
  FocusItem,
  FocusTitle,
  MainContent,
  MissionContainer,
  MissionFocus,
  MissionValues,
  Paragraph,
  QuoteSection,
  QuoteText,
  SectionTitle,
  TextContent,
  ValueItem,
  VideoContainer,
  VideoSection
} from './styles/Mission.styles';

function Mission() {
  return (
    <Layout>
      <HeroSection
        title=""
        subtitle=""
        backgroundImage="https://iagros.com/wp-content/uploads/2024/09/Mision.png"
        height="300px"
        overlay={false}
        overlayOpacity={0.6}
        hideTextOnMobile={true}
        mobileBackgroundPosition="center top"
        backgroundSize="cover"
        mobileBackgroundSize="contain"
      />

      <MissionContainer>
        <MainContent>
          <ContentSection>
            <SectionTitle>Nuestra Misión</SectionTitle>

            <TextContent>
              <Paragraph>
                En Iagro, nuestra misión es ofrecer una experiencia valiosa y
                agradable a nuestros clientes internos y externos. Nos dedicamos
                a proporcionar insumos y servicios de alta calidad que
                satisfagan las necesidades específicas del sector agropecuario,
                ambiental y de la construcción.
              </Paragraph>

              <Paragraph>
                Trabajamos con un enfoque en la sustentabilidad y el valor
                agregado, asegurándonos de que nuestros clientes encuentren en
                nosotros un respaldo integral y soluciones innovadoras que
                impulsen la productividad y el desarrollo sostenible en sus
                actividades.
              </Paragraph>

              <MissionFocus>
                <FocusItem>
                  <FocusIcon>🌱</FocusIcon>
                  <FocusTitle>Sustentabilidad</FocusTitle>
                  <Paragraph>
                    Promovemos prácticas que respetan el medio ambiente y
                    contribuyen al desarrollo sostenible del sector.
                  </Paragraph>
                </FocusItem>

                <FocusItem>
                  <FocusIcon>💼</FocusIcon>
                  <FocusTitle>Calidad</FocusTitle>
                  <Paragraph>
                    Ofrecemos insumos y servicios de alta calidad que satisfacen
                    las necesidades específicas de cada cliente.
                  </Paragraph>
                </FocusItem>

                <FocusItem>
                  <FocusIcon>🤝</FocusIcon>
                  <FocusTitle>Confianza</FocusTitle>
                  <Paragraph>
                    Construimos relaciones basadas en la confianza, la
                    excelencia y el compromiso con el progreso.
                  </Paragraph>
                </FocusItem>
              </MissionFocus>

              <QuoteSection>
                <QuoteText>
                  "Nuestra prioridad es construir relaciones basadas en la
                  confianza, la excelencia y el compromiso con el progreso de
                  nuestros clientes y comunidades."
                </QuoteText>
              </QuoteSection>

              <SectionTitle>Valores que nos definen</SectionTitle>

              <MissionValues>
                <ValueItem>
                  <h4>Experiencia Valiosa</h4>
                  <p>
                    Creamos experiencias significativas para nuestros clientes
                    internos y externos.
                  </p>
                </ValueItem>

                <ValueItem>
                  <h4>Alta Calidad</h4>
                  <p>
                    Ofrecemos productos y servicios que cumplen con los más
                    altos estándares.
                  </p>
                </ValueItem>

                <ValueItem>
                  <h4>Soluciones Específicas</h4>
                  <p>
                    Adaptamos nuestras soluciones a las necesidades particulares
                    de cada sector.
                  </p>
                </ValueItem>

                <ValueItem>
                  <h4>Valor Agregado</h4>
                  <p>
                    Proporcionamos beneficios adicionales que mejoran la
                    experiencia de nuestros clientes.
                  </p>
                </ValueItem>

                <ValueItem>
                  <h4>Respaldo Integral</h4>
                  <p>
                    Acompañamos a nuestros clientes en todas las etapas de su
                    desarrollo.
                  </p>
                </ValueItem>

                <ValueItem>
                  <h4>Innovación</h4>
                  <p>
                    Buscamos constantemente nuevas formas de mejorar nuestros
                    productos y servicios.
                  </p>
                </ValueItem>
              </MissionValues>
            </TextContent>
          </ContentSection>

          <VideoSection>
            <SectionTitle>Conoce Nuestra Empresa</SectionTitle>
            <VideoContainer>
              <iframe
                src="https://www.youtube.com/embed/q0YNlXQ8_zc"
                title="Video de Iagro"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </VideoContainer>
          </VideoSection>
        </MainContent>
      </MissionContainer>
    </Layout>
  );
}

export default Mission;
