import HeroSection from '../../components/HeroSection/HeroSection';
import Layout from '../../components/Layout/Layout';
import {
  CardIcon,
  CardTitle,
  ContentSection,
  HighlightQuote,
  MainContent,
  Paragraph,
  QuoteText,
  SectionTitle,
  TextContent,
  VideoContainer,
  VideoSection,
  VisionCard,
  VisionCardContainer,
  VisionContainer
} from './styles/Vision.styles';

function Vision() {
  return (
    <Layout>
      <HeroSection
        title=""
        subtitle=""
        backgroundImage="https://iagros.com/wp-content/uploads/2024/09/Vision.png"
        height="300px"
        overlay={false}
        overlayOpacity={0.6}
        hideTextOnMobile={true}
        mobileBackgroundPosition="center top"
        backgroundSize="cover"
        mobileBackgroundSize="contain"
      />

      <VisionContainer>
        <MainContent>
          <ContentSection>
            <SectionTitle>Nuestra Visión</SectionTitle>

            <TextContent>
              <Paragraph>
                Ser reconocidos como la empresa líder en soluciones técnicas
                integrales para los sectores agropecuario, ambiental y de la
                construcción. Nos enfocamos en mantener un equipo
                interdisciplinario altamente capacitado y en desarrollar
                productos y servicios innovadores que promuevan la
                sustentabilidad y el crecimiento sostenible.
              </Paragraph>

              <Paragraph>
                Nuestro objetivo es convertirnos en un aliado estratégico para
                nuestros clientes, ayudándolos a alcanzar la productividad y la
                eficiencia en sus proyectos, mientras contribuimos activamente
                al desarrollo de las comunidades y al cuidado del medio
                ambiente.
              </Paragraph>

              <HighlightQuote>
                <QuoteText>
                  "Nos proyectamos como un aliado estratégico para todos
                  aquellos que buscan soluciones sostenibles y eficientes en los
                  sectores agropecuario, ambiental y de la construcción."
                </QuoteText>
              </HighlightQuote>

              <VisionCardContainer>
                <VisionCard>
                  <CardIcon>🌱</CardIcon>
                  <CardTitle>Sustentabilidad</CardTitle>
                  <Paragraph>
                    Desarrollamos productos y servicios que promueven prácticas
                    sostenibles y respetuosas con el medio ambiente,
                    garantizando un futuro mejor para todos.
                  </Paragraph>
                </VisionCard>

                <VisionCard>
                  <CardIcon>💡</CardIcon>
                  <CardTitle>Innovación</CardTitle>
                  <Paragraph>
                    Buscamos constantemente nuevas soluciones tecnológicas que
                    mejoren la eficiencia y productividad de nuestros clientes
                    en todos los sectores.
                  </Paragraph>
                </VisionCard>

                <VisionCard>
                  <CardIcon>👥</CardIcon>
                  <CardTitle>Equipo Interdisciplinario</CardTitle>
                  <Paragraph>
                    Contamos con profesionales altamente capacitados en diversas
                    áreas que trabajan en conjunto para ofrecer soluciones
                    integrales a medida.
                  </Paragraph>
                </VisionCard>
              </VisionCardContainer>
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
      </VisionContainer>
    </Layout>
  );
}

export default Vision;
