import { Award, Leaf, ShieldCheck, Star, Lightbulb, Users, TrendingUp, Puzzle, Gem } from 'lucide-react';
import HeroSection from '../../components/HeroSection/HeroSection';
import Layout from '../../components/Layout/Layout';
import {
  AccentDivider,
  EyebrowLabel,
  IntroSection,
  LeadText,
  MainTitle,
  MissionContainer,
  PillarCard,
  PillarIconWrap,
  PillarText,
  PillarTitle,
  PillarsGrid,
  PillarsSection,
  QuoteAccent,
  QuoteInner,
  QuoteSection,
  QuoteText,
  SectionEyebrow,
  SectionHeader,
  SectionTitle,
  ValueCard,
  ValueNumber,
  ValueText,
  ValueTitle,
  ValuesGrid,
  ValuesSection
} from './styles/Mission.styles';

const PILLARS = [
  {
    icon: <Leaf size={26} color="#fff" strokeWidth={2} />,
    bg: 'linear-gradient(135deg, #3d8b4a, #61CE70)',
    title: 'Sustentabilidad',
    text: 'Promovemos prácticas que respetan el medio ambiente y contribuyen al desarrollo sostenible del sector.'
  },
  {
    icon: <Award size={26} color="#fff" strokeWidth={2} />,
    bg: 'linear-gradient(135deg, #c05e00, #ee7007)',
    title: 'Calidad',
    text: 'Ofrecemos insumos y servicios de alta calidad que satisfacen las necesidades específicas de cada cliente.'
  },
  {
    icon: <ShieldCheck size={26} color="#fff" strokeWidth={2} />,
    bg: 'linear-gradient(135deg, #1a2e1d, #2d5234)',
    title: 'Confianza',
    text: 'Construimos relaciones basadas en la confianza, la excelencia y el compromiso con el progreso.'
  }
];

const VALUES = [
  {
    num: '01',
    icon: <Star size={18} />,
    title: 'Experiencia Valiosa',
    text: 'Creamos experiencias significativas para nuestros clientes internos y externos.'
  },
  {
    num: '02',
    icon: <Award size={18} />,
    title: 'Alta Calidad',
    text: 'Ofrecemos productos y servicios que cumplen con los más altos estándares del sector.'
  },
  {
    num: '03',
    icon: <Puzzle size={18} />,
    title: 'Soluciones Específicas',
    text: 'Adaptamos nuestras soluciones a las necesidades particulares de cada sector.'
  },
  {
    num: '04',
    icon: <TrendingUp size={18} />,
    title: 'Valor Agregado',
    text: 'Proporcionamos beneficios adicionales que mejoran la experiencia de nuestros clientes.'
  },
  {
    num: '05',
    icon: <Users size={18} />,
    title: 'Respaldo Integral',
    text: 'Acompañamos a nuestros clientes en todas las etapas de su desarrollo.'
  },
  {
    num: '06',
    icon: <Lightbulb size={18} />,
    title: 'Innovación',
    text: 'Buscamos constantemente nuevas formas de mejorar nuestros productos y servicios.'
  }
];

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

        {/* ── Intro ── */}
        <IntroSection>
          <EyebrowLabel>Quiénes somos</EyebrowLabel>
          <MainTitle>
            Valor real para el <span>campo y la industria</span>
          </MainTitle>
          <LeadText>
            En IAGROS, ofrecemos una experiencia valiosa a nuestros clientes
            internos y externos, proporcionando insumos y servicios de alta
            calidad para el sector agropecuario, ambiental y de la construcción.
            Trabajamos con un enfoque en la sustentabilidad y el valor agregado,
            impulsando la productividad y el desarrollo sostenible.
          </LeadText>
        </IntroSection>

        <AccentDivider>
          <Gem size={14} color="#ee7007" />
        </AccentDivider>

        {/* ── Tres pilares ── */}
        <PillarsSection>
          <SectionHeader>
            <SectionEyebrow>Nuestros pilares</SectionEyebrow>
            <SectionTitle>Lo que nos mueve cada día</SectionTitle>
          </SectionHeader>

          <PillarsGrid>
            {PILLARS.map((p) => (
              <PillarCard key={p.title}>
                <PillarIconWrap $color={p.bg}>{p.icon}</PillarIconWrap>
                <PillarTitle>{p.title}</PillarTitle>
                <PillarText>{p.text}</PillarText>
              </PillarCard>
            ))}
          </PillarsGrid>
        </PillarsSection>

        {/* ── Quote ── */}
        <QuoteSection>
          <QuoteInner>
            <QuoteText>
              "Nuestra prioridad es construir relaciones basadas en la
              confianza, la excelencia y el compromiso con el progreso de
              nuestros clientes y comunidades."
            </QuoteText>
            <QuoteAccent>
              <span>Equipo IAGROS</span>
            </QuoteAccent>
          </QuoteInner>
        </QuoteSection>

        {/* ── Valores ── */}
        <ValuesSection>
          <SectionHeader>
            <SectionEyebrow>Nuestro ADN</SectionEyebrow>
            <SectionTitle>Valores que nos definen</SectionTitle>
          </SectionHeader>

          <ValuesGrid>
            {VALUES.map((v) => (
              <ValueCard key={v.num}>
                <ValueNumber>{v.num}</ValueNumber>
                <ValueTitle>{v.title}</ValueTitle>
                <ValueText>{v.text}</ValueText>
              </ValueCard>
            ))}
          </ValuesGrid>
        </ValuesSection>


      </MissionContainer>
    </Layout>
  );
}

export default Mission;
