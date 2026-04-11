import React from 'react';
import GalleryItem, { GalleryItemProps } from './components/GalleryItem';
import {
  GalleryContainer,
  GalleryEyebrow,
  GalleryGrid,
  GalleryHeader,
  GallerySubtitle,
  GalleryTitle
} from './styles/Gallery.styles';

export interface GalleryProps {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  items: GalleryItemProps[];
  itemHref?: string;
}

const Gallery: React.FC<GalleryProps> = ({
  title,
  eyebrow,
  subtitle,
  items,
  itemHref
}) => {
  return (
    <GalleryContainer>
      <GalleryHeader>
        {eyebrow && <GalleryEyebrow>{eyebrow}</GalleryEyebrow>}
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
            href={itemHref}
          />
        ))}
      </GalleryGrid>
    </GalleryContainer>
  );
};

export default Gallery;
