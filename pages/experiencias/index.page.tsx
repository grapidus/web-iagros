import { CheckCircle, RefreshCw, ShieldCheck, Sprout } from 'lucide-react';
import HeroSection from '../../components/HeroSection/HeroSection';
import Layout from '../../components/Layout/Layout';
import {
  Badge,
  DividerGlow,
  ExperienceContainer,
  ExperienceTitle,
  InsightCard,
  InsightDescription,
  InsightGrid,
  InsightIconWrap,
  InsightTitle,
  Lead,
  MainContent,
  MetaItem,
  MetaList,
  OutcomeChip,
  Outcomes,
  Section,
  SectionEyebrow,
  SectionHeading,
  StoryCard,
  StoryText,
  VideoCaption,
  VideoCard,
  VideoEmbed,
  VideoGrid,
  VideoPlayer,
  VideoSection
} from './styles/Experiencias.styles';

const INSIGHTS = [
  {
    icon: <Sprout size={22} color="#fff" strokeWidth={2} />,
    bg: 'linear-gradient(135deg, #3d8b4a, #61CE70)',
    title: 'Prevención continua',
    text: 'Iniciar temprano evita que la plaga escale y complique etapas críticas del cultivo.'
  },
  {
    icon: <RefreshCw size={22} color="#fff" strokeWidth={2} />,
    bg: 'linear-gradient(135deg, #c05e00, #ee7007)',
    title: 'Ritmo de aplicación',
    text: 'La frecuencia fija cada 15 días mantiene cobertura estable y facilita el seguimiento en campo.'
  },
  {
    icon: <ShieldCheck size={22} color="#fff" strokeWidth={2} />,
    bg: 'linear-gradient(135deg, #1a2e1d, #2d5234)',
    title: 'Control natural',
    text: 'Se prioriza el equilibrio biológico para reducir daños sin estrategias invasivas.'
  }
];

const outcomes = [
  'Control preventivo cada 15 días durante todo el ciclo',
  'Reducción de daños por babosas sin enfoques agresivos',
  'Mayor estabilidad en salud del cultivo a largo plazo',
  'Manejo natural para sostener el equilibrio del ecosistema'
];

const videos = [
  {
    title: 'Experiencia de campo: control de babosas con Aguaji',
    type: 'youtube',
    src: 'https://www.youtube.com/embed/q0YNlXQ8_zc',
    caption: 'Registro audiovisual del manejo preventivo y aplicación en campo.'
  },
  {
    title: 'Experiencia: insumos para producción sustentable',
    type: 'mp4',
    src: 'https://iagros.com/wp-content/uploads/2024/10/Experiencia-insumos-produccion-sustentable.mp4',
    caption: 'Video complementario del proceso y resultados en producción sustentable.'
  }
] as const;

function Experiencias() {
  return (
    <Layout>
      <HeroSection
        title=""
        subtitle=""
        backgroundImage="https://iagros.com/wp-content/uploads/2024/11/control-biologico-3.png"
        height="300px"
        overlay={true}
        overlayOpacity={0.35}
        hideTextOnMobile={true}
        mobileBackgroundPosition="center center"
        backgroundSize="cover"
        mobileBackgroundSize="cover"
      />

      <ExperienceContainer>
        <MainContent>

          {/* ── Intro ── */}
          <Section>
            <SectionEyebrow>Experiencias reales</SectionEyebrow>
            <ExperienceTitle>
              Insumos para la producción <span>sustentable</span>
            </ExperienceTitle>
            <Lead>
              Conocemos resultados cuando el manejo preventivo se vuelve
              disciplina diaria. Esta experiencia documenta cómo un control
              natural, aplicado de manera constante, protege el cultivo sin
              comprometer el equilibrio del entorno.
            </Lead>

            <MetaList>
              <MetaItem>
                <Badge>Productor</Badge>
                Caso compartido por el señor Wilson
              </MetaItem>
              <MetaItem>
                <Badge>Frecuencia</Badge>
                Aplicación cada 15 días
              </MetaItem>
              <MetaItem>
                <Badge>Enfoque</Badge>
                Manejo preventivo y control natural
              </MetaItem>
            </MetaList>
          </Section>

          <DividerGlow />

          {/* ── Historia ── */}
          <Section>
            <SectionHeading>
              Control de babosas en cultivos con Aguaji
            </SectionHeading>
            <StoryCard>
              <StoryText>
                El método consiste en aplicar el control de babosas desde el
                inicio hasta el final del ciclo de crecimiento. La constancia en
                la aplicación cada 15 días ha permitido mantener a raya la plaga
                y reducir el riesgo de daños acumulados en el cultivo.
              </StoryText>
              <StoryText>
                La experiencia del señor Wilson resalta la importancia de un
                manejo preventivo sostenido en el tiempo. Este tipo de
                intervención ayuda a conservar la salud y el rendimiento del
                cultivo, promoviendo un desarrollo óptimo de las plantas en un
                ecosistema más equilibrado.
              </StoryText>
            </StoryCard>

            <Outcomes>
              {outcomes.map((item, i) => (
                <OutcomeChip key={i}>
                  <CheckCircle size={14} />
                  {item}
                </OutcomeChip>
              ))}
            </Outcomes>
          </Section>

          {/* ── Claves técnicas ── */}
          <Section>
            <SectionHeading>Claves técnicas de esta práctica</SectionHeading>
            <InsightGrid>
              {INSIGHTS.map((ins) => (
                <InsightCard key={ins.title}>
                  <InsightIconWrap $color={ins.bg}>{ins.icon}</InsightIconWrap>
                  <InsightTitle>{ins.title}</InsightTitle>
                  <InsightDescription>{ins.text}</InsightDescription>
                </InsightCard>
              ))}
            </InsightGrid>
          </Section>

          {/* ── Videos ── */}
          <VideoSection>
            <SectionHeading>Videos de la experiencia</SectionHeading>
            <VideoGrid>
              {videos.map((video, i) => (
                <VideoCard key={i}>
                  {video.type === 'youtube' ? (
                    <VideoEmbed
                      src={video.src}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <VideoPlayer controls preload="metadata">
                      <source src={video.src} type="video/mp4" />
                      Tu navegador no soporta video HTML5.
                    </VideoPlayer>
                  )}
                  <VideoCaption>{video.caption}</VideoCaption>
                </VideoCard>
              ))}
            </VideoGrid>
          </VideoSection>

        </MainContent>
      </ExperienceContainer>
    </Layout>
  );
}

export default Experiencias;
