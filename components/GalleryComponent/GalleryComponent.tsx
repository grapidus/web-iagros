import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { GalleryImageData } from '../../constants/galleryData';
import { useGallery } from './hooks/useGallery';
import {
  FilterButton,
  FilterButtons,
  GalleryContainer,
  GalleryGrid,
  GalleryImage,
  GalleryItem,
  ImageDescription,
  ImageInfo,
  ImageOverlay,
  ImageTitle,
  LightboxClose,
  LightboxContent,
  LightboxCounter,
  LightboxDescription,
  LightboxError,
  LightboxImage,
  LightboxImageContainer,
  LightboxInfo,
  LightboxLoader,
  LightboxNav,
  LightboxOverlay,
  LightboxTitle,
  SectionTitle
} from './styles/GalleryComponent.styles';

interface GalleryProps {
  images: GalleryImageData[];
  title?: string;
  showFilters?: boolean;
  showImageInfo?: boolean;
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  className?: string;
}

const GalleryComponent: React.FC<GalleryProps> = ({
  images,
  title = 'Galería',
  showFilters = true,
  showImageInfo = true,
  columns = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  },
  className
}) => {
  const {
    selectedCategory,
    lightboxOpen,
    currentImageIndex,
    imageLoaded,
    imageError,
    categories,
    filteredImages,
    setSelectedCategory,
    openLightbox,
    closeLightbox,
    nextImage,
    prevImage,
    handleImageLoad,
    handleImageError
  } = useGallery({ images });

  return (
    <GalleryContainer className={className} columns={columns}>
      {title && <SectionTitle>{title}</SectionTitle>}

      {/* Filtros */}
      {showFilters && categories.length > 1 && (
        <FilterButtons>
          {categories.map((category) => (
            <FilterButton
              key={category}
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category === 'todos'
                ? 'Todos'
                : category.charAt(0).toUpperCase() + category.slice(1)}
            </FilterButton>
          ))}
        </FilterButtons>
      )}

      {/* Grid de imágenes */}
      <GalleryGrid>
        {filteredImages.map((image, index) => (
          <GalleryItem key={image.id} onClick={() => openLightbox(index)}>
            <GalleryImage src={image.src} alt={image.title} loading="lazy" />
            <ImageOverlay>
              {showImageInfo && (
                <ImageInfo>
                  <ImageTitle>{image.title}</ImageTitle>
                  <ImageDescription>{image.description}</ImageDescription>
                </ImageInfo>
              )}
            </ImageOverlay>
          </GalleryItem>
        ))}
      </GalleryGrid>

      {/* Lightbox */}
      <LightboxOverlay
        className={lightboxOpen ? 'open' : ''}
        onClick={closeLightbox}
      >
        <LightboxContent onClick={(e) => e.stopPropagation()}>
          <LightboxClose onClick={closeLightbox}>
            <IoClose />
          </LightboxClose>

          {filteredImages.length > 0 && (
            <LightboxCounter>
              {currentImageIndex + 1} / {filteredImages.length}
            </LightboxCounter>
          )}

          {filteredImages.length > 1 && (
            <LightboxNav direction="prev" onClick={prevImage}>
              <FaChevronLeft />
            </LightboxNav>
          )}

          <LightboxImageContainer>
            {!imageLoaded && !imageError && (
              <LightboxLoader>Cargando imagen...</LightboxLoader>
            )}

            {imageError ? (
              <LightboxError>
                Error al cargar la imagen
                <small>La imagen no se pudo cargar correctamente</small>
              </LightboxError>
            ) : (
              filteredImages[currentImageIndex] && (
                <LightboxImage
                  src={filteredImages[currentImageIndex].src}
                  alt={filteredImages[currentImageIndex].title}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  isLoaded={imageLoaded}
                />
              )
            )}
          </LightboxImageContainer>

          {filteredImages.length > 1 && (
            <LightboxNav direction="next" onClick={nextImage}>
              <FaChevronRight />
            </LightboxNav>
          )}

          {imageLoaded &&
            !imageError &&
            filteredImages[currentImageIndex] &&
            showImageInfo && (
              <LightboxInfo>
                <LightboxTitle>
                  {filteredImages[currentImageIndex]?.title}
                </LightboxTitle>
                <LightboxDescription>
                  {filteredImages[currentImageIndex]?.description}
                </LightboxDescription>
              </LightboxInfo>
            )}
        </LightboxContent>
      </LightboxOverlay>
    </GalleryContainer>
  );
};

export default GalleryComponent;
