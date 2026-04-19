import styled, { keyframes } from 'styled-components';
import { size } from '../../../constants/breakpoints';
import theme from '../../../styles/theme';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const VisionContainer = styled.div`
  width: 100%;
  background: #fafaf8;
`;

/* ── Intro ─────────────────────────────────────────────────────────────── */

export const IntroSection = styled.section`
  max-width: 860px;
  margin: 0 auto;
  padding: 5rem 1.5rem 3rem;
  text-align: center;
  animation: ${fadeUp} 0.7s ease both;

  @media (min-width: ${size.md}px) {
    padding: 6rem 2rem 4rem;
  }
`;

export const EyebrowLabel = styled.span`
  display: inline-block;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${theme.colors.secondary};
  background: rgba(97, 206, 112, 0.1);
  border: 1px solid rgba(97, 206, 112, 0.25);
  border-radius: 100px;
  padding: 0.35rem 1rem;
  margin-bottom: 1.5rem;
`;

export const MainTitle = styled.h1`
  font-family: 'Fraunces', serif;
  font-size: clamp(2.4rem, 5vw, 3.8rem);
  font-weight: 700;
  color: #1a2e1d;
  line-height: 1.15;
  margin: 0 0 1.5rem;

  span {
    color: ${theme.colors.secondary};
  }
`;

export const LeadText = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.8;
  color: #4a5e50;
  margin: 0 auto;
  max-width: 700px;
`;

/* ── Split section: texto + stats ───────────────────────────────────────── */

export const SplitSection = styled.section`
  max-width: 1200px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: ${size.md}px) {
    padding: 0 2rem;
    margin-top: 5rem;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 5rem;
  }
`;

export const SplitText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const SplitParagraph = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.05rem;
  line-height: 1.8;
  color: #4a5e50;
  margin: 0;
`;

export const SplitTitle = styled.h2`
  font-family: 'Fraunces', serif;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  color: #1a2e1d;
  margin: 0 0 0.25rem;
  line-height: 1.2;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const StatCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid rgba(28, 46, 35, 0.07);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const StatValue = styled.span`
  font-family: 'Fraunces', serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: ${theme.colors.secondary};
  line-height: 1;
`;

export const StatLabel = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  color: #5a7060;
  line-height: 1.3;
`;

/* ── Cards de visión ────────────────────────────────────────────────────── */

export const CardsSection = styled.section`
  max-width: 1200px;
  margin: 5rem auto 0;
  padding: 0 1.5rem;

  @media (min-width: ${size.md}px) {
    padding: 0 2rem;
    margin-top: 6rem;
  }
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const SectionEyebrow = styled.span`
  display: inline-block;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${theme.colors.primary};
  margin-bottom: 0.75rem;
`;

export const SectionTitle = styled.h2`
  font-family: 'Fraunces', serif;
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 700;
  color: #1a2e1d;
  margin: 0;
  line-height: 1.2;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: ${size.sm}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const VisionCard = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 2rem 1.75rem;
  border: 1px solid rgba(28, 46, 35, 0.07);
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
  }
`;

export const CardIconWrap = styled.div<{ $color: string }>`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const CardTitle = styled.h3`
  font-family: 'Fraunces', serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a2e1d;
  margin: 0;
`;

export const CardText = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  line-height: 1.7;
  color: #5a7060;
  margin: 0;
`;

/* ── Quote ──────────────────────────────────────────────────────────────── */

export const QuoteSection = styled.section`
  background: linear-gradient(135deg, #1a2e1d 0%, #2d4d32 100%);
  margin: 5rem 0 0;
  padding: 5rem 1.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '"';
    position: absolute;
    top: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    font-family: 'Fraunces', serif;
    font-size: 18rem;
    color: rgba(255, 255, 255, 0.03);
    line-height: 1;
    pointer-events: none;
  }

  @media (min-width: ${size.md}px) {
    padding: 7rem 2rem;
  }
`;

export const QuoteInner = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const QuoteText = styled.blockquote`
  font-family: 'Fraunces', serif;
  font-size: clamp(1.3rem, 3vw, 2rem);
  font-weight: 400;
  font-style: italic;
  line-height: 1.6;
  color: #fff;
  margin: 0 0 2rem;
`;

export const QuoteAccent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  span {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${theme.colors.secondary};
  }

  &::before,
  &::after {
    content: '';
    width: 40px;
    height: 1px;
    background: ${theme.colors.secondary};
  }
`;

/* ── Bottom spacer ──────────────────────────────────────────────────────── */

export const BottomSpacer = styled.div`
  height: 6rem;

  @media (min-width: ${size.md}px) {
    height: 8rem;
  }
`;
