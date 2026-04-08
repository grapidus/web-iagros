import { CarouselItem } from '../pages/home/components/Carousel/Carousel';
import { getAssetPath } from '../utils/getAssetPath';

export const carouselItems: CarouselItem[] = [
  {
    id: 1,
    image: getAssetPath('/images/carouselHome/banner-1.webp'),
    alt: 'Agricultura sostenible - Cultivos verdes en campos extensos'
  },
  {
    id: 2,
    image: getAssetPath('/images/carouselHome/banner-3.webp'),
    alt: 'Tecnología agrícola - Equipos modernos en operación'
  },
  {
    id: 3,
    image: getAssetPath('/images/carouselHome/banner-4.webp'),
    alt: 'Productos agrícolas - Cosecha de alta calidad'
  },
  {
    id: 4,
    image: getAssetPath('/images/carouselHome/banner-5.webp'),
    alt: 'Profesionales agrícolas - Expertos en el campo'
  }
];
