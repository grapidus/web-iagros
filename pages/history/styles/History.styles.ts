import styled from 'styled-components';
import { size } from '../../../constants/breakpoints';

const ORANGE = '#ee7007';
const DARK = '#1e1c19';
const WARM_WHITE = '#faf8f5';
const WARM_LIGHT = '#f0ede8';
const WARM_MID = '#c8c2b8';
const MUTED = '#7a766e';

/* ─── Page wrapper ─── */
export const PageWrapper = styled.div`
  background: ${WARM_WHITE};
  color: ${DARK};
`;

/* ─── Founding strip ─── */
export const FoundingStrip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  padding: 0.9rem 1.5rem;
  background: ${DARK};
  overflow: hidden;
`;

export const StripText = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${WARM_MID};
  white-space: nowrap;

  @media (min-width: ${size.md}px) {
    font-size: 0.72rem;
    letter-spacing: 0.2em;
  }
`;

export const StripDot = styled.span`
  color: ${ORANGE};
  font-size: 1rem;
  line-height: 1;
  flex-shrink: 0;

  /* hide separators when strip wraps to avoid orphan dots */
  @media (max-width: ${size.sm - 1}px) {
    display: none;
  }
`;

/* ─── Lead section ─── */
export const LeadSection = styled.section`
  max-width: 1160px;
  margin: 0 auto;
  padding: clamp(2rem, 6vw, 6rem) clamp(1.25rem, 4vw, 3rem);
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: ${size.md}px) {
    grid-template-columns: 200px 1fr;
    align-items: start;
    gap: 4rem;
    padding: clamp(3rem, 8vw, 6rem) clamp(1.5rem, 4vw, 3rem);
  }

  @media (min-width: ${size.lg}px) {
    grid-template-columns: 240px 1fr;
  }
`;

export const YearBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const YearLabel = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${ORANGE};
  margin-bottom: 0.4rem;
`;

export const YearNumber = styled.span`
  font-family: 'Fraunces', serif;
  font-size: clamp(3.5rem, 12vw, 9rem);
  font-weight: 700;
  line-height: 0.88;
  color: ${DARK};

  sup {
    font-size: 0.38em;
    font-weight: 300;
    vertical-align: super;
    color: ${ORANGE};
  }
`;

export const YearSuffix = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${MUTED};
  margin-top: 0.6rem;
`;

export const LeadContent = styled.div`
  padding-top: 0.5rem;

  @media (min-width: ${size.md}px) {
    padding-top: 1.2rem;
    border-left: 1px solid ${WARM_MID};
    padding-left: 3rem;
  }
`;

export const LeadTitle = styled.h1`
  font-family: 'Fraunces', serif;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 600;
  line-height: 1.2;
  color: ${DARK};
  margin-bottom: 1.2rem;
`;

export const LeadText = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(1rem, 1.8vw, 1.1rem);
  line-height: 1.85;
  color: ${MUTED};
  max-width: 580px;
`;

/* ─── Story section ─── */
export const StorySection = styled.section`
  background: ${WARM_LIGHT};
  padding: clamp(3rem, 7vw, 5rem) 0;
`;

export const StoryInner = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 4vw, 3rem);
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;

  @media (min-width: ${size.md}px) {
    grid-template-columns: 55fr 45fr;
    gap: 4rem;
    align-items: center;
  }
`;

export const StoryImageWrap = styled.div`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  aspect-ratio: 4 / 3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.6s ease;
  }

  &:hover img {
    transform: scale(1.03);
  }
`;

export const StoryCaption = styled.span`
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.72rem;
  color: ${MUTED};
  letter-spacing: 0.08em;
  margin-top: 0.75rem;
`;

export const StoryTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

export const StoryParagraph = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(0.95rem, 1.6vw, 1.05rem);
  line-height: 1.85;
  color: ${DARK};
`;

/* ─── Pull quote ─── */
export const QuoteSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: clamp(2.5rem, 7vw, 6rem) clamp(1.25rem, 4vw, 3rem);
  text-align: center;
`;

export const QuoteMark = styled.span`
  display: block;
  font-family: 'Fraunces', serif;
  font-size: 6rem;
  line-height: 0.6;
  color: ${ORANGE};
  margin-bottom: 0.5rem;
  font-style: italic;
`;

export const QuoteText = styled.blockquote`
  font-family: 'Fraunces', serif;
  font-size: clamp(1.3rem, 2.8vw, 1.9rem);
  font-style: italic;
  font-weight: 400;
  line-height: 1.55;
  color: ${DARK};
  margin: 0;
`;

/* ─── Differentiators ─── */
export const DiffSection = styled.section`
  background: ${DARK};
  padding: clamp(3.5rem, 8vw, 6rem) 0;
`;

export const DiffInner = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 4vw, 3rem);
`;

export const DiffHeader = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (min-width: ${size.md}px) {
    margin-bottom: 4rem;
  }
`;

export const DiffTitle = styled.h2`
  font-family: 'Fraunces', serif;
  font-size: clamp(1.6rem, 3.5vw, 2.4rem);
  font-weight: 600;
  color: #fff;
  margin: 0;
`;

export const DiffRule = styled.div`
  flex: 1;
  height: 1px;
  background: #3a3832;
  display: none;

  @media (min-width: ${size.md}px) {
    display: block;
  }
`;

export const DiffGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;

  @media (min-width: ${size.md}px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const DiffItem = styled.div`
  padding: 2rem 0;
  border-top: 1px solid #3a3832;
  display: grid;
  grid-template-columns: 3rem 1fr;
  gap: 1.5rem;
  align-items: start;

  @media (min-width: ${size.md}px) {
    padding: 2.5rem 2.5rem 2.5rem 0;

    &:nth-child(even) {
      padding-left: 2.5rem;
      padding-right: 0;
      border-left: 1px solid #3a3832;
    }
  }
`;

export const DiffNumber = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${ORANGE};
  letter-spacing: 0.1em;
  padding-top: 0.2rem;
`;

export const DiffItemTitle = styled.h3`
  font-family: 'Fraunces', serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 0.6rem;
`;

export const DiffItemDesc = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.92rem;
  line-height: 1.7;
  color: ${WARM_MID};
  margin: 0;
`;

/* ─── Mission block ─── */
export const MissionBlock = styled.section`
  background: ${WARM_WHITE};
  padding: clamp(3.5rem, 9vw, 7rem) clamp(1.5rem, 4vw, 3rem);
  text-align: center;
`;

export const MissionText = styled.p`
  font-family: 'Fraunces', serif;
  font-size: clamp(1.4rem, 3vw, 2.1rem);
  font-weight: 300;
  font-style: italic;
  line-height: 1.55;
  color: ${DARK};
  max-width: 820px;
  margin: 0 auto;

  em {
    font-style: normal;
    font-weight: 600;
    color: ${ORANGE};
  }
`;
