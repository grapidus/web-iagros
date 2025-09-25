import { useEffect, useState } from 'react';
import { GalleryImageData } from '../../../constants/galleryData';

interface UseGalleryProps {
  images: GalleryImageData[];
}

interface UseGalleryReturn {
  // Estados
  selectedCategory: string;
  lightboxOpen: boolean;
  currentImageIndex: number;
  imageLoaded: boolean;
  imageError: boolean;

  // Datos computados
  categories: string[];
  filteredImages: GalleryImageData[];

  // Funciones
  setSelectedCategory: (category: string) => void;
  openLightbox: (index: number) => void;
  closeLightbox: () => void;
  nextImage: () => void;
  prevImage: () => void;
  handleImageLoad: () => void;
  handleImageError: () => void;
}

export const useGallery = ({ images }: UseGalleryProps): UseGalleryReturn => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Obtener categorías únicas
  const categories = [
    'todos',
    ...Array.from(new Set(images.map((img) => img.category)))
  ];

  const filteredImages =
    selectedCategory === 'todos'
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    const nextIndex =
      currentImageIndex === filteredImages.length - 1
        ? 0
        : currentImageIndex + 1;
    setCurrentImageIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex =
      currentImageIndex === 0
        ? filteredImages.length - 1
        : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
  };

  const preloadImage = (src: string) => {
    if (!src) {
      setImageError(true);
      return;
    }

    const img = new Image();
    let timeoutId: NodeJS.Timeout;

    // Timeout para evitar loading infinito (10 segundos)
    timeoutId = setTimeout(() => {
      setImageError(true);
      setImageLoaded(false);
    }, 10000);

    img.onload = () => {
      clearTimeout(timeoutId);
      setImageLoaded(true);
      setImageError(false);
    };

    img.onerror = () => {
      clearTimeout(timeoutId);
      setImageError(true);
      setImageLoaded(false);
    };

    img.src = src;
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  // Resetear estados cuando cambie la imagen actual
  useEffect(() => {
    if (lightboxOpen && filteredImages[currentImageIndex]) {
      setImageLoaded(false);
      setImageError(false);
      preloadImage(filteredImages[currentImageIndex].src);
    }
  }, [currentImageIndex, lightboxOpen, filteredImages]);

  // Manejar teclas del teclado
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [lightboxOpen, currentImageIndex, filteredImages.length]);

  return {
    // Estados
    selectedCategory,
    lightboxOpen,
    currentImageIndex,
    imageLoaded,
    imageError,

    // Datos computados
    categories,
    filteredImages,

    // Funciones
    setSelectedCategory,
    openLightbox,
    closeLightbox,
    nextImage,
    prevImage,
    handleImageLoad,
    handleImageError
  };
};
