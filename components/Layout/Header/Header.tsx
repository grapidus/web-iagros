import NavbarMenu from './components/NavbarMenu/NavbarMenu';

const Header = () => {
  return (
    <header>
      <NavbarMenu
        logoSrc="/images/logos/logo-iagros.png"
        logoAlt="Logo Iagros"
      />
    </header>
  );
};

export default Header;
