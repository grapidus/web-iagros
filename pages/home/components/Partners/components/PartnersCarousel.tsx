import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import usePartnersCarousel from '../hooks/usePartnersCarousel/usePartnersCarousel';
import {
  CarouselButton,
  CarouselControls,
  PartnerImage,
  PartnerItem,
  PartnersCarouselTrack,
  PartnersCarouselWrapper
} from '../styles/Partners.styles';

interface PartnersCarouselProps {
  partners: Array<{
    id: number;
    name: string;
    logo: string;
    alt?: string;
  }>;
}

const PartnersCarousel: React.FC<PartnersCarouselProps> = ({ partners }) => {
  const { currentIndex, nextSlide, prevSlide, maxIndex, visibleItems } =
    usePartnersCarousel({
      totalItems: partners.length,
      itemsToShow: 3,
      autoplay: true,
      autoplaySpeed: 3000
    });

  return (
    <>
      <PartnersCarouselWrapper>
        <PartnersCarouselTrack
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleItems}%)`
          }}
        >
          {partners.map((partner) => (
            <PartnerItem key={partner.id}>
              <PartnerImage
                src={partner.logo}
                alt={partner.alt || partner.name}
              />
            </PartnerItem>
          ))}
        </PartnersCarouselTrack>
      </PartnersCarouselWrapper>

      <CarouselControls>
        <CarouselButton
          onClick={prevSlide}
          disabled={currentIndex === 0}
          aria-label="Anterior"
        >
          <FaChevronLeft size={16} color="currentColor" />
        </CarouselButton>
        <CarouselButton
          onClick={nextSlide}
          disabled={currentIndex === maxIndex}
          aria-label="Siguiente"
        >
          <FaChevronRight size={16} color="currentColor" />
        </CarouselButton>
      </CarouselControls>
    </>
  );
};

export default PartnersCarousel;
