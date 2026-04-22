import { useMemo } from "react";
import useAgroInsumos from "../useAgroInsumos/useAgroInsumos";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

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
  const { categories } = useAgroInsumos();
  const menuItems = useMemo<MenuItem[]>(
    () => [
      { label: "Inicio", href: `${basePath}/` },
      {
        label: "Nuestra Organización",
        href: "#",
        subItems: [
          {
            label: "Nuestra Historia",
            href: `${basePath}/history`,
          },
          {
            label: "Misión",
            href: `${basePath}/mission`,
          },
          {
            label: "Visión",
            href: `${basePath}/vision`,
          },
        ],
      },
      {
        label: "Agro Insumos",
        href: `${basePath}/agro-insumos`,
        subItems: categories.map((category) => ({
          label: category.name,
          href: `${basePath}/agro-insumos/${category.slug}`,
        })),
      },
      {
        label: "Experiencias",
        href: `${basePath}/experiencias`,
        subItems: [
          {
            label: "Galería de Imágenes",
            href: `${basePath}/gallery`,
          },
        ],
      },
      { label: "Blog", href: `${basePath}/blog` },
      {
        label: "Escríbanos",
        href: `${basePath}/contact`,
      },
      {
        label: "Intranet",
        href: `${basePath}/intranet`,
      },
    ],
    [categories],
  );

  return {
    menuItems,
  };
};
