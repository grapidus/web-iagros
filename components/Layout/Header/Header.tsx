import React from 'react';
// @ts-ignore
import { BsChevronDown, BsList, BsX } from 'react-icons/bs';

import { useMobileMenu } from './hooks/useMobileMenu/useMobileMenu';
import { useNavigation } from './hooks/useNavigation/useNavigation';
import {
  AnimatedMenuIcon,
  DropdownItem,
  DropdownLink,
  DropdownList,
  DropdownMenu,
  ExpandIcon,
  ExpandIconButton,
  HeaderContainer,
  HeaderWrapper,
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
  Navigation
} from './styles/Header.styles';

const Header: React.FC = () => {
  const {
    isMobileMenuOpen,
    openSubMenus,
    toggleMobileMenu,
    closeMobileMenu,
    toggleSubMenu
  } = useMobileMenu();
  const { menuItems } = useNavigation();

  return (
    <>
      <HeaderContainer>
        <HeaderWrapper>
          <LogoContainer>
            <NavLink href="/">
              <LogoImage
                src="/images/logos/logo-iagros.png"
                alt="Logo Iagros"
              />
            </NavLink>
          </LogoContainer>

          <Navigation>
            <NavList>
              {menuItems.map((item, index) => (
                <NavItem key={index}>
                  <NavLink href={item.href} hasSubItems={!!item.subItems}>
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
            <AnimatedMenuIcon isOpen={isMobileMenuOpen}>
              <BsList size={28} />
              <BsX size={28} />
            </AnimatedMenuIcon>
          </MobileMenuButton>
        </HeaderWrapper>
      </HeaderContainer>

      <MobileMenu isOpen={isMobileMenuOpen}>
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
                      <ExpandIcon isOpen={openSubMenus.has(index)}>
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
                <MobileSubMenuList isOpen={openSubMenus.has(index)}>
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
    </>
  );
};

export default Header;
