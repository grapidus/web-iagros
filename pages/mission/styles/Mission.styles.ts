import styled from 'styled-components';
import { size } from '../../../constants/breakpoints';
import theme from '../../../styles/theme';

export const MissionContainer = styled.div`
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
  gap: 2rem;
  margin-bottom: 3rem;
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

export const ContentSection = styled.section`
  margin-top: 0.5rem;

  @media (min-width: ${size.md}px) {
    margin-top: 2rem;
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

export const MissionFocus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 1.5rem 0;

  @media (min-width: ${size.md}px) {
    margin: 2.5rem 0;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FocusItem = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (min-width: ${size.md}px) {
    flex: 1;
    padding: 2rem;
  }
`;

export const FocusIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: rgba(238, 112, 7, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const FocusTitle = styled.h3`
  color: ${theme.colors.primary};
  margin: 0.5rem 0;
  font-size: 1.4rem;

  @media (min-width: ${size.md}px) {
    font-size: 1.6rem;
  }
`;

export const VideoSection = styled.section`
  margin: 2rem 0 1rem;

  @media (min-width: ${size.md}px) {
    margin: 3rem 0;
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

export const QuoteSection = styled.div`
  background-color: rgba(238, 112, 7, 0.05);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  text-align: center;
  border-top: 3px solid ${theme.colors.primary};
  border-bottom: 3px solid ${theme.colors.primary};

  @media (min-width: ${size.md}px) {
    padding: 2rem;
    margin: 3rem 0;
  }
`;

export const QuoteText = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  line-height: 1.8;
  color: ${theme.colors.text};
  margin: 0;

  @media (min-width: ${size.md}px) {
    font-size: 1.4rem;
  }
`;

export const MissionValues = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (min-width: ${size.sm}px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${size.lg}px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ValueItem = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  border-left: 4px solid ${theme.colors.primary};

  h4 {
    margin: 0 0 0.5rem;
    color: ${theme.colors.primary};
  }

  p {
    margin: 0;
    font-size: 0.95rem;

    @media (min-width: ${size.md}px) {
      font-size: 1rem;
    }
  }
`;
