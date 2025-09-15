import React from 'react';
import GalleryItem, { GalleryItemProps } from './components/GalleryItem';
import {
  GalleryContainer,
  GalleryGrid,
  GalleryHeader,
  GallerySubtitle,
  GalleryTitle
} from './styles/Gallery.styles';

export interface GalleryProps {
  title: string;
  subtitle?: string;
  items: GalleryItemProps[];
}

const Gallery: React.FC<GalleryProps> = ({ title, subtitle, items }) => {
  return (
    <GalleryContainer>
      <GalleryHeader>
        <GalleryTitle>{title}</GalleryTitle>
        {subtitle && <GallerySubtitle>{subtitle}</GallerySubtitle>}
      </GalleryHeader>

      <GalleryGrid>
        {items.map((item, index) => (
          <GalleryItem
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            alt={item.alt}
          />
        ))}
      </GalleryGrid>
    </GalleryContainer>
  );
};

export default Gallery;
