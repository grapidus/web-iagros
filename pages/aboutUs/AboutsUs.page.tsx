import HeroSection from '../../components/HeroSection/HeroSection';
import Layout from '../../components/Layout/Layout';
import {
  AboutContainer,
  CardDescription,
  CardIcon,
  CardTitle,
  ContentSection,
  Description,
  DifferentiatorCard,
  DifferentiatorsGrid,
  DifferentiatorsSection,
  ExperienceNumber,
  ExperienceSection,
  ExperienceText,
  MainContent,
  MissionStatement,
  MissionText,
  SectionTitle,
  VideoContainer,
  VideoSection,
  VideoTitle
} from './styles/AboutUs.styles';

function AboutsUs() {
  const differentiators = [
    {
      icon: '🏆',
      title: 'Calidad Garantizada',
      description:
        'Trabajamos con los mejores insumos del mercado para garantizar resultados óptimos.'
    },
    {
      icon: '👥',
      title: 'Asesoría Personalizada',
      description:
        'Nuestro equipo interdisciplinario está comprometido con guiar a cada cliente según sus necesidades específicas.'
    },
    {
      icon: '🌱',
      title: 'Innovación y Sustentabilidad',
      description:
        'Incorporamos tecnologías modernas y prácticas responsables para contribuir al desarrollo sostenible.'
    },
    {
      icon: '🌎',
      title: 'Cobertura Nacional e Internacional',
      description:
        'Desde nuestra ubicación estratégica en la Sabana Occidental, atendemos a clientes en todo Colombia y más allá.'
    }
  ];

  return (
    <Layout>
      <AboutContainer>
        {/* Hero Section */}
        <HeroSection
          title=""
          subtitle=""
          backgroundImage="https://iagros.com/wp-content/uploads/2024/08/NUESTRA-ORGANIZACION.png"
          height="300px"
          overlay={false}
          overlayOpacity={0.6}
          hideTextOnMobile={true}
          mobileBackgroundPosition="center top"
          backgroundSize="cover"
          mobileBackgroundSize="contain"
        />

        {/* Experience Section */}
        <ExperienceSection>
          <ExperienceNumber>26+</ExperienceNumber>
          <ExperienceText>Años de experiencia</ExperienceText>
        </ExperienceSection>

        {/* Main Content */}
        <MainContent>
          <ContentSection>
            <Description>
              En Iagro, contamos con más de 26 años de experiencia brindando
              soluciones integrales al sector agropecuario, ambiental y de la
              construcción. Nuestra propuesta se basa en ofrecer productos de
              calidad, asesoría personalizada y un respaldo técnico que asegure
              el éxito de nuestros clientes.
            </Description>
          </ContentSection>

          {/* Differentiators Section */}
          <DifferentiatorsSection>
            <SectionTitle>Lo Que Nos Hace Diferentes</SectionTitle>
            <DifferentiatorsGrid>
              {differentiators.map((item, index) => (
                <DifferentiatorCard key={index}>
                  <CardIcon>{item.icon}</CardIcon>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </DifferentiatorCard>
              ))}
            </DifferentiatorsGrid>
          </DifferentiatorsSection>
          {/* Video Section */}
          <VideoSection>
            <VideoTitle>Conoce más sobre nosotros</VideoTitle>
            <VideoContainer>
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/q0YNlXQ8_zc"
                title="Video Iagro"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </VideoContainer>
          </VideoSection>
          {/* Mission Statement */}
          <MissionStatement>
            <MissionText>
              Tu éxito es <strong>nuestra prioridad</strong>. En Iagro, no solo
              somos proveedores, somos tus <strong>aliados estratégicos</strong>{' '}
              en el camino hacia la <strong>productividad</strong> y{' '}
              <strong>sustentabilidad</strong>.
            </MissionText>
          </MissionStatement>
        </MainContent>
      </AboutContainer>
    </Layout>
  );
}

export default AboutsUs;
