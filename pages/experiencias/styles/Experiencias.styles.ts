import styled, { keyframes } from 'styled-components';
import { size } from '../../../constants/breakpoints';
import theme from '../../../styles/theme';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const ExperienceContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #fafaf8;
`;

export const MainContent = styled.div`
  width: min(1180px, 100% - 2rem);
  margin: 3rem auto 5rem;
  display: grid;
  gap: 3rem;
  animation: ${fadeUp} 0.7s ease both;

  @media (min-width: ${size.md}px) {
    width: min(1180px, 100% - 4rem);
    margin: 4.5rem auto 7rem;
    gap: 3.5rem;
  }
`;

export const Section = styled.section`
  display: grid;
  gap: 1.25rem;
`;

export const SectionEyebrow = styled.span`
  display: inline-flex;
  width: fit-content;
  padding: 0.4rem 1rem;
  border-radius: 999px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  font-weight: 700;
  text-transform: uppercase;
  color: #2f5e36;
  background: rgba(97, 206, 112, 0.15);
  border: 1px solid rgba(97, 206, 112, 0.3);
`;

export const ExperienceTitle = styled.h1`
  font-family: 'Fraunces', serif;
  font-size: clamp(2rem, 1.2rem + 2.8vw, 3.2rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #1a2e1d;

  span {
    color: ${theme.colors.primary};
  }
`;

export const Lead = styled.p`
  font-family: 'DM Sans', sans-serif;
  max-width: 72ch;
  font-size: clamp(1rem, 0.95rem + 0.3vw, 1.18rem);
  line-height: 1.8;
  color: #4a5e50;
`;

/* ── Meta items ─────────────────────────────────────────────────────────── */

export const MetaList = styled.div`
  display: grid;
  gap: 0.75rem;
  margin-top: 0.5rem;

  @media (min-width: ${size.md}px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const MetaItem = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 1.1rem 1.25rem;
  border-radius: 16px;
  background: #fff;
  border: 1px solid rgba(97, 206, 112, 0.18);
  box-shadow: 0 4px 20px rgba(44, 73, 47, 0.06);
  font-family: 'DM Sans', sans-serif;
  color: #2f2f2f;
  font-size: 0.95rem;
  line-height: 1.4;
`;

export const Badge = styled.span`
  width: fit-content;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${theme.colors.primary};
`;

/* ── Divider ────────────────────────────────────────────────────────────── */

export const DividerGlow = styled.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(238, 112, 7, 0) 0%,
    rgba(238, 112, 7, 0.5) 35%,
    rgba(97, 206, 112, 0.55) 65%,
    rgba(97, 206, 112, 0) 100%
  );
`;

/* ── Story ──────────────────────────────────────────────────────────────── */

export const SectionHeading = styled.h2`
  font-family: 'Fraunces', serif;
  font-size: clamp(1.4rem, 1.1rem + 1.1vw, 2.1rem);
  line-height: 1.2;
  color: #1a2e1d;
`;

export const StoryCard = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 20px;
  background: #fff;
  border: 1px solid rgba(97, 206, 112, 0.18);
  box-shadow: 0 8px 28px rgba(44, 73, 47, 0.08);

  @media (min-width: ${size.md}px) {
    padding: 2rem;
  }
`;

export const StoryText = styled.p`
  font-family: 'DM Sans', sans-serif;
  color: #4a5e50;
  line-height: 1.82;
  font-size: 1.04rem;
  margin: 0;
`;

/* ── Outcomes ───────────────────────────────────────────────────────────── */

export const Outcomes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
`;

export const OutcomeChip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  border-radius: 999px;
  padding: 0.55rem 1rem;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  line-height: 1.2;
  color: #1f4226;
  background: rgba(97, 206, 112, 0.12);
  border: 1px solid rgba(97, 206, 112, 0.28);

  svg {
    color: ${theme.colors.secondary};
    flex-shrink: 0;
  }
`;

/* ── Insight cards ──────────────────────────────────────────────────────── */

export const InsightGrid = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: ${size.md}px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const InsightCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem;
  border-radius: 20px;
  background: #fff;
  border: 1px solid rgba(28, 46, 35, 0.07);
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.05);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s;
  cursor: default;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
    border-color: rgba(238, 112, 7, 0.2);
  }
`;

export const InsightIconWrap = styled.div<{ $color: string }>`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const InsightTitle = styled.h3`
  font-family: 'Fraunces', serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a2e1d;
  margin: 0;
`;

export const InsightDescription = styled.p`
  font-family: 'DM Sans', sans-serif;
  color: #5a7060;
  line-height: 1.65;
  font-size: 0.93rem;
  margin: 0;
`;

/* ── Video section ──────────────────────────────────────────────────────── */

export const VideoSection = styled.section`
  display: grid;
  gap: 1.5rem;
`;

export const VideoGrid = styled.div`
  display: grid;
  gap: 1.25rem;

  @media (min-width: ${size.md}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const VideoCard = styled.article`
  display: grid;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 20px;
  background: #fff;
  border: 1px solid rgba(44, 73, 47, 0.08);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.07);
  transition: box-shadow 0.25s ease;

  &:hover {
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
  }

  @media (min-width: ${size.md}px) {
    padding: 0.9rem;
  }
`;

export const VideoEmbed = styled.iframe`
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 0;
  border-radius: 12px;
`;

export const VideoPlayer = styled.video`
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 0;
  border-radius: 12px;
  background: #111;
`;

export const VideoCaption = styled.p`
  font-family: 'DM Sans', sans-serif;
  color: #5a7060;
  line-height: 1.5;
  font-size: 0.85rem;
  padding: 0 0.25rem 0.25rem;
  margin: 0;
`;
