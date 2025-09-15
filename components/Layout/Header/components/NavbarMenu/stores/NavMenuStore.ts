import { create } from 'zustand';

interface NavMenuState {
  isMobileMenuOpen: boolean;
  openSubMenus: Set<number>;
}

interface NavMenuActions {
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  openMobileMenu: () => void;
  toggleSubMenu: (index: number) => void;
  closeAllSubMenus: () => void;
}

type NavMenuStore = NavMenuState & NavMenuActions;

export const useNavMenuStore = create<NavMenuStore>((set) => ({
  isMobileMenuOpen: false,
  openSubMenus: new Set(),
  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () =>
    set({
      isMobileMenuOpen: false,
      openSubMenus: new Set()
    }),
  openMobileMenu: () => set({ isMobileMenuOpen: true }),
  toggleSubMenu: (index: number) =>
    set((state) => {
      const newOpenSubMenus = new Set(state.openSubMenus);
      if (newOpenSubMenus.has(index)) {
        newOpenSubMenus.delete(index);
      } else {
        newOpenSubMenus.add(index);
      }
      return { openSubMenus: newOpenSubMenus };
    }),
  closeAllSubMenus: () => set({ openSubMenus: new Set() })
}));
