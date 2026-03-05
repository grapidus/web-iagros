import styled from 'styled-components';
import theme from '../../../styles/theme';

interface HeroContainerProps {
  backgroundImage?: string;
  backgroundColor?: string;
  height?: string;
  mobileHeight?: string;
  textColor?: string;
  mobileBackgroundPosition?: string;
  backgroundSize?: 'cover' | 'contain' | 'auto';
  mobileBackgroundSize?: 'cover' | 'contain' | 'auto';
}

interface OverlayProps {
  opacity?: number;
}

interface TextProps {
  textColor?: string;
  hideTextOnMobile?: boolean;
}

interface ContentProps {
  hideTextOnMobile?: boolean;
}

export const HeroContainer = styled.section<HeroContainerProps>`
  position: relative;
  width: 100%;
  height: ${(props) => props.height || '400px'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.textColor || 'white'};
  overflow: hidden;

  /* Background handling con responsive */
  ${(props) => {
    if (props.backgroundImage) {
      return `
        background-image: url('${props.backgroundImage}');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: ${props.backgroundSize || 'cover'};
        background-attachment: scroll;
        
        /* Ajustes para tablet */
        @media (max-width: 768px) {
          background-position: ${
            props.mobileBackgroundPosition || 'center top'
          };
          background-size: ${
            props.mobileBackgroundSize || props.backgroundSize || 'cover'
          };
          min-height: ${props.mobileHeight || '300px'};
        }
        
        /* Ajustes para móvil */
        @media (max-width: 480px) {
          background-position: ${
            props.mobileBackgroundPosition || 'center center'
          };
          background-size: ${props.mobileBackgroundSize || 'contain'};
          min-height: ${props.mobileHeight || '250px'};
        }
      `;
    }
    if (props.backgroundColor) {
      return `background: ${props.backgroundColor};`;
    }
    return `background: linear-gradient(135deg, ${theme.colors.primary} 0%, #ff8c42 100%);`;
  }}

  /* Altura responsive */
  @media (max-width: 768px) {
    height: ${(props) => {
      if (props.mobileHeight) {
        return props.mobileHeight;
      }
      const height = props.height || '400px';
      const numericHeight = parseInt(height);
      return `${Math.max(numericHeight * 0.7, 300)}px`;
    }};
  }

  @media (max-width: 480px) {
    height: ${(props) => {
      if (props.mobileHeight) {
        return props.mobileHeight;
      }
      const height = props.height || '400px';
      const numericHeight = parseInt(height);
      return `${Math.max(numericHeight * 0.6, 250)}px`;
    }};
  }

  /* Patrón decorativo por defecto si no hay imagen */
  ${(props) =>
    !props.backgroundImage &&
    `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/backgrounds/pattern.svg') repeat;
      opacity: 0.1;
      z-index: 1;
    }
  `}
`;

export const Overlay = styled.div<OverlayProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, ${(props) => props.opacity || 0.5});
  z-index: 1;
`;

export const HeroContent = styled.div<ContentProps>`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  position: relative;
  z-index: 2;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 15px;
    max-width: 100%;
    ${(props) =>
      props.hideTextOnMobile &&
      `
      opacity: 0;
      pointer-events: none;
    `}
  }

  @media (max-width: 480px) {
    padding: 0 10px;
    ${(props) =>
      props.hideTextOnMobile &&
      `
      display: none;
    `}
  }
`;

export const HeroTitle = styled.h1<TextProps>`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  font-family: ${theme.fonts.secondary};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  color: ${(props) => props.textColor || 'white'};
  line-height: 1.2;
  word-wrap: break-word;
  hyphens: auto;

  @media (max-width: 1024px) {
    font-size: 3rem;
    line-height: 1.1;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    line-height: 1.2;
    margin-bottom: 15px;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
    ${(props) =>
      props.hideTextOnMobile &&
      `
      opacity: 0;
      pointer-events: none;
    `}
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    line-height: 1.3;
    margin-bottom: 12px;
    padding: 0 5px;
    ${(props) =>
      props.hideTextOnMobile &&
      `
      display: none;
    `}
  }

  @media (max-width: 360px) {
    font-size: 1.6rem;
  }
`;

export const HeroSubtitle = styled.p<TextProps>`
  font-size: 1.3rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  opacity: 0.95;
  color: ${(props) => props.textColor || 'white'};
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 1.05rem;
    line-height: 1.5;
    max-width: 95%;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
    padding: 0 5px;
    ${(props) =>
      props.hideTextOnMobile &&
      `
      opacity: 0;
      pointer-events: none;
    `}
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.4;
    max-width: 100%;
    padding: 0 10px;
    ${(props) =>
      props.hideTextOnMobile &&
      `
      display: none;
    `}
  }

  @media (max-width: 360px) {
    font-size: 0.9rem;
  }
`;
