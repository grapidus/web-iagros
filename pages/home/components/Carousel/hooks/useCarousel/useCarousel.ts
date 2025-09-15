import { useCallback, useEffect, useState } from 'react';
import { CarouselItem } from '../../Carousel';

interface UseCarouselProps {
  items: CarouselItem[];
  autoPlayInterval?: number;
}

export const useCarousel = ({
  items,
  autoPlayInterval = 5000
}: UseCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  }, [items.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Pausar autoplay cuando el usuario interactúa con los controles
  const handleControlInteraction = useCallback((callback: () => void) => {
    setIsAutoPlaying(false);
    callback();

    // Reanudar autoplay después de 5 segundos de inactividad
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
  }, []);

  // Auto play
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(nextSlide, autoPlayInterval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [nextSlide, isAutoPlaying, autoPlayInterval]);

  return {
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide,
    handleControlInteraction
  };
};
