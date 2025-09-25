import styled from 'styled-components';
import { device } from '../../../constants/breakpoints';
import theme from '../../../styles/theme';

export const GalleryContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1rem 2rem;
  margin-top: 2rem;

  @media ${device.md} {
    padding: 3rem 2rem 3rem;
    margin-top: 3rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${theme.colors.primary};
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;

  @media ${device.md} {
    font-size: 2.5rem;
  }
`;

export const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`;

export const FilterButton = styled.button<{ active?: boolean }>`
  padding: 0.8rem 1.5rem;
  border: 2px solid ${theme.colors.primary};
  background: ${(props) =>
    props.active ? theme.colors.primary : 'transparent'};
  color: ${(props) => (props.active ? 'white' : theme.colors.primary)};
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background: ${theme.colors.primary};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(238, 112, 7, 0.3);
  }

  @media ${device.md} {
    font-size: 1rem;
    padding: 1rem 2rem;
  }
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media ${device.md} {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
  }
`;

export const GalleryItem = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  background: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  }
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${GalleryItem}:hover & {
    transform: scale(1.05);
  }

  @media ${device.md} {
    height: 300px;
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;

  ${GalleryItem}:hover & {
    opacity: 1;
  }
`;

export const ImageInfo = styled.div`
  color: white;
`;

export const ImageTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
`;

export const ImageDescription = styled.p`
  font-size: 0.9rem;
  margin: 0;
  opacity: 0.9;
`;

// Lightbox styles
export const LightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  padding: 0 90px;

  &.open {
    opacity: 1;
    visibility: visible;
  }

  /* Tablets y pantallas medias */
  @media (max-width: 1024px) and (min-width: 769px) {
    padding: 0 70px;
  }

  /* Tablets pequeñas */
  @media (max-width: 768px) and (min-width: 481px) {
    padding: 0 75px;
  }

  /* Móviles */
  @media (max-width: 480px) and (min-width: 361px) {
    padding: 0 65px;
  }

  /* Móviles pequeños */
  @media (max-width: 360px) {
    padding: 0 55px;
  }
`;

export const LightboxContent = styled.div`
  position: relative;
  max-width: 85vw;
  max-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10vh 0;
`;

export const LightboxImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`;

export const LightboxClose = styled.button`
  position: absolute;
  top: -60px;
  right: -10px;
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid white;
  border-radius: 50%;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  z-index: 15;

  &:hover {
    transform: scale(1.1);
    background: rgba(255, 255, 255, 0.2);
  }

  /* Pantallas muy grandes */
  @media (min-width: 1200px) {
    top: -65px;
    right: -15px;
    width: 55px;
    height: 55px;
    font-size: 1.6rem;
  }

  /* Tablets y pantallas medias */
  @media (max-width: 1024px) and (min-width: 769px) {
    top: -55px;
    right: -5px;
    width: 48px;
    height: 48px;
    font-size: 1.4rem;
  }

  /* Tablets pequeñas */
  @media (max-width: 768px) and (min-width: 481px) {
    top: -50px;
    right: 0;
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
  }

  /* Móviles */
  @media (max-width: 480px) {
    top: -45px;
    right: 5px;
    width: 42px;
    height: 42px;
    font-size: 1.2rem;
  }
`;

export const LightboxNav = styled.button<{ direction: 'prev' | 'next' }>`
  position: absolute;
  top: 50%;
  ${(props) => (props.direction === 'prev' ? 'left: -80px' : 'right: -80px')};
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid white;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.8rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  z-index: 10;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-50%) scale(1.1);
  }

  /* Tablets y pantallas medias (1024px - 769px) */
  @media (max-width: 1024px) and (min-width: 769px) {
    ${(props) => (props.direction === 'prev' ? 'left: -60px' : 'right: -60px')};
    width: 55px;
    height: 55px;
    font-size: 1.6rem;
  }

  /* Tablets pequeñas (768px - 481px) */
  @media (max-width: 768px) and (min-width: 481px) {
    ${(props) => (props.direction === 'prev' ? 'left: 20px' : 'right: 20px')};
    width: 50px;
    height: 50px;
    font-size: 1.4rem;
    top: 48%;
  }

  /* Móviles (480px - 361px) */
  @media (max-width: 480px) and (min-width: 361px) {
    ${(props) => (props.direction === 'prev' ? 'left: 15px' : 'right: 15px')};
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
    top: 45%;
  }

  /* Móviles pequeños (360px y menos) */
  @media (max-width: 360px) {
    ${(props) => (props.direction === 'prev' ? 'left: 10px' : 'right: 10px')};
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
    top: 45%;
  }
`;

export const LightboxInfo = styled.div`
  position: absolute;
  bottom: -100px;
  left: 0;
  right: 0;
  text-align: center;
  color: white;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const LightboxTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
`;

export const LightboxDescription = styled.p`
  font-size: 1rem;
  margin: 0;
  opacity: 0.8;
`;

export const LightboxCounter = styled.div`
  position: absolute;
  top: -60px;
  left: -10px;
  color: white;
  font-size: 1.1rem;
  opacity: 0.9;
  background: rgba(0, 0, 0, 0.8);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 15;

  /* Pantallas muy grandes */
  @media (min-width: 1200px) {
    top: -65px;
    left: -15px;
    font-size: 1.2rem;
    padding: 0.6rem 1.2rem;
  }

  /* Tablets y pantallas medias */
  @media (max-width: 1024px) and (min-width: 769px) {
    top: -55px;
    left: -5px;
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
  }

  /* Tablets pequeñas */
  @media (max-width: 768px) and (min-width: 481px) {
    top: -50px;
    left: 0;
    font-size: 0.95rem;
    padding: 0.4rem 0.8rem;
  }

  /* Móviles */
  @media (max-width: 480px) {
    top: -45px;
    left: 5px;
    font-size: 0.9rem;
    padding: 0.3rem 0.7rem;
  }
`;

export const LightboxImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  min-height: 200px;
  max-width: 100%;
  max-height: 100%;
`;

export const LightboxLoader = styled.div`
  color: white;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  &::after {
    content: '';
    width: 40px;
    height: 40px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-top: 3px solid white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LightboxError = styled.div`
  color: white;
  font-size: 1.2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  background: rgba(255, 0, 0, 0.1);
  padding: 2rem;
  border-radius: 10px;
  border: 2px dashed rgba(255, 255, 255, 0.5);

  &::before {
    content: '⚠️';
    font-size: 3rem;
  }
`;
