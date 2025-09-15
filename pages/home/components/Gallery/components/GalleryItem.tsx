import React from 'react';
import {
  GalleryItemContainer,
  GalleryItemDescription,
  GalleryItemImage,
  GalleryItemOverlay,
  GalleryItemTitle
} from '../styles/Gallery.styles';

export interface GalleryItemProps {
  image: string;
  title: string;
  description?: string;
  alt?: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  image,
  title,
  description,
  alt
}) => {
  return (
    <GalleryItemContainer>
      <GalleryItemImage src={image} alt={alt || title} />
      <GalleryItemOverlay>
        <GalleryItemTitle>{title}</GalleryItemTitle>
        {description && (
          <GalleryItemDescription>{description}</GalleryItemDescription>
        )}
      </GalleryItemOverlay>
    </GalleryItemContainer>
  );
};

export default GalleryItem;
