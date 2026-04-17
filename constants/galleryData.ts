import { getAssetPath } from '../utils/getAssetPath';

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'NUESTRA ORGANIZACIÓN',
    description: 'Entérate de quiénes somos y cómo podemos ayudarte a crecer.',
    image: getAssetPath('/images/galleryHome/nuestra org.webp'),
    alt: 'Nuestra organización IAGROS'
  },
  {
    id: 2,
    title: 'AGROINSUMOS',
    description: 'Contamos con un amplio catálogo de productos, conócelos.',
    image: getAssetPath('/images/galleryHome/agroinsumos.webp'),
    alt: 'Agroinsumos agrícolas IAGROS'
  },
  {
    id: 3,
    title: 'ASESORÍAS Y SERVICIOS',
    description: 'Acompañamiento técnico especializado para el campo colombiano.',
    image: getAssetPath('/images/galleryHome/asesorias y serv.webp'),
    alt: 'Asesorías y servicios agrícolas'
  },
  {
    id: 4,
    title: 'EXPERIENCIAS',
    description: 'Conoce las historias de éxito de nuestros productores aliados.',
    image: getAssetPath('/images/galleryHome/experiencias.webp'),
    alt: 'Experiencias de productores con IAGROS'
  },
  {
    id: 5,
    title: 'BLOG & NOTICIAS',
    description: 'Artículos técnicos y novedades del sector agropecuario.',
    image: getAssetPath('/images/galleryHome/blog.webp'),
    alt: 'Blog y noticias del sector agrícola'
  },
  {
    id: 6,
    title: 'ESCRÍBENOS',
    description: 'Estamos listos para atenderte y resolver todas tus dudas.',
    image: getAssetPath('/images/galleryHome/escribanos.webp'),
    alt: 'Contáctanos IAGROS'
  }
];

// Datos para la galería de imágenes con lightbox
export interface GalleryImageData {
  id: number;
  src: string;
  title: string;
  description: string;
  category: string;
}

export const galleryImages: GalleryImageData[] = [
  {
    id: 1,
    src: 'https://iagros.com/wp-content/uploads/2025/05/IMAGEN-10.jpg',
    title: 'Control Biológico',
    description: 'Soluciones naturales para el control de plagas',
    category: 'productos'
  },
  {
    id: 2,
    src: 'https://iagros.com/wp-content/uploads/2025/05/IMAGEN-12.jpg',
    title: 'Laboratorio de Calidad',
    description: 'Instalaciones modernas para garantizar la calidad',
    category: 'instalaciones'
  },
  {
    id: 3,
    src: 'https://iagros.com/wp-content/uploads/2025/05/IMAGEN-33-scaled.jpg',
    title: 'Fertilizantes Especializados',
    description: 'Nutrición completa para cultivos',
    category: 'productos'
  },
  {
    id: 4,
    src: 'https://iagros.com/wp-content/uploads/2024/08/semilla-1.png',
    title: 'Semillas de Calidad',
    description: 'Semillas certificadas para mejores cosechas',
    category: 'productos'
  },
  {
    id: 5,
    src: 'https://iagros.com/wp-content/uploads/2024/08/evento-1.png',
    title: 'Capacitación Técnica',
    description: 'Eventos educativos para productores',
    category: 'eventos'
  },
  {
    id: 6,
    src: 'https://iagros.com/wp-content/uploads/2024/08/cultivo-1.png',
    title: 'Cultivos Exitosos',
    description: 'Resultados de nuestros clientes',
    category: 'resultados'
  }
];
