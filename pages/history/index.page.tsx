import HeroSection from '../../components/HeroSection/HeroSection';
import Layout from '../../components/Layout/Layout';
import {
  DiffGrid,
  DiffHeader,
  DiffInner,
  DiffItem,
  DiffItemDesc,
  DiffItemTitle,
  DiffNumber,
  DiffRule,
  DiffSection,
  DiffTitle,
  FoundingStrip,
  LeadContent,
  LeadSection,
  LeadText,
  LeadTitle,
  MissionBlock,
  MissionText,
  PageWrapper,
  QuoteMark,
  QuoteSection,
  QuoteText,
  StoryCaption,
  StoryImageWrap,
  StoryInner,
  StoryParagraph,
  StorySection,
  StoryTextWrap,
  StripDot,
  StripText,
  YearBlock,
  YearLabel,
  YearNumber,
  YearSuffix
} from './styles/History.styles';

const differentiators = [
  {
    title: 'Calidad Garantizada',
    description:
      'Trabajamos con los mejores insumos del mercado para garantizar resultados óptimos en cada cultivo y proyecto.'
  },
  {
    title: 'Asesoría Personalizada',
    description:
      'Nuestro equipo interdisciplinario guía a cada cliente según sus necesidades específicas y condiciones de campo.'
  },
  {
    title: 'Innovación y Sustentabilidad',
    description:
      'Incorporamos tecnologías modernas y prácticas responsables para contribuir al desarrollo sostenible del agro.'
  },
  {
    title: 'Cobertura Nacional e Internacional',
    description:
      'Desde la Sabana Occidental, atendemos clientes en todo Colombia y más allá con soluciones de primer nivel.'
  }
];

function History() {
  return (
    <Layout>
      <HeroSection
        title=""
        subtitle=""
        backgroundImage="https://iagros.com/wp-content/uploads/2024/09/Nuestra-historia.png"
        height="340px"
        overlay={false}
        overlayOpacity={0.6}
        hideTextOnMobile={true}
        mobileBackgroundPosition="center top"
        backgroundSize="cover"
        mobileBackgroundSize="contain"
      />

      <PageWrapper>
        {/* Founding strip */}
        <FoundingStrip>
          <StripText>Fundada en 1995</StripText>
          <StripDot>·</StripDot>
          <StripText>Sabana Occidental, Colombia</StripText>
          <StripDot>·</StripDot>
          <StripText>Sector Agropecuario, Ambiental y Construcción</StripText>
        </FoundingStrip>

        {/* Lead — year + intro */}
        <LeadSection>
          <YearBlock>
            <YearLabel>Años de experiencia</YearLabel>
            <YearNumber>
              26<sup>+</sup>
            </YearNumber>
            <YearSuffix>desde 1995</YearSuffix>
          </YearBlock>

          <LeadContent>
            <LeadTitle>
              Una empresa construida sobre el campo colombiano
            </LeadTitle>
            <LeadText>
              Desde 1995, en Iagro nos hemos dedicado a fortalecer el sector
              agropecuario, ambiental y de la construcción en Colombia. Lo que
              comenzó como un proyecto enfocado en ofrecer insumos básicos se ha
              transformado en una empresa líder, reconocida por su compromiso,
              calidad y vocación de servicio.
            </LeadText>
          </LeadContent>
        </LeadSection>

        {/* Story with image */}
        <StorySection>
          <StoryInner>
            <div>
              <StoryImageWrap>
                <img
                  src="https://iagros.com/wp-content/uploads/2024/11/control-biologico-3.png"
                  alt="Instalaciones de Iagro en la Sabana Occidental"
                />
              </StoryImageWrap>
              <StoryCaption>
                Instalaciones · Sabana Occidental, Colombia
              </StoryCaption>
            </div>

            <StoryTextWrap>
              <StoryParagraph>
                Ubicados estratégicamente en la Sabana Occidental, nuestra
                trayectoria de más de 26 años refleja un constante esfuerzo por
                adaptarnos a los cambios del mercado, incorporar tecnologías
                innovadoras y responder a las necesidades de nuestros clientes.
              </StoryParagraph>
              <StoryParagraph>
                Hoy, Iagro es un referente en el sector gracias a nuestra
                combinación de experiencia, respaldo técnico y una propuesta de
                valor enfocada en la asesoría integral. Nuestra propuesta se
                basa en ofrecer productos de calidad y un acompañamiento que
                asegure el éxito de cada cliente.
              </StoryParagraph>
            </StoryTextWrap>
          </StoryInner>
        </StorySection>

        {/* Pull quote */}
        <QuoteSection>
          <QuoteMark>"</QuoteMark>
          <QuoteText>
            Seguimos avanzando con un propósito claro: ser un aliado estratégico
            para los productores y empresas que buscan soluciones sostenibles y
            de calidad.
          </QuoteText>
        </QuoteSection>

        {/* Differentiators */}
        <DiffSection>
          <DiffInner>
            <DiffHeader>
              <DiffTitle>Lo que nos hace diferentes</DiffTitle>
              <DiffRule />
            </DiffHeader>
            <DiffGrid>
              {differentiators.map((item, i) => (
                <DiffItem key={i}>
                  <DiffNumber>0{i + 1}</DiffNumber>
                  <div>
                    <DiffItemTitle>{item.title}</DiffItemTitle>
                    <DiffItemDesc>{item.description}</DiffItemDesc>
                  </div>
                </DiffItem>
              ))}
            </DiffGrid>
          </DiffInner>
        </DiffSection>

        {/* Mission */}
        <MissionBlock>
          <MissionText>
            Tu éxito es <em>nuestra prioridad</em>. En Iagro, no solo somos
            proveedores, somos tus <em>aliados estratégicos</em> en el camino
            hacia la <em>productividad</em> y la <em>sustentabilidad</em>.
          </MissionText>
        </MissionBlock>
      </PageWrapper>
    </Layout>
  );
}

export default History;
