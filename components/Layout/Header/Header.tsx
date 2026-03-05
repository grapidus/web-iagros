import { getAssetPath } from '../../../utils/getAssetPath';
import NavbarMenu from './components/NavbarMenu/NavbarMenu';

const Header = () => {
  return (
    <header>
      <NavbarMenu
        logoSrc={getAssetPath('/images/logos/logo-iagros.png')}
        logoAlt="Logo Iagros"
      />
    </header>
  );
};

export default Header;
