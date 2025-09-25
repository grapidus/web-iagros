import styled from 'styled-components';
import { device } from '../../../constants/breakpoints';
import theme from '../../../styles/theme';

interface GalleryContainerProps {
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
}

interface FilterButtonProps {
  active: boolean;
}

interface LightboxNavProps {
  direction: 'prev' | 'next';
}

export const GalleryContainer = styled.div<GalleryContainerProps>`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media ${device.md} {
    padding: 3rem 2rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${theme.colors.primary};
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 700;

  @media ${device.md} {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
`;

export const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;

  @media ${device.sm} {
    gap: 1rem;
    margin-bottom: 3rem;
  }
`;

export const FilterButton = styled.button<FilterButtonProps>`
  background: ${({ active }) =>
    active ? theme.colors.primary : 'rgba(255, 255, 255, 0.1)'};
  color: ${({ active }) => (active ? '#ffffff' : theme.colors.primary)};
  border: 2px solid ${theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  font-size: 0.9rem;

  &:hover {
    background: ${theme.colors.primary};
    color: #ffffff;
    transform: translateY(-2px);
  }

  @media ${device.sm} {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
`;

export const GalleryGrid = styled.div<GalleryContainerProps>`
  display: grid;
  gap: 1rem;

  /* Grid responsive basado en las props */
  grid-template-columns: repeat(${({ columns }) => columns?.mobile || 1}, 1fr);

  @media ${device.sm} {
    gap: 1.5rem;
  }

  @media ${device.md} {
    grid-template-columns: repeat(
      ${({ columns }) => columns?.tablet || 2},
      1fr
    );
  }

  @media ${device.lg} {
    grid-template-columns: repeat(
      ${({ columns }) => columns?.desktop || 3},
      1fr
    );
  }
`;

export const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);

    img {
      transform: scale(1.1);
    }

    div {
      opacity: 1;
    }
  }
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;

  @media ${device.sm} {
    height: 250px;
  }

  @media ${device.md} {
    height: 300px;
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 1.5rem 1rem 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;

  @media ${device.sm} {
    padding: 2rem 1.5rem 1.5rem;
  }
`;

export const ImageInfo = styled.div`
  color: white;
`;

export const ImageTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;

  @media ${device.sm} {
    font-size: 1.2rem;
  }
`;

export const ImageDescription = styled.p`
  font-size: 0.8rem;
  opacity: 0.9;
  line-height: 1.4;

  @media ${device.sm} {
    font-size: 0.9rem;
  }
`;

// Lightbox Styles
export const LightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;

  &.open {
    opacity: 1;
    visibility: visible;
  }
`;

export const LightboxContent = styled.div`
  position: relative;
  max-width: 85vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10vh 0;
  max-height: 70vh;
  padding: 0 25px;

  @media ${device.sm} {
    max-width: 87vw;
    padding: 0 20px;
  }

  @media ${device.md} {
    max-width: 90vw;
    padding: 0 15px;
  }

  @media ${device.lg} {
    padding: 0;
  }
`;

export const LightboxClose = styled.button`
  position: absolute;
  top: -45px;
  right: 5px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 15;

  @media ${device.sm} {
    top: -50px;
    right: 0;
    width: 42px;
    height: 42px;
    font-size: 1.3rem;
  }

  @media ${device.md} {
    top: -55px;
    right: -5px;
    width: 45px;
    height: 45px;
    font-size: 1.4rem;
  }

  @media ${device.lg} {
    top: -60px;
    right: -10px;
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }

  @media ${device.xl} {
    top: -65px;
    right: -15px;
    width: 55px;
    height: 55px;
    font-size: 1.6rem;
  }

  &:hover {
    background: rgba(255, 0, 0, 0.8);
    transform: scale(1.1);
  }
`;

export const LightboxCounter = styled.div`
  position: absolute;
  top: -45px;
  left: 5px;
  color: white;
  font-size: 0.9rem;
  opacity: 0.9;
  background: rgba(0, 0, 0, 0.8);
  padding: 0.3rem 0.7rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 15;

  @media ${device.sm} {
    top: -50px;
    left: 0;
    font-size: 0.95rem;
    padding: 0.4rem 0.8rem;
  }

  @media ${device.md} {
    top: -55px;
    left: -5px;
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
  }

  @media ${device.lg} {
    top: -60px;
    left: -10px;
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
  }

  @media ${device.xl} {
    top: -65px;
    left: -15px;
    font-size: 1.2rem;
    padding: 0.6rem 1.2rem;
  }
`;

export const LightboxNav = styled.button<LightboxNavProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ direction }) => (direction === 'prev' ? 'left: 10px;' : 'right: 10px;')}
  background: rgba(0, 0, 0, 0.8);
  color: white;
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 20;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: translateY(-50%) scale(1.1);
  }

  @media ${device.sm} {
    ${({ direction }) =>
      direction === 'prev' ? 'left: -10px;' : 'right: -10px;'}
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }

  @media ${device.md} {
    ${({ direction }) =>
      direction === 'prev' ? 'left: -30px;' : 'right: -30px;'}
    width: 45px;
    height: 45px;
    font-size: 1.2rem;
  }

  @media ${device.lg} {
    ${({ direction }) =>
      direction === 'prev' ? 'left: -60px;' : 'right: -60px;'}
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
  }

  @media ${device.xl} {
    ${({ direction }) =>
      direction === 'prev' ? 'left: -80px;' : 'right: -80px;'}
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
`;

export const LightboxImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  max-height: 100%;
`;

export const LightboxImage = styled.img<{ isLoaded: boolean }>`
  max-width: 100%;
  max-height: 70vh;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  display: ${({ isLoaded }) => (isLoaded ? 'block' : 'none')};
  opacity: ${({ isLoaded }) => (isLoaded ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

export const LightboxLoader = styled.div`
  color: white;
  font-size: 1.2rem;
  text-align: center;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  backdrop-filter: blur(10px);
`;

export const LightboxError = styled.div`
  color: #ff6b6b;
  font-size: 1.1rem;
  text-align: center;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  backdrop-filter: blur(10px);

  small {
    display: block;
    margin-top: 0.5rem;
    font-size: 0.9rem;
    opacity: 0.8;
  }
`;

export const LightboxInfo = styled.div`
  position: absolute;
  bottom: -60px;
  left: 0;
  right: 0;
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.7);
  padding: 0.8rem;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media ${device.md} {
    bottom: -70px;
    padding: 1rem;
  }

  @media ${device.lg} {
    bottom: -80px;
    padding: 1.5rem;
  }
`;

export const LightboxTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;

  @media ${device.md} {
    font-size: 1.2rem;
  }

  @media ${device.lg} {
    font-size: 1.4rem;
  }
`;

export const LightboxDescription = styled.p`
  font-size: 0.8rem;
  opacity: 0.9;
  line-height: 1.5;
  color: white;

  @media ${device.md} {
    font-size: 0.9rem;
  }

  @media ${device.lg} {
    font-size: 1rem;
  }
`;
