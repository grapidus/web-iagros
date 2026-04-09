import styled from 'styled-components';
import { device } from '../../../../../constants/breakpoints';

export const PartnersSection = styled.section`
  position: relative;
  width: 100%;
  padding: clamp(4rem, 8vw, 7rem) 0 clamp(6rem, 12vw, 10rem);
  overflow: hidden;
  background-image: url('https://iagros.com/wp-content/uploads/2024/08/Marcas_aliadas.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(30, 30, 30, 0.75);
    z-index: 1;
  }
`;

export const WaveContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  overflow: hidden;
  line-height: 0;
  z-index: 3;

  svg {
    position: relative;
    width: 100%;
    height: 80px;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

export const SectionBadge = styled.span`
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #ee7007;
  margin-bottom: 0.75rem;
`;

export const Title = styled.h2`
  font-family: 'Fraunces', serif;
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  color: #ffffff;
  font-weight: 600;
  margin: 0 0 0.75rem;
  line-height: 1.18;
`;

export const Subtitle = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(0.95rem, 1.5vw, 1.05rem);
  color: rgba(255, 255, 255, 0.65);
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.7;
`;

export const PartnersGrid = styled.div``;

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 16px;
`;

export const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.4s ease;
`;

export const PartnerCard = styled.div<{ $cols: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  min-width: ${({ $cols }) => `${100 / $cols}%`};
  padding: 24px 16px;
  cursor: default;
`;

export const PartnerImage = styled.img`
  max-width: 180px;
  max-height: 110px;
  width: auto;
  height: auto;
  object-fit: contain;

  @media ${device.sm} {
    max-width: 220px;
    max-height: 130px;
  }

  @media ${device.lg} {
    max-width: 300px;
    max-height: 170px;
  }
`;

export const PartnerName = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  letter-spacing: 0.05em;
`;

export const CarouselControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 40px;
`;

export const CarouselButton = styled.button`
  background: rgba(255, 255, 255, 0.22);
  border: 2px solid rgba(255, 255, 255, 0.55);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  flex-shrink: 0;
  transition: background 0.22s ease, border-color 0.22s ease, transform 0.22s ease;

  @media ${device.sm} {
    width: 48px;
    height: 48px;
  }

  &:hover:not(:disabled) {
    background: rgba(76, 175, 80, 0.45);
    border-color: rgba(76, 175, 80, 0.9);
    transform: scale(1.08);
  }

  &:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }
`;

export const CarouselDots = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;

  @media ${device.sm} {
    gap: 8px;
  }
`;

export const Dot = styled.div<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? '18px' : '7px')};
  height: 7px;
  border-radius: 100px;
  background: ${({ $active }) => ($active ? '#81c784' : 'rgba(255,255,255,0.3)')};
  transition: width 0.25s ease, background 0.25s ease;
  flex-shrink: 0;
`;

export const PageCounter = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  min-width: 52px;
  text-align: center;
`;

/* unused — kept so old imports don't break */
export const TitleContainer = styled.div``;
export const CarouselContainer = styled.div``;
export const PartnersCarouselWrapper = styled.div``;
export const PartnersCarouselTrack = styled.div``;
export const PartnerItem = styled.div``;
export const MarqueeContainer = styled.div``;
export const MarqueeRow = styled.div``;
export const MarqueeTrack = styled.div``;
export const PartnerDescription = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 0.8rem;
  font-weight: 300;
  font-style: italic;
  color: rgba(255, 255, 255, 0.85);
  text-align: center;
  margin: 0;
  line-height: 1.6;
  letter-spacing: 0.01em;
  max-width: 180px;

  @media ${device.sm} {
    font-size: 0.9rem;
    max-width: 220px;
  }

  @media ${device.lg} {
    font-size: 0.95rem;
    max-width: 260px;
  }
`;
