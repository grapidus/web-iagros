import React from 'react';
import { BsChevronDown, BsList, BsX } from 'react-icons/bs';

import { useMenuNavigation } from './hooks/useMenuNavigation/useMenuNavigation';
import { useMobileNavigation } from './hooks/useMobileNavigation/useMobileNavigation';
import {
  AnimatedMenuIcon,
  DropdownItem,
  DropdownLink,
  DropdownList,
  DropdownMenu,
  ExpandIcon,
  ExpandIconButton,
  LogoContainer,
  LogoImage,
  MobileMenu,
  MobileMenuButton,
  MobileNavButton,
  MobileNavItem,
  MobileNavLink,
  MobileNavList,
  MobileNavMainLink,
  MobileSubMenuItem,
  MobileSubMenuLink,
  MobileSubMenuList,
  NavItem,
  NavLink,
  NavList,
  NavbarContainer,
  NavbarWrapper,
  Navigation
} from './styles/NavbarMenu.styles';

interface NavbarMenuProps {
  logoSrc: string;
  logoAlt: string;
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({ logoSrc, logoAlt }) => {
  const {
    isMobileMenuOpen,
    openSubMenus,
    toggleMobileMenu,
    closeMobileMenu,
    toggleSubMenu
  } = useMobileNavigation();
  const { menuItems } = useMenuNavigation();

  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>
          <LogoContainer>
            <NavLink href="/">
              <LogoImage src={logoSrc} alt={logoAlt} />
            </NavLink>
          </LogoContainer>

          <Navigation>
            <NavList>
              {menuItems.map((item, index) => (
                <NavItem key={index}>
                  <NavLink href={item.href} $hasSubItems={!!item.subItems}>
                    {item.label}
                  </NavLink>
                  {item.subItems && (
                    <DropdownMenu>
                      <DropdownList>
                        {item.subItems.map((subItem, subIndex) => (
                          <DropdownItem key={subIndex}>
                            <DropdownLink href={subItem.href}>
                              {subItem.label}
                            </DropdownLink>
                          </DropdownItem>
                        ))}
                      </DropdownList>
                    </DropdownMenu>
                  )}
                </NavItem>
              ))}
            </NavList>
          </Navigation>

          <MobileMenuButton onClick={toggleMobileMenu} aria-label="Toggle menu">
            <AnimatedMenuIcon $isOpen={isMobileMenuOpen}>
              <BsList size={28} />
              <BsX size={28} />
            </AnimatedMenuIcon>
          </MobileMenuButton>
        </NavbarWrapper>
        <MobileMenu $isOpen={isMobileMenuOpen}>
          <MobileNavList>
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                <MobileNavItem>
                  {item.subItems ? (
                    <MobileNavButton>
                      <MobileNavMainLink
                        href={item.href}
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </MobileNavMainLink>
                      <ExpandIconButton
                        onClick={() => toggleSubMenu(index)}
                        type="button"
                      >
                        <ExpandIcon $isOpen={openSubMenus.has(index)}>
                          <BsChevronDown size={16} />
                        </ExpandIcon>
                      </ExpandIconButton>
                    </MobileNavButton>
                  ) : (
                    <MobileNavLink href={item.href} onClick={closeMobileMenu}>
                      {item.label}
                    </MobileNavLink>
                  )}
                </MobileNavItem>
                {item.subItems && (
                  <MobileSubMenuList $isOpen={openSubMenus.has(index)}>
                    {item.subItems.map((subItem, subIndex) => (
                      <MobileSubMenuItem key={subIndex}>
                        <MobileSubMenuLink
                          href={subItem.href}
                          onClick={closeMobileMenu}
                        >
                          {subItem.label}
                        </MobileSubMenuLink>
                      </MobileSubMenuItem>
                    ))}
                  </MobileSubMenuList>
                )}
              </React.Fragment>
            ))}
          </MobileNavList>
        </MobileMenu>
      </NavbarContainer>
    </>
  );
};

export default NavbarMenu;
