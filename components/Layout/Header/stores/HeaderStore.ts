import { create } from 'zustand';

interface HeaderState {
  isMobileMenuOpen: boolean;
  openSubMenus: Set<number>;
}

interface HeaderActions {
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  openMobileMenu: () => void;
  toggleSubMenu: (index: number) => void;
  closeAllSubMenus: () => void;
}

type HeaderStore = HeaderState & HeaderActions;

export const useHeaderStore = create<HeaderStore>((set) => ({
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
