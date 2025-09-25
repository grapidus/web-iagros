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
    description: 'Informate acerca de quienes somos y como podemos ayudarte.',
    image:
      'https://iagros.com/wp-content/uploads/2024/08/tarjeta-experiencia-360x240.png',
    alt: 'Imagen de cultivo organización agrícola'
  },
  {
    id: 2,
    title: 'AGROINSUMOS',
    description: 'Contamos con un amplio catálogo de productos, conócelos.',
    image:
      'https://iagros.com/wp-content/uploads/2024/08/tarjeta-experiencia-360x240.png',
    alt: 'Imagen de agroinsumos agrícolas'
  },
  {
    id: 3,
    title: 'ASESORIAS Y SERVICIOS',
    description:
      'Ofrecemos una línea completa de productos orgánicos certificados para una alimentación saludable.',
    image:
      'https://iagros.com/wp-content/uploads/2024/08/tarjeta-experiencia-360x240.png',
    alt: 'Productos orgánicos certificados'
  },
  {
    id: 4,
    title: 'Investigación y desarrollo',
    description:
      'Nuestro equipo de expertos trabaja constantemente en la investigación y desarrollo de nuevas técnicas agrícolas.',
    image:
      'https://iagros.com/wp-content/uploads/2024/08/tarjeta-experiencia-360x240.png',
    alt: 'Laboratorio de investigación agrícola'
  },
  {
    id: 5,
    title: 'Distribución eficiente',
    description:
      'Contamos con una red de distribución que garantiza la frescura de nuestros productos.',
    image:
      'https://iagros.com/wp-content/uploads/2024/08/tarjeta-experiencia-360x240.png',
    alt: 'Sistema de distribución de productos agrícolas'
  },
  {
    id: 6,
    title: 'Comunidad agrícola',
    description:
      'Trabajamos junto a comunidades locales fomentando prácticas agrícolas sostenibles.',
    image:
      'https://iagros.com/wp-content/uploads/2024/08/tarjeta-experiencia-360x240.png',
    alt: 'Comunidad agrícola trabajando en conjunto'
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
