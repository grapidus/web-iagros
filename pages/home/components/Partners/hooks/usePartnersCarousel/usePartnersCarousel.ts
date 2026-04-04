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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 576);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getVisibleItems = () => {
    if (typeof window === 'undefined') return itemsToShow;
    if (window.innerWidth < 576) return 1;
    if (window.innerWidth < 992) return 2;
    return itemsToShow;
  };

  const visibleItems = getVisibleItems();

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
