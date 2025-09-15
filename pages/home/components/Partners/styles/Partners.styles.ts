import styled from 'styled-components';
import { device } from '../../../../../constants/breakpoints';

export const PartnersSection = styled.section`
  position: relative;
  width: 100%;
  padding: 80px 0 150px 0; /* Aumentamos el padding inferior para dejar espacio para los controles */
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-image: url('https://iagros.com/wp-content/uploads/2024/08/Marcas_aliadas.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Para el efecto parallax */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }
  @media ${device.md} {
    padding: 100px 0 150px 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const WaveContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  overflow: hidden;
  line-height: 0;
  z-index: 2; /* Por encima del overlay */

  svg {
    position: relative;
    width: 100%;
    height: 100px;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  z-index: 2; /* Por encima del overlay */
  display: flex;
  flex-direction: column;

  @media ${device.md} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;

  @media ${device.md} {
    width: 40%;
    text-align: left;
    margin-bottom: 0;
    padding-right: 20px;
  }
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  color: white;
  margin-bottom: 20px;
  font-weight: 700;

  @media ${device.md} {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: white;
  margin-top: 10px;

  @media ${device.md} {
    font-size: 1.1rem;
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;

  @media ${device.md} {
    width: 55%;
  }
`;

export const PartnersCarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  padding: 20px;
`;

export const PartnersCarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

export const PartnerItem = styled.div`
  min-width: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.sm} {
    min-width: 100%;
  }

  @media ${device.md} {
    min-width: 33.333%;
  }
`;

export const PartnerImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
  max-height: 100px;
  filter: brightness(0) invert(1);

  @media ${device.sm} {
    max-height: 120px;
  }
`;

export const CarouselControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  position: relative;
  z-index: 3;

  @media ${device.md} {
    justify-content: flex-end;
  }
`;

export const CarouselButton = styled.button`
  background: none;
  border: 2px solid white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;

  &:hover {
    background-color: white;
    color: #333;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    color: white;
    border-color: white;
  }
`;
