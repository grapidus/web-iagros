import NavbarMenu from './components/NavbarMenu/NavbarMenu';
import { getAssetPath } from '../../../utils/getAssetPath';

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
