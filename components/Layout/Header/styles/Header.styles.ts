import styled from 'styled-components';
import { device } from '../../../../constants/breakpoints';

export const HeaderContainer = styled.header`
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
`;

export const HeaderWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  gap: 3rem;

  @media ${device.sm} {
    padding: 0 1.5rem;
    gap: 4rem;
  }

  @media ${device.md} {
    padding: 0 2rem;
    gap: 5rem;
  }

  @media ${device.lg} {
    gap: 6rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  height: 50px;
  cursor: pointer;
  width: auto;
  max-height: 50px;
  @media ${device.sm} {
    height: 60px;
  }
`;

export const Navigation = styled.nav`
  display: none;

  @media ${device.lg} {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
    margin-left: auto;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media ${device.xl} {
    gap: 0.8rem;
  }
`;

export const NavItem = styled.li`
  position: relative;
`;

export const NavLink = styled.a<{ hasSubItems?: boolean }>`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  transition: color 0.3s ease;
  padding: 0.6rem 0.7rem;
  position: relative;
  display: flex;
  align-items: center;
  white-space: nowrap;

  @media ${device.xl} {
    font-size: 12px;
    padding: 0.7rem 0.8rem;
  }

  &:hover {
    color: #ee7007;
  }

  &:hover::before {
    width: 100%;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: #ee7007;
    transition: width 0.3s ease;
  }

  ${({ hasSubItems }) =>
    hasSubItems &&
    `
    &::after {
      content: '';
      display: inline-block;
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 4px solid currentColor;
      transition: transform 0.3s ease;
      margin-left: 0.5rem;
    }

    &:hover::after {
      transform: rotate(180deg);
    }
  `}
`;

export const MobileMenuButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  color: #333;
  transition: all 0.3s ease;
  border-radius: 6px;

  svg {
    width: 28px;
    height: 28px;
    transition: all 0.3s ease;
  }

  &:hover {
    color: #ee7007;
    background-color: rgba(238, 112, 7, 0.1);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  @media ${device.lg} {
    display: none;
  }
`;

export const AnimatedMenuIcon = styled.div<{ isOpen: boolean }>`
  position: relative;
  width: 28px;
  height: 28px;
  transition: all 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(90deg)' : 'rotate(0deg)')};

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
    opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
    transform: ${({ isOpen }) => (isOpen ? 'scale(0.8)' : 'scale(1)')};
  }

  svg:last-child {
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    transform: ${({ isOpen }) => (isOpen ? 'scale(1)' : 'scale(0.8)')};
  }
`;

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transform: ${({ isOpen }) =>
    isOpen ? 'translateY(0)' : 'translateY(-100%)'};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: all 0.3s ease;
  z-index: 999;

  @media ${device.lg} {
    display: none;
  }
`;

export const MobileNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0;
`;

export const MobileNavItem = styled.li`
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`;

export const MobileNavLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 1rem 2rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f8f8f8;
    color: #ee7007;
  }
`;

export const MobileNavButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;

  &:hover {
    background-color: #f8f8f8;
  }
`;

export const MobileNavMainLink = styled.a`
  flex: 1;
  color: inherit;
  text-decoration: none;
  padding: 1rem 0 1rem 2rem;
  transition: all 0.3s ease;

  &:hover {
    color: #ee7007;
  }
`;

export const ExpandIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 100%;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #666;

  &:hover {
    background-color: #f0f0f0;
    color: #ee7007;
  }
`;

export const ExpandIcon = styled.span<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const MobileSubMenuList = styled.ul<{ isOpen: boolean }>`
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #f8f8f8;
  max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

export const MobileSubMenuItem = styled.li``;

export const MobileSubMenuLink = styled.a`
  display: block;
  color: #555;
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  text-transform: none;
  letter-spacing: 0.3px;
  padding: 0.7rem 3rem;
  transition: all 0.3s ease;
  margin: 0.2rem 0;

  &:hover {
    background-color: #f0f0f0;
    color: #ee7007;
    padding-left: 3.5rem;
    border-radius: 0 25px 25px 0;
  }

  &::before {
    content: '•';
    margin-right: 0.5rem;
    color: #ee7007;
    font-size: 16px;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  min-width: 220px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;
  margin-top: 10px;

  ${NavItem}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
  }
`;

export const DropdownList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0.5rem 0;
`;

export const DropdownItem = styled.li``;

export const DropdownLink = styled.a`
  display: block;
  color: #333;
  text-decoration: none;
  font-weight: 400;
  font-size: 12px;
  text-transform: none;
  letter-spacing: 0.2px;
  padding: 0.7rem 1.5rem;
  transition: all 0.3s ease;
  white-space: nowrap;
  margin: 0.1rem 0;

  &:hover {
    background-color: #f8f8f8;
    color: #ee7007;
    padding-left: 2rem;
    border-radius: 6px;
  }

  &:first-child {
    margin-top: 0.3rem;
  }

  &:last-child {
    margin-bottom: 0.3rem;
  }
`;
