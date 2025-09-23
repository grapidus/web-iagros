import HeroSection from '../../components/HeroSection/HeroSection';
import Layout from '../../components/Layout/Layout';
import {
  ContentSection,
  HighlightBox,
  HighlightText,
  HistoryContainer,
  HistoryGrid,
  ImageContainer,
  MainContent,
  Paragraph,
  SectionTitle,
  TextContent,
  VideoContainer,
  VideoSection
} from './styles/History.styles';

function History() {
  return (
    <Layout>
      <HeroSection
        title=""
        subtitle=""
        backgroundImage="https://iagros.com/wp-content/uploads/2024/09/Nuestra-historia.png"
        height="300px"
        overlay={false}
        overlayOpacity={0.6}
        hideTextOnMobile={true}
        mobileBackgroundPosition="center top"
        backgroundSize="cover"
        mobileBackgroundSize="contain"
      />

      <HistoryContainer>
        <MainContent>
          <ContentSection>
            <SectionTitle>Más de 25 años de experiencia</SectionTitle>

            <TextContent>
              <Paragraph>
                Desde 1995, en Iagro nos hemos dedicado a fortalecer el sector
                agropecuario, ambiental y de la construcción en Colombia. Lo que
                comenzó como un proyecto enfocado en ofrecer insumos básicos se
                ha transformado en una empresa líder, reconocida por su
                compromiso, calidad y vocación de servicio.
              </Paragraph>

              <HistoryGrid>
                <ImageContainer>
                  <img
                    src="https://iagros.com/wp-content/uploads/2024/11/control-biologico-3.png"
                    alt="Instalaciones de Iagro en la Sabana Occidental"
                  />
                </ImageContainer>

                <TextContent>
                  <Paragraph>
                    Ubicados estratégicamente en la Sabana Occidental, nuestra
                    trayectoria de más de 26 años refleja un constante esfuerzo
                    por adaptarnos a los cambios del mercado, incorporar
                    tecnologías innovadoras y responder a las necesidades de
                    nuestros clientes.
                  </Paragraph>

                  <Paragraph>
                    Hoy, Iagro es un referente en el sector gracias a nuestra
                    combinación de experiencia, respaldo técnico y una propuesta
                    de valor enfocada en la asesoría integral.
                  </Paragraph>
                </TextContent>
              </HistoryGrid>

              <HighlightBox>
                <HighlightText>
                  "Seguimos avanzando con un propósito claro: ser un aliado
                  estratégico para los productores y empresas que buscan
                  soluciones sostenibles y de calidad."
                </HighlightText>
              </HighlightBox>
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
      </HistoryContainer>
    </Layout>
  );
}

export default History;
