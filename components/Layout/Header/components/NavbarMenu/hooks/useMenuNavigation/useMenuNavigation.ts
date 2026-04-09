import { useMemo } from 'react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

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
      { label: 'Inicio', href: `${basePath}/` },
      {
        label: 'Nuestra Organización',
        href: '#',
        subItems: [
          {
            label: 'Nuestra Historia',
            href: `${basePath}/history`
          },
          {
            label: 'Misión',
            href: `${basePath}/mission`
          },
          {
            label: 'Visión',
            href: `${basePath}/vision`
          }
        ]
      },
      {
        label: 'Agro Insumos',
        href: `${basePath}/agro-insumos`,
        subItems: [
          {
            label: 'Fertilizantes',
            href: `${basePath}/agro-insumos/fertilizantes`
          },
          { label: 'Pesticidas', href: `${basePath}/agro-insumos/pesticidas` },
          { label: 'Semillas', href: `${basePath}/agro-insumos/semillas` },
          {
            label: 'Herramientas',
            href: `${basePath}/agro-insumos/herramientas`
          }
        ]
      },
      {
        label: 'Experiencias',
        href: `${basePath}/experiencias`,
        subItems: [
          {
            label: 'Galería de Imágenes',
            href: `${basePath}/gallery`
          }
        ]
      },
      { label: 'Blog', href: `${basePath}/blog` },
      {
        label: 'Escríbanos',
        href: `${basePath}/contact`
      }
    ],
    []
  );

  return {
    menuItems
  };
};
