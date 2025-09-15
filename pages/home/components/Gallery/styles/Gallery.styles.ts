import styled from 'styled-components';
import { device } from '../../../../../constants/breakpoints';

export const GalleryContainer = styled.section`
  padding: 2rem 0 3rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1.5rem 0 2.5rem;
  }
`;

export const GalleryHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const GalleryTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-weight: 600;

  @media ${device.md} {
    font-size: 3rem;
  }
`;

export const GallerySubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;

  @media ${device.md} {
    font-size: 1.4rem;
  }
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem; /* Espacio más pequeño en móvil */
  padding: 0 1rem;
  max-width: 1100px; /* Limita el ancho máximo de la galería */
  margin: 0 auto;

  @media ${device.sm} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem; /* Espacio medio en tablets */
  }

  @media ${device.lg} {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem; /* Espacio normal en desktop */
  }
`;

export const GalleryItemContainer = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 0;
  padding-bottom: 75%; /* Proporción para desktop */

  @media (max-width: 768px) {
    padding-bottom: 60%; /* Proporción más pequeña para móvil */
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const GalleryItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s ease;
`;

export const GalleryItemOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.25rem;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${GalleryItemContainer}:hover & {
    opacity: 1;
  }

  @media (max-width: 768px) {
    opacity: 1;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.4) 50%,
      rgba(0, 0, 0, 0) 100%
    );
    justify-content: flex-end;
    text-align: center;
    padding: 0.75rem; /* Padding más pequeño en móvil */
  }
`;

export const GalleryItemTitle = styled.h3`
  color: white;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
  }
`;

export const GalleryItemDescription = styled.p`
  color: white;
  font-size: 1rem;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    display: none;
  }
`;
