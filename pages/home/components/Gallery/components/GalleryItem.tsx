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
  href?: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  image,
  title,
  description,
  alt,
  href
}) => {
  return (
    <GalleryItemContainer
      as={href ? 'a' : 'div'}
      href={href}
      style={href ? { cursor: 'pointer', textDecoration: 'none' } : undefined}
    >
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
