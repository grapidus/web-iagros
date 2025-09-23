import styled from 'styled-components';
import theme from '../../../styles/theme';

export const AboutContainer = styled.div`
  min-height: 100vh;
`;

export const ExperienceSection = styled.section`
  background: white;
  padding: 60px 0;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 3;
  margin-top: -30px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;

  @media (max-width: 768px) {
    margin-top: -140px;
  }
`;

export const ExperienceNumber = styled.div`
  font-size: 4rem;
  font-weight: 900;
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.secondary};
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const ExperienceText = styled.p`
  font-size: 1.2rem;
  color: ${theme.colors.text};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const MainContent = styled.main`
  max-width: 1200px;
  margin: 80px auto 0;
  padding: 0 20px;
`;

export const ContentSection = styled.section`
  text-align: center;
  margin-bottom: 80px;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${theme.colors.text};
  margin-bottom: 40px;
  font-family: ${theme.fonts.secondary};
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${theme.colors.text};
  max-width: 900px;
  margin: 0 auto;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    text-align: left;
  }
`;

export const VideoSection = styled.section`
  margin-bottom: 80px;
  text-align: center;
`;

export const DifferentiatorsSection = styled.section`
  margin-bottom: 80px;
`;

export const DifferentiatorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

export const DifferentiatorCard = styled.div`
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    border-color: ${theme.colors.primary};
  }
`;

export const CardIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
  filter: grayscale(0);
  transition: filter 0.3s ease;
`;

export const CardTitle = styled.h3`
  font-size: 1.4rem;
  color: ${theme.colors.primary};
  margin-bottom: 15px;
  font-weight: 700;
  font-family: ${theme.fonts.secondary};
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${theme.colors.text};
  opacity: 0.8;
`;

export const VideoTitle = styled.h2`
  font-size: 2.2rem;
  color: ${theme.colors.text};
  margin-bottom: 40px;
  font-family: ${theme.fonts.secondary};
  font-weight: 700;
`;

export const VideoContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);

  iframe {
    border-radius: 20px;

    @media (max-width: 768px) {
      height: 250px;
    }
  }
`;
