import React from 'react';
// @ts-ignore
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useCarousel } from './hooks/useCarousel/useCarousel';
import {
  CarouselContainer,
  CarouselControls,
  CarouselDot,
  CarouselDots,
  CarouselImage,
  CarouselOverlay,
  CarouselSlide,
  CarouselWrapper,
  ControlButton
} from './styles/Carousel.styles';

export interface CarouselItem {
  id: number;
  image: string;
  alt: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlayInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlayInterval = 5000
}) => {
  const {
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide,
    handleControlInteraction
  } = useCarousel({ items, autoPlayInterval });

  return (
    <CarouselContainer>
      <CarouselWrapper>
        {items.map((item, index) => (
          <CarouselSlide key={item.id} isActive={index === currentSlide}>
            <CarouselImage src={item.image} alt={item.alt} />
            <CarouselOverlay />
          </CarouselSlide>
        ))}

        <CarouselControls>
          <ControlButton
            type="button"
            aria-label="Previous slide"
            onClick={() => handleControlInteraction(prevSlide)}
          >
            <BsChevronLeft />
          </ControlButton>
          <ControlButton
            type="button"
            aria-label="Next slide"
            onClick={() => handleControlInteraction(nextSlide)}
          >
            <BsChevronRight />
          </ControlButton>
        </CarouselControls>

        <CarouselDots>
          {items.map((_, index) => (
            <CarouselDot
              key={index}
              isActive={index === currentSlide}
              onClick={() => handleControlInteraction(() => goToSlide(index))}
            />
          ))}
        </CarouselDots>
      </CarouselWrapper>
    </CarouselContainer>
  );
};

export default Carousel;
