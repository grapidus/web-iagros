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
    description:
      'Informate acerca de quienes somos y como podemos ayudarte.',
    image:
      'https://iagros.com/wp-content/uploads/2024/08/tarjeta-experiencia-360x240.png',
    alt: 'Imagen de cultivo organización agrícola'
  },
  {
    id: 2,
    title: 'AGROINSUMOS',
    description:
      'Contamos con un amplio catálogo de productos, conócelos.',
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
