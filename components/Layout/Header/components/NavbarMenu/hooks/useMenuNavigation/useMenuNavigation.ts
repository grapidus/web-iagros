import { useMemo } from 'react';

export interface SubMenuItem {
  label: string;
  href: string;
}

export interface MenuItem {
  label: string;
  href: string;
  subItems?: SubMenuItem[];
}

export const useMenuNavigation = () => {
  const menuItems = useMemo<MenuItem[]>(
    () => [
      { label: 'Inicio', href: '/' },
      {
        label: 'Nuestra Organización',
        href: '/nuestra-organizacion',
        subItems: [
          {
            label: 'Nuestra Historia',
            href: '/nuestra-organizacion/nuestra_historia'
          },
          {
            label: 'Misión',
            href: '/nuestra-organizacion/mision'
          },
          {
            label: 'Visión',
            href: '/nuestra-organizacion/vision'
          }
        ]
      },
      {
        label: 'Agro Insumos',
        href: '/agro-insumos',
        subItems: [
          { label: 'Fertilizantes', href: '/agro-insumos/fertilizantes' },
          { label: 'Pesticidas', href: '/agro-insumos/pesticidas' },
          { label: 'Semillas', href: '/agro-insumos/semillas' },
          { label: 'Herramientas', href: '/agro-insumos/herramientas' }
        ]
      },
      {
        label: 'Escríbanos',
        href: '/escribanos'
      },
      {
        label: 'Experiencias',
        href: '/experiencias',
        subItems: [
          {
            label: 'Galería de Imágenes',
            href: '/experiencias/galeria-de-imagenes'
          }
        ]
      },
      { label: 'Blog', href: '/blog' }
    ],
    []
  );

  return {
    menuItems
  };
};
