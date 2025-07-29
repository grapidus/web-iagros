import { useHeaderStore } from '../../stores/HeaderStore';

export const useMobileMenu = () => {
  const {
    isMobileMenuOpen,
    openSubMenus,
    toggleMobileMenu,
    closeMobileMenu,
    openMobileMenu,
    toggleSubMenu,
    closeAllSubMenus
  } = useHeaderStore();

  return {
    isMobileMenuOpen,
    openSubMenus,
    toggleMobileMenu,
    closeMobileMenu,
    openMobileMenu,
    toggleSubMenu,
    closeAllSubMenus
  };
};
