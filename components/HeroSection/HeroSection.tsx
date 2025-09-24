import React from 'react';
import {
  HeroContainer,
  HeroContent,
  HeroSubtitle,
  HeroTitle,
  Overlay
} from './styles/HeroSection.styles';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  textColor?: string;
  height?: string;
  mobileHeight?: string; // Altura específica para móvil
  overlay?: boolean;
  overlayOpacity?: number;
  children?: React.ReactNode;
  // Props para manejar imágenes con texto
  hideTextOnMobile?: boolean; // Ocultar texto en móvil
  mobileBackgroundPosition?: string; // Posición específica para móvil
  backgroundSize?: 'cover' | 'contain' | 'auto'; // Tamaño del background
  mobileBackgroundSize?: 'cover' | 'contain' | 'auto'; // Tamaño en móvil
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  backgroundColor,
  textColor = 'white',
  height = '400px',
  mobileHeight = '100px',
  overlay = true,
  overlayOpacity = 0.5,
  children,
  hideTextOnMobile = false,
  mobileBackgroundPosition = 'center center',
  backgroundSize = 'cover',
  mobileBackgroundSize
}) => {
  return (
    <HeroContainer
      backgroundImage={backgroundImage}
      backgroundColor={backgroundColor}
      height={height}
      mobileHeight={mobileHeight}
      textColor={textColor}
      mobileBackgroundPosition={mobileBackgroundPosition}
      backgroundSize={backgroundSize}
      mobileBackgroundSize={mobileBackgroundSize}
    >
      {backgroundImage && overlay && <Overlay opacity={overlayOpacity} />}
      <HeroContent hideTextOnMobile={hideTextOnMobile}>
        <HeroTitle textColor={textColor} hideTextOnMobile={hideTextOnMobile}>
          {title}
        </HeroTitle>
        {subtitle && (
          <HeroSubtitle
            textColor={textColor}
            hideTextOnMobile={hideTextOnMobile}
          >
            {subtitle}
          </HeroSubtitle>
        )}
        {children}
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
