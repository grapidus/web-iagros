import styled, { keyframes } from 'styled-components';
import { device } from '../../../constants/breakpoints';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

// ─── Page shell ────────────────────────────────────────────────────────────────

export const BlogPage = styled.div`
  min-height: 100vh;
  background-color: #fdfcfa;
`;

// ─── Hero ───────────────────────────────────────────────────────────────────────

export const BlogHero = styled.section`
  background-color: #1c2e23;
  padding: clamp(3rem, 6vw, 5rem) 0 clamp(2.5rem, 5vw, 4rem);
`;

export const BlogHeroInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1.25rem, 4vw, 3rem);
`;

export const BlogEyebrow = styled.span`
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #ee7007;
  margin-bottom: 1rem;
`;

export const BlogHeroTitle = styled.h1`
  font-family: 'Fraunces', serif;
  font-size: clamp(2rem, 5vw, 3.6rem);
  font-weight: 700;
  color: #f4f0eb;
  margin: 0 0 0.75rem;
  line-height: 1.1;
  max-width: 18ch;
`;

export const BlogHeroSubtitle = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(0.95rem, 1.5vw, 1.05rem);
  color: rgba(244, 240, 235, 0.65);
  margin: 0;
  max-width: 48ch;
  line-height: 1.65;
`;

// ─── Controls bar ───────────────────────────────────────────────────────────────

export const ControlsBar = styled.div`
  background-color: #ffffff;
  border-bottom: 1px solid rgba(28, 46, 35, 0.08);
  position: sticky;
  top: 80px; /* altura del navbar */
  z-index: 100;
`;

export const ControlsInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1.25rem, 4vw, 3rem);
  display: flex;
  flex-direction: column;
  gap: 0;

  @media ${device.md} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

// ─── Main content ───────────────────────────────────────────────────────────────

export const BlogMain = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(2rem, 4vw, 3.5rem) clamp(1.25rem, 4vw, 3rem);
`;

// ─── Grid ───────────────────────────────────────────────────────────────────────

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.25rem, 2.5vw, 1.75rem);
  animation: ${fadeUp} 0.35s cubic-bezier(0.22, 1, 0.36, 1);

  @media ${device.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

// ─── Pagination ─────────────────────────────────────────────────────────────────

export const PaginationRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: clamp(2rem, 4vw, 3rem);
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  width: 38px;
  height: 38px;
  border-radius: 8px;
  border: 1px solid ${({ $active }) => ($active ? '#ee7007' : 'rgba(28,46,35,0.15)')};
  background: ${({ $active }) => ($active ? '#ee7007' : 'transparent')};
  color: ${({ $active }) => ($active ? '#ffffff' : '#1c2e23')};
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    border-color: #ee7007;
    color: ${({ $active }) => ($active ? '#ffffff' : '#ee7007')};
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
`;

// ─── Results count ──────────────────────────────────────────────────────────────

export const ResultsCount = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  color: #7a8c82;
  margin: 0 0 clamp(1.5rem, 3vw, 2rem);
`;
