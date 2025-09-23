import styled from 'styled-components';
import { size } from '../../../constants/breakpoints';
import theme from '../../../styles/theme';

export const HistoryContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem 1rem 2rem;
  margin-top: -1rem; /* Reducir espacio en dispositivos móviles */

  @media (min-width: ${size.md}px) {
    padding: 1.5rem 2rem 3rem;
    margin-top: 0; /* Restaurar espacio normal en pantallas más grandes */
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 4rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
  text-align: center;

  @media (min-width: ${size.md}px) {
    font-size: 2.5rem;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: ${size.md}px) {
    gap: 1.5rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${theme.colors.text};
  margin: 0;

  @media (min-width: ${size.md}px) {
    font-size: 1.2rem;
  }
`;

export const HighlightBox = styled.div`
  background-color: rgba(238, 112, 7, 0.05);
  border-left: 4px solid ${theme.colors.primary};
  padding: 1.2rem;
  margin: 1.5rem 0;
  border-radius: 0 4px 4px 0;

  @media (min-width: ${size.md}px) {
    padding: 1.5rem;
    margin: 2rem 0;
  }
`;

export const HighlightText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  font-style: italic;
  color: ${theme.colors.text};
  margin: 0;

  @media (min-width: ${size.md}px) {
    font-size: 1.3rem;
  }
`;

export const VideoContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 1rem auto;
  position: relative;
  padding-bottom: 56.25%; /* Relación de aspecto 16:9 */
  height: 0;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @media (min-width: ${size.md}px) {
    margin: 2rem auto;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const VideoSection = styled.section`
  margin: 2rem 0 1rem;

  @media (min-width: ${size.md}px) {
    margin: 3rem 0;
  }
`;

export const ContentSection = styled.section`
  margin-top: 0.5rem;

  @media (min-width: ${size.md}px) {
    margin-top: 2rem;
  }
`;

export const HistoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 1.5rem;

  @media (min-width: ${size.md}px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (min-width: ${size.md}px) {
    height: 400px;
  }
`;

export const CompanyMilestone = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

export const MilestoneYear = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
`;

export const MilestoneContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
