import styled, { css } from 'styled-components';
import { device } from '../../../../../constants/breakpoints';
import theme from '../../../../../styles/theme';

const reducedMotion = css`
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    animation: none;
  }
`;

export const GalleryContainer = styled.section`
  position: relative;
  width: 100%;
  background: #ffffff;
  padding: 56px 0px 56px;

  &::before {
    content: '';
    position: absolute;
    inset: 0 0 auto;
    height: 1px;
    background: rgba(28, 46, 35, 0.1);
  }
`;

export const GalleryHeader = styled.div`
  position: relative;
  z-index: 1;
  text-align: left;
  margin: 0 auto clamp(2.1rem, 4.2vw, 3rem);
  padding: 0 clamp(1.25rem, 4vw, 3rem);
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const GalleryEyebrow = styled.span`
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${theme.colors.primary};
  margin-bottom: 0.75rem;
`;

export const GalleryTitle = styled.h2`
  font-family: 'Fraunces', serif;
  font-size: clamp(1.85rem, 3.8vw, 2.8rem);
  margin: 0;
  color: #1f2f25;
  font-weight: 600;
  line-height: 1.16;
  max-width: 20ch;
  text-wrap: balance;
`;

export const GallerySubtitle = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(0.95rem, 1.2vw, 1.04rem);
  color: #3f5648;
  max-width: 52ch;
  margin: 0;
  line-height: 1.6;
`;

export const GalleryGrid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(0.95rem, 1.8vw, 1.25rem);
  padding: 0 clamp(1.25rem, 4vw, 3rem);
  max-width: 1200px;
  margin: 0 auto;

  @media ${device.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${device.lg} {
    grid-template-columns: repeat(3, minmax(0, 1fr));

    > *:first-child {
      grid-column: span 2;
      grid-row: span 2;
    }

    > *:last-child {
      grid-column: 3;
      grid-row: 2;
    }
  }

  @media (max-width: 768px) {
    gap: 0.85rem;
  }
`;

export const GalleryItemContainer = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  border: 1px solid rgba(36, 52, 40, 0.1);
  box-shadow: 0 5px 14px rgba(20, 28, 22, 0.08);
  transition:
    transform 0.26s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.26s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(29, 47, 37, 0.16);
    box-shadow: 0 8px 18px rgba(20, 28, 22, 0.1);
  }

  @media (max-width: 768px) {
    border-radius: 11px;
    aspect-ratio: 5 / 4;

    &:hover {
      transform: none;
      box-shadow: 0 6px 16px rgba(20, 28, 22, 0.1);
    }
  }

  ${reducedMotion}
`;

export const GalleryItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition:
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.28s ease;

  ${GalleryItemContainer}:hover & {
    transform: scale(1.03);
    filter: saturate(1.04);
  }

  ${reducedMotion}
`;

export const GalleryItemOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 0.32rem;
  padding: clamp(0.85rem, 1.7vw, 1rem);
  background: linear-gradient(
    180deg,
    rgba(22, 34, 27, 0.05) 24%,
    rgba(22, 34, 27, 0.24) 55%,
    rgba(22, 34, 27, 0.76) 100%
  );
  transition:
    background 0.26s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.28s ease;

  ${GalleryItemContainer}:hover & {
    background: linear-gradient(
      180deg,
      rgba(22, 34, 27, 0.03) 18%,
      rgba(22, 34, 27, 0.24) 46%,
      rgba(22, 34, 27, 0.82) 100%
    );
    box-shadow: none;
  }

  @media (max-width: 768px) {
    gap: 0.32rem;
    padding: 0.72rem;
    background: linear-gradient(
      180deg,
      rgba(22, 34, 27, 0.03) 22%,
      rgba(22, 34, 27, 0.3) 52%,
      rgba(22, 34, 27, 0.82) 100%
    );
  }

  ${reducedMotion}
`;

export const GalleryItemTitle = styled.h3`
  position: relative;
  z-index: 2;
  color: #f4faf5;
  font-size: clamp(0.98rem, 1.06vw, 1.1rem);
  font-weight: 600;
  margin: 0;
  line-height: 1.3;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
  transition:
    transform 0.26s cubic-bezier(0.22, 1, 0.36, 1),
    color 0.28s ease;

  ${GalleryItemContainer}:hover & {
    transform: translateY(-1px);
    color: #ffffff;
  }

  @media (max-width: 768px) {
    font-size: 0.98rem;
    line-height: 1.24;
  }
`;

export const GalleryItemDescription = styled.p`
  position: relative;
  z-index: 2;
  color: rgba(246, 251, 247, 0.88);
  font-size: clamp(0.76rem, 0.86vw, 0.86rem);
  line-height: 1.42;
  margin: 0;
  max-width: 32ch;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.28);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  opacity: 0.92;
  transform: translateY(2px);
  transition:
    opacity 0.26s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.26s cubic-bezier(0.22, 1, 0.36, 1);

  ${GalleryItemContainer}:hover & {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    -webkit-line-clamp: 2;
    font-size: 0.84rem;
    line-height: 1.38;
    max-width: 30ch;
    opacity: 1;
    transform: none;
  }

  @media (max-width: 420px) {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    font-size: 0.78rem;
    max-width: 28ch;
  }
`;
