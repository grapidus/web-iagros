import { Button } from '@mui/material';
import styled from 'styled-components';
import { device } from '../../../constants/breakpoints';
import theme from '../../../styles/theme';

export const ContactContainer = styled.div`
  min-height: 100vh;
  background: radial-gradient(
      circle at 20% 80%,
      rgba(97, 206, 112, 0.15) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(238, 112, 7, 0.15) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 40% 40%,
      rgba(97, 206, 112, 0.1) 0%,
      transparent 50%
    ),
    linear-gradient(
      135deg,
      ${theme.colors.background} 0%,
      #f8f8f8 50%,
      #f0f0f0 100%
    );
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      from 0deg at 50% 50%,
      rgba(97, 206, 112, 0.03) 0deg,
      rgba(238, 112, 7, 0.02) 90deg,
      rgba(97, 206, 112, 0.03) 180deg,
      rgba(238, 112, 7, 0.02) 270deg,
      rgba(97, 206, 112, 0.03) 360deg
    );
    animation: rotate 60s linear infinite;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -20%;
    right: -20%;
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      rgba(238, 112, 7, 0.05) 0%,
      transparent 70%
    );
    border-radius: 50%;
    animation: pulse 8s ease-in-out infinite;
    z-index: 0;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(0.8);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.8;
    }
  }
`;

export const ContactInnerContainer = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 20px;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  min-height: 100vh;
  align-content: center;

  @media ${device.lg} {
    grid-template-columns: 1fr 1.2fr;
    gap: 80px;
    align-items: center;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;

  @media (max-width: ${992 - 1}px) {
    text-align: center;
    margin-bottom: 40px;
  }
`;

export const ContactHeader = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  color: ${theme.colors.text};
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  font-family: inherit;
  letter-spacing: -1px;
  line-height: 1.1;
  position: relative;

  background: linear-gradient(
    135deg,
    ${theme.colors.secondary} 0%,
    #4caf50 50%,
    ${theme.colors.secondary} 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${768 - 1}px) {
    font-size: 2.5rem;
  }
`;

export const Description = styled.p`
  color: ${theme.colors.text};
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: 30px;
  font-weight: 400;
  opacity: 0.8;

  @media (max-width: ${768 - 1}px) {
    font-size: 1.1rem;
  }
`;

export const ContactFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(97, 206, 112, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
    background: rgba(255, 255, 255, 0.9);
    border-color: ${theme.colors.primary};
  }

  @media (max-width: ${992 - 1}px) {
    justify-content: center;
  }
`;

export const FeatureIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: ${theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  box-shadow: 0 4px 15px rgba(238, 112, 7, 0.3);
`;

export const FeatureText = styled.div`
  h3 {
    margin: 0;
    color: ${theme.colors.primary};
    font-size: 1.1rem;
    font-weight: 600;
  }

  p {
    margin: 4px 0 0 0;
    color: ${theme.colors.text};
    opacity: 0.7;
    font-size: 0.9rem;
  }
`;

export const FormSection = styled.div`
  position: relative;
  z-index: 2;
`;

export const FormContainer = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 50px 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1), 0 8px 25px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(
      90deg,
      ${theme.colors.primary} 0%,
      #ff8f00 25%,
      ${theme.colors.primary} 50%,
      #ff8f00 75%,
      ${theme.colors.primary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 3s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 200%;
    background: conic-gradient(
      from 0deg,
      transparent,
      rgba(97, 206, 112, 0.03),
      transparent
    );
    animation: rotate 20s linear infinite;
    pointer-events: none;
  }

  @keyframes shimmer {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  @media (max-width: ${768 - 1}px) {
    padding: 30px 25px;
    border-radius: 20px;
  }
`;

export const StyledSubmitButton = styled(Button)`
  background: linear-gradient(
    135deg,
    ${theme.colors.secondary} 0%,
    #4caf50 50%,
    ${theme.colors.secondary} 100%
  ) !important;
  color: white !important;
  border: none !important;
  border-radius: 16px !important;
  padding: 18px 40px !important;
  font-size: 1.1rem !important;
  font-weight: 600 !important;
  text-transform: none !important;
  letter-spacing: 0.3px !important;
  box-shadow: 0 8px 25px rgba(97, 206, 112, 0.4), 0 4px 12px rgba(0, 0, 0, 0.15) !important;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.6s;
  }

  &:hover {
    transform: translateY(-3px) scale(1.05) !important;
    box-shadow: 0 15px 35px rgba(97, 206, 112, 0.5),
      0 8px 20px rgba(0, 0, 0, 0.2) !important;

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px) scale(1.02) !important;
  }

  &:disabled {
    background: linear-gradient(
      135deg,
      ${theme.colors.background} 0%,
      #ccc 100%
    ) !important;
    color: ${theme.colors.text} !important;
    opacity: 0.6;
    transform: none !important;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;

    &::before {
      display: none;
    }
  }
`;

export const FormGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -16px;
`;

export const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

interface FormColumnProps {
  half?: boolean;
}

export const FormColumn = styled.div<FormColumnProps>`
  flex: 0 0 100%;
  max-width: 100%;
  padding: 16px;

  @media ${device.sm} {
    flex: ${(props) => (props.half ? '0 0 50%' : '0 0 100%')};
    max-width: ${(props) => (props.half ? '50%' : '100%')};
  }
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(97, 206, 112, 0.2);
`;

export const FormNote = styled.div`
  margin-top: 20px;
  text-align: center;
`;
export const NoteText = styled.p`
  font-size: 0.85rem;
  color: ${theme.colors.text};
  opacity: 0.6;
  margin: 0;
  font-weight: 300;
`;
