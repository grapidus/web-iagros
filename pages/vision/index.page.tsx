import { Leaf, Lightbulb, Users } from 'lucide-react';
import HeroSection from '../../components/HeroSection/HeroSection';
import Layout from '../../components/Layout/Layout';
import {
  BottomSpacer,
  CardIconWrap,
  CardText,
  CardTitle,
  CardsGrid,
  CardsSection,
  EyebrowLabel,
  IntroSection,
  LeadText,
  MainTitle,
  QuoteAccent,
  QuoteInner,
  QuoteSection,
  QuoteText,
  SectionEyebrow,
  SectionHeader,
  SectionTitle,
  SplitParagraph,
  SplitSection,
  SplitText,
  SplitTitle,
  StatCard,
  StatLabel,
  StatValue,
  StatsGrid,
  VisionCard,
  VisionContainer
} from './styles/Vision.styles';

const CARDS = [
  {
    icon: <Leaf size={26} color="#fff" strokeWidth={2} />,
    bg: 'linear-gradient(135deg, #3d8b4a, #61CE70)',
    title: 'Sustentabilidad',
    text: 'Desarrollamos productos y servicios que promueven prácticas sostenibles, garantizando un futuro mejor para el sector y las comunidades.'
  },
  {
    icon: <Lightbulb size={26} color="#fff" strokeWidth={2} />,
    bg: 'linear-gradient(135deg, #c05e00, #ee7007)',
    title: 'Innovación',
    text: 'Buscamos constantemente nuevas soluciones tecnológicas que mejoren la eficiencia y productividad de nuestros clientes en todos los sectores.'
  },
  {
    icon: <Users size={26} color="#fff" strokeWidth={2} />,
    bg: 'linear-gradient(135deg, #1a2e1d, #2d5234)',
    title: 'Equipo Interdisciplinario',
    text: 'Profesionales altamente capacitados en diversas áreas que trabajan en conjunto para ofrecer soluciones integrales y a la medida.'
  }
];

const STATS = [
  { value: '3+', label: 'Sectores atendidos' },
  { value: '100%', label: 'Enfoque en calidad' },
  { value: '∞', label: 'Compromiso sostenible' },
  { value: '1er', label: 'Lugar como aliado estratégico' }
];

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

        {/* ── Intro ── */}
        <IntroSection>
          <EyebrowLabel>Hacia dónde vamos</EyebrowLabel>
          <MainTitle>
            Líderes en soluciones <span>sostenibles</span>
          </MainTitle>
          <LeadText>
            Ser reconocidos como la empresa líder en soluciones técnicas
            integrales para los sectores agropecuario, ambiental y de la
            construcción, con un equipo interdisciplinario de alto nivel y
            productos innovadores que impulsen la sustentabilidad.
          </LeadText>
        </IntroSection>

        {/* ── Split: texto + stats ── */}
        <SplitSection>
          <SplitText>
            <SplitTitle>Un aliado estratégico para el futuro</SplitTitle>
            <SplitParagraph>
              Nuestro objetivo es convertirnos en el referente de confianza para
              quienes buscan crecer de manera sostenible. Acompañamos a nuestros
              clientes a alcanzar la productividad y la eficiencia en sus
              proyectos, mientras contribuimos al desarrollo de las comunidades y
              al cuidado del medio ambiente.
            </SplitParagraph>
            <SplitParagraph>
              Nos proyectamos como el aliado que entiende el campo, la industria
              y el entorno: tres mundos que IAGROS conecta con conocimiento,
              tecnología y compromiso genuino.
            </SplitParagraph>
          </SplitText>

          <StatsGrid>
            {STATS.map((s) => (
              <StatCard key={s.label}>
                <StatValue>{s.value}</StatValue>
                <StatLabel>{s.label}</StatLabel>
              </StatCard>
            ))}
          </StatsGrid>
        </SplitSection>

        {/* ── Cards ── */}
        <CardsSection>
          <SectionHeader>
            <SectionEyebrow>Nuestros ejes</SectionEyebrow>
            <SectionTitle>Lo que guía nuestra visión</SectionTitle>
          </SectionHeader>

          <CardsGrid>
            {CARDS.map((c) => (
              <VisionCard key={c.title}>
                <CardIconWrap $color={c.bg}>{c.icon}</CardIconWrap>
                <CardTitle>{c.title}</CardTitle>
                <CardText>{c.text}</CardText>
              </VisionCard>
            ))}
          </CardsGrid>
        </CardsSection>

        {/* ── Quote ── */}
        <QuoteSection>
          <QuoteInner>
            <QuoteText>
              "Nos proyectamos como un aliado estratégico para todos aquellos
              que buscan soluciones sostenibles y eficientes en los sectores
              agropecuario, ambiental y de la construcción."
            </QuoteText>
            <QuoteAccent>
              <span>IAGROS · Visión</span>
            </QuoteAccent>
          </QuoteInner>
        </QuoteSection>

        <BottomSpacer />
      </VisionContainer>
    </Layout>
  );
}

export default Vision;
