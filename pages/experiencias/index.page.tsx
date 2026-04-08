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

function Experiencias() {
  const outcomes = [
    'Control preventivo cada 15 dias durante todo el ciclo',
    'Reduccion de danos por babosas sin enfoques agresivos',
    'Mayor estabilidad en salud del cultivo a largo plazo',
    'Manejo natural para sostener el equilibrio del ecosistema'
  ];

  const videos = [
    {
      title: 'Experiencia de campo: control de babosas con Aguaji',
      type: 'youtube',
      src: 'https://www.youtube.com/embed/q0YNlXQ8_zc',
      caption:
        'Registro audiovisual del manejo preventivo y aplicacion en campo.'
    },
    {
      title: 'Experiencia: insumos para produccion sustentable',
      type: 'mp4',
      src: 'https://iagros.com/wp-content/uploads/2024/10/Experiencia-insumos-produccion-sustentable.mp4',
      caption:
        'Video complementario del proceso y resultados en produccion sustentable.'
    }
  ] as const;

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
          <Section>
            <SectionEyebrow>EXPERIENCIAS REALES</SectionEyebrow>
            <ExperienceTitle>
              Insumos para la produccion sustentable
            </ExperienceTitle>
            <Lead>
              Conocemos resultados cuando el manejo preventivo se vuelve
              disciplina diaria. Esta experiencia documenta como un control
              natural, aplicado de manera constante, protege el cultivo sin
              comprometer el equilibrio del entorno.
            </Lead>

            <MetaList>
              <MetaItem>
                <Badge>Productor</Badge>
                Caso compartido por el senor Wilson
              </MetaItem>
              <MetaItem>
                <Badge>Frecuencia</Badge>
                Aplicacion cada 15 dias
              </MetaItem>
              <MetaItem>
                <Badge>Enfoque</Badge>
                Manejo preventivo y control natural
              </MetaItem>
            </MetaList>
          </Section>

          <DividerGlow />

          <Section>
            <SectionHeading>
              Experiencia en control de babosas en cultivos con Aguaji
            </SectionHeading>
            <StoryCard>
              <StoryText>
                El metodo consiste en aplicar el control de babosas desde el
                inicio hasta el final del ciclo de crecimiento. La constancia en
                la aplicacion cada 15 dias ha permitido mantener a raya la plaga
                y reducir el riesgo de danos acumulados en el cultivo.
              </StoryText>
              <StoryText>
                La experiencia del senor Wilson resalta la importancia de un
                manejo preventivo sostenido en el tiempo. Este tipo de
                intervencion ayuda a conservar la salud y el rendimiento del
                cultivo, promoviendo un desarrollo optimo de las plantas en un
                ecosistema mas equilibrado.
              </StoryText>
            </StoryCard>

            <Outcomes>
              {outcomes.map((item, index) => (
                <OutcomeChip key={index}>{item}</OutcomeChip>
              ))}
            </Outcomes>
          </Section>

          <Section>
            <SectionHeading>Claves tecnicas de esta practica</SectionHeading>
            <InsightGrid>
              <InsightCard>
                <InsightTitle>Prevencion continua</InsightTitle>
                <InsightDescription>
                  Iniciar temprano evita que la plaga escale y complique etapas
                  criticas del cultivo.
                </InsightDescription>
              </InsightCard>

              <InsightCard>
                <InsightTitle>Ritmo de aplicacion</InsightTitle>
                <InsightDescription>
                  La frecuencia fija cada 15 dias mantiene cobertura estable y
                  facilita seguimiento en campo.
                </InsightDescription>
              </InsightCard>

              <InsightCard>
                <InsightTitle>Control natural</InsightTitle>
                <InsightDescription>
                  Se prioriza el equilibrio biologico para reducir danos sin
                  estrategias invasivas.
                </InsightDescription>
              </InsightCard>
            </InsightGrid>
          </Section>

          <VideoSection>
            <SectionHeading>Videos de la experiencia</SectionHeading>
            <VideoGrid>
              {videos.map((video, index) => (
                <VideoCard key={index}>
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
