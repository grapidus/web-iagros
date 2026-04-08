import styled from 'styled-components';
import { size } from '../../../constants/breakpoints';
import theme from '../../../styles/theme';

export const ExperienceContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background:
    radial-gradient(
      circle at 12% 12%,
      rgba(97, 206, 112, 0.2) 0%,
      rgba(97, 206, 112, 0) 35%
    ),
    radial-gradient(
      circle at 88% 18%,
      rgba(238, 112, 7, 0.16) 0%,
      rgba(238, 112, 7, 0) 34%
    ),
    linear-gradient(180deg, #f8fbf8 0%, #f5f5f5 48%, #ffffff 100%);
`;

export const MainContent = styled.div`
  width: min(1180px, 100% - 2rem);
  margin: 2rem auto 4rem;
  display: grid;
  gap: 2.25rem;

  @media (min-width: ${size.md}px) {
    width: min(1180px, 100% - 4rem);
    margin: 3.5rem auto 5rem;
    gap: 2.75rem;
  }
`;

export const Section = styled.section`
  display: grid;
  gap: 1rem;
`;

export const SectionEyebrow = styled.span`
  display: inline-flex;
  width: fit-content;
  padding: 0.45rem 0.85rem;
  border-radius: 999px;
  font-size: 0.76rem;
  letter-spacing: 0.12em;
  font-weight: 700;
  color: #2f5e36;
  background: rgba(97, 206, 112, 0.2);
`;

export const ExperienceTitle = styled.h1`
  font-size: clamp(1.85rem, 1.2rem + 2.4vw, 3rem);
  line-height: 1.1;
  letter-spacing: -0.015em;
  color: ${theme.colors.text};
`;

export const Lead = styled.p`
  max-width: 76ch;
  font-size: clamp(1.02rem, 0.95rem + 0.35vw, 1.24rem);
  line-height: 1.78;
  color: #3b3b3b;
`;

export const MetaList = styled.div`
  display: grid;
  gap: 0.75rem;
  margin-top: 0.2rem;

  @media (min-width: ${size.md}px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const MetaItem = styled.article`
  display: grid;
  gap: 0.55rem;
  padding: 1rem 1rem 1.05rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(97, 206, 112, 0.2);
  box-shadow: 0 6px 24px rgba(44, 73, 47, 0.08);
  color: #2f2f2f;
`;

export const Badge = styled.span`
  width: fit-content;
  font-size: 0.73rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: ${theme.colors.primary};
`;

export const DividerGlow = styled.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(238, 112, 7, 0) 0%,
    rgba(238, 112, 7, 0.55) 35%,
    rgba(97, 206, 112, 0.6) 65%,
    rgba(97, 206, 112, 0) 100%
  );
`;

export const SectionHeading = styled.h2`
  font-size: clamp(1.35rem, 1.05rem + 1.1vw, 2.05rem);
  line-height: 1.25;
  color: #213326;
`;

export const StoryCard = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1.25rem;
  border-radius: 18px;
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.92),
    rgba(248, 252, 248, 0.9)
  );
  border: 1px solid rgba(97, 206, 112, 0.2);
  box-shadow: 0 12px 30px rgba(44, 73, 47, 0.1);

  @media (min-width: ${size.md}px) {
    padding: 1.6rem;
  }
`;

export const StoryText = styled.p`
  color: #333;
  line-height: 1.82;
  font-size: 1.04rem;
`;

export const Outcomes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
`;

export const OutcomeChip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 999px;
  padding: 0.58rem 0.95rem;
  font-size: 0.9rem;
  line-height: 1.2;
  color: #1f4226;
  background: rgba(97, 206, 112, 0.17);
  border: 1px solid rgba(97, 206, 112, 0.3);

  &::before {
    content: '•';
    color: ${theme.colors.primary};
    font-size: 1rem;
    line-height: 1;
  }
`;

export const InsightGrid = styled.div`
  display: grid;
  gap: 0.9rem;

  @media (min-width: ${size.md}px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const InsightCard = styled.article`
  position: relative;
  padding: 1rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.86);
  border: 1px solid rgba(238, 112, 7, 0.2);
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      145deg,
      rgba(238, 112, 7, 0.08),
      rgba(97, 206, 112, 0.05)
    );
    pointer-events: none;
  }
`;

export const InsightTitle = styled.h3`
  position: relative;
  z-index: 1;
  margin-bottom: 0.45rem;
  color: #27442d;
  font-size: 1.05rem;
`;

export const InsightDescription = styled.p`
  position: relative;
  z-index: 1;
  color: #3f3f3f;
  line-height: 1.62;
  font-size: 0.96rem;
`;

export const VideoSection = styled.section`
  display: grid;
  gap: 1rem;
`;

export const VideoGrid = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: ${size.md}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const VideoCard = styled.article`
  display: grid;
  gap: 0.7rem;
  padding: 0.65rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(44, 73, 47, 0.12);
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.08);

  @media (min-width: ${size.md}px) {
    padding: 0.8rem;
  }
`;

export const VideoEmbed = styled.iframe`
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 0;
  border-radius: 10px;
`;

export const VideoPlayer = styled.video`
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 0;
  border-radius: 10px;
  background: #111;
`;

export const VideoCaption = styled.p`
  color: #4a4a4a;
  line-height: 1.5;
  font-size: 0.88rem;
  padding: 0 0.2rem 0.2rem;
`;
