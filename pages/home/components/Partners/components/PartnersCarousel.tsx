import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import usePartnersCarousel from '../hooks/usePartnersCarousel/usePartnersCarousel';
import {
  CarouselButton,
  CarouselControls,
  CarouselDots,
  CarouselTrack,
  CarouselWrapper,
  Dot,
  PageCounter,
  PartnerCard,
  PartnerDescription,
  PartnerImage
} from '../styles/Partners.styles';

interface PartnersCarouselProps {
  partners: Array<{
    id: number;
    name: string;
    logo: string;
    alt?: string;
    description?: string;
  }>;
}

const MAX_DOTS = 5;

const PartnersCarousel: React.FC<PartnersCarouselProps> = ({ partners }) => {
  const { currentIndex, nextSlide, prevSlide, maxIndex, visibleItems, isMobile } =
    usePartnersCarousel({
      totalItems: partners.length,
      itemsToShow: 3,
      autoplay: true,
      autoplaySpeed: 3000
    });

  const totalPages = maxIndex + 1;

  const getWindowedDots = () => {
    if (totalPages <= MAX_DOTS) return { start: 0, end: totalPages };
    const half = Math.floor(MAX_DOTS / 2);
    let start = Math.max(0, currentIndex - half);
    let end = start + MAX_DOTS;
    if (end > totalPages) {
      end = totalPages;
      start = Math.max(0, end - MAX_DOTS);
    }
    return { start, end };
  };

  const { start, end } = getWindowedDots();

  return (
    <>
      <CarouselWrapper>
        <CarouselTrack
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleItems}%)`
          }}
        >
          {partners.map((partner) => (
            <PartnerCard key={partner.id} $cols={visibleItems}>
              <PartnerImage src={partner.logo} alt={partner.alt || partner.name} />
              {partner.description && (
                <PartnerDescription>{partner.description}</PartnerDescription>
              )}
            </PartnerCard>
          ))}
        </CarouselTrack>
      </CarouselWrapper>

      <CarouselControls>
        <CarouselButton onClick={prevSlide} disabled={currentIndex === 0} aria-label="Anterior">
          <FaChevronLeft size={14} />
        </CarouselButton>

        {isMobile ? (
          <PageCounter>{currentIndex + 1} / {totalPages}</PageCounter>
        ) : (
          <CarouselDots>
            {Array.from({ length: end - start }).map((_, i) => (
              <Dot key={start + i} $active={start + i === currentIndex} />
            ))}
          </CarouselDots>
        )}

        <CarouselButton onClick={nextSlide} disabled={currentIndex === maxIndex} aria-label="Siguiente">
          <FaChevronRight size={14} />
        </CarouselButton>
      </CarouselControls>
    </>
  );
};

export default PartnersCarousel;
