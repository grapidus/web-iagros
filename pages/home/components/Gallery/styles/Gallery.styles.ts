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
  z-index: 7;
  padding: clamp(2rem, 3.6vw, 3.4rem) 0 clamp(2.2rem, 4vw, 4rem);
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1.35rem 0 1.9rem;
  }
`;

export const GalleryHeader = styled.div`
  text-align: left;
  margin: 0 auto clamp(1.3rem, 2.6vw, 2.1rem);
  padding: 0 clamp(1rem, 2.8vw, 2rem);
  max-width: 1200px;

  @media (max-width: 768px) {
    margin: 0 auto 1.15rem;
    padding: 0 1rem;
  }
`;

export const GalleryEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.7rem;
  letter-spacing: 0.11em;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: clamp(0.6rem, 1.3vw, 0.82rem);
  color: #5a685e;

  &::before {
    content: '';
    width: 1.5rem;
    height: 1px;
    background: rgba(31, 47, 36, 0.3);
  }
`;

export const GalleryTitle = styled.h2`
  font-family: ${theme.fonts.secondary};
  font-size: clamp(1.48rem, 3vw, 2.15rem);
  margin: 0;
  color: #1f2f24;
  font-weight: 600;
  line-height: 1.22;
  letter-spacing: -0.008em;
  max-width: 22ch;
  text-transform: none;

  @media (max-width: 768px) {
    font-size: clamp(1.28rem, 5.6vw, 1.75rem);
    line-height: 1.18;
    max-width: 18ch;
  }
`;

export const GallerySubtitle = styled.p`
  font-family: ${theme.fonts.primary};
  font-size: clamp(0.94rem, 1.08vw, 1rem);
  color: #556259;
  max-width: 50ch;
  margin: 0.45rem 0 0;
  line-height: 1.55;
  text-wrap: pretty;

  @media (max-width: 768px) {
    font-size: 0.92rem;
    line-height: 1.5;
    max-width: 34ch;
    margin: 0.42rem 0 0;
  }

  @media (max-width: 420px) {
    font-size: 0.88rem;
    max-width: 28ch;
  }
`;

export const GalleryHeaderMeta = styled.p`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-top: 0.95rem;
  color: #37513d;
  font-size: 0.82rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  font-weight: 600;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 0.8rem;
  }
`;

export const GalleryHeaderRule = styled.span`
  display: inline-block;
  width: clamp(2.8rem, 7vw, 4.4rem);
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    ${theme.colors.secondary} 0%,
    ${theme.colors.primary} 100%
  );
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(0.9rem, 1.7vw, 1.3rem);
  padding: 0 clamp(1rem, 2.8vw, 2rem);
  max-width: 1200px;
  margin: 0 auto;

  @media ${device.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.lg} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    gap: 0.85rem;
    padding: 0 1rem;
    max-width: 560px;
  }
`;

export const GalleryItemContainer = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  border: 1px solid rgba(36, 52, 40, 0.09);
  box-shadow: 0 4px 14px rgba(20, 28, 22, 0.07);
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(36, 52, 40, 0.14);
    box-shadow: 0 8px 18px rgba(20, 28, 22, 0.1);
  }

  @media (max-width: 768px) {
    border-radius: 11px;
    aspect-ratio: 5 / 4;

    &:hover {
      transform: none;
      box-shadow: 0 8px 22px rgba(20, 28, 22, 0.1);
    }
  }

  ${reducedMotion}
`;

export const GalleryItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition:
    transform 0.45s ease,
    filter 0.28s ease;

  ${GalleryItemContainer}:hover & {
    transform: scale(1.03);
    filter: saturate(1.02);
  }

  ${reducedMotion}
`;

export const GalleryItemOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 0.28rem;
  padding: clamp(0.8rem, 1.8vw, 1rem);
  background: linear-gradient(
    180deg,
    rgba(21, 30, 24, 0) 36%,
    rgba(21, 30, 24, 0.2) 66%,
    rgba(21, 30, 24, 0.72) 100%
  );
  transition:
    background 0.28s ease,
    box-shadow 0.28s ease;

  ${GalleryItemContainer}:hover & {
    background: linear-gradient(
      180deg,
      rgba(21, 30, 24, 0) 30%,
      rgba(21, 30, 24, 0.22) 58%,
      rgba(21, 30, 24, 0.68) 100%
    );
    box-shadow: none;
  }

  @media (max-width: 768px) {
    gap: 0.32rem;
    padding: 0.72rem;
    background: linear-gradient(
      180deg,
      rgba(21, 30, 24, 0) 28%,
      rgba(21, 30, 24, 0.3) 58%,
      rgba(21, 30, 24, 0.82) 100%
    );
  }

  ${reducedMotion}
`;

export const GalleryItemMeta = styled.span`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  margin-top: 0.28rem;
  padding: 0.22rem 0.58rem;
  border-radius: 999px;
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  font-weight: 700;
  text-transform: uppercase;
  color: #eaf7ec;
  border: 1px solid rgba(234, 247, 236, 0.35);
  background: rgba(234, 247, 236, 0.14);

  @media (max-width: 768px) {
    font-size: 0.62rem;
    margin-top: 0.2rem;
  }
`;

export const GalleryItemTitle = styled.h3`
  position: relative;
  z-index: 2;
  color: #f8fbf9;
  font-size: clamp(0.94rem, 1.05vw, 1.06rem);
  font-weight: 700;
  margin: 0;
  line-height: 1.3;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.32);
  transition:
    transform 0.28s ease,
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
  color: rgba(248, 251, 248, 0.9);
  font-size: clamp(0.76rem, 0.9vw, 0.86rem);
  line-height: 1.4;
  margin: 0;
  max-width: 34ch;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    -webkit-line-clamp: 2;
    font-size: 0.84rem;
    line-height: 1.38;
    max-width: 30ch;
  }

  @media (max-width: 420px) {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    font-size: 0.78rem;
    max-width: 28ch;
  }
`;
