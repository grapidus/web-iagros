import { useCallback, useEffect, useState } from 'react';

interface UsePartnersCarouselProps {
  totalItems: number;
  itemsToShow?: number;
  autoplay?: boolean;
  autoplaySpeed?: number;
}

const usePartnersCarousel = ({
  totalItems,
  itemsToShow = 3,
  autoplay = true,
  autoplaySpeed = 5000
}: UsePartnersCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Determinar la cantidad de elementos que se pueden mostrar basado en el ancho de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calcular número de elementos a mostrar basado en el tamaño de pantalla
  const visibleItems = isMobile ? 1 : itemsToShow;

  // Calcular el máximo índice posible
  const maxIndex = totalItems - visibleItems;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay
  useEffect(() => {
    if (autoplay && totalItems > visibleItems) {
      const interval = setInterval(() => {
        nextSlide();
      }, autoplaySpeed);

      return () => clearInterval(interval);
    }
  }, [autoplay, autoplaySpeed, nextSlide, totalItems, visibleItems]);

  return {
    currentIndex,
    nextSlide,
    prevSlide,
    maxIndex,
    visibleItems,
    isMobile
  };
};

export default usePartnersCarousel;
