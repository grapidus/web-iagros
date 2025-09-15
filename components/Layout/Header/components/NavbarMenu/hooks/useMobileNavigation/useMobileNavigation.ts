import { useNavMenuStore } from '../../stores/NavMenuStore';

export const useMobileNavigation = () => {
  const {
    isMobileMenuOpen,
    openSubMenus,
    toggleMobileMenu,
    closeMobileMenu,
    openMobileMenu,
    toggleSubMenu,
    closeAllSubMenus
  } = useNavMenuStore();

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
