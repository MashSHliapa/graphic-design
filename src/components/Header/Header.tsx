import { NavLink, useLocation } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import logo from '../../images/logo_header.png';
import instagram from '../../icons/instagram_header.svg';
import vk from '../../icons/vk_header.svg';
import './Header.scss';

export function Header() {
  const location = useLocation();

  const portfolioPaths = ['/portfolio/'];

  const isPortfolioPath = portfolioPaths.some((path) => location.pathname.startsWith(path));

  return (
    <header className="header">
      <div className="header__container _container">
        <div className="header__body">
          <NavLink to="/" className="header__logo">
            <img src={logo} alt="logo" />
          </NavLink>
          <div className="header__navbar">
            <Navbar />
          </div>
        </div>
        <div
          className={`${
            isPortfolioPath
              ? 'header__decor_reduced header__decor decor_reduced decor _decor'
              : 'header__decor decor _decor'
          }`}
        >
          <div className="decor__burger-menu">
            <BurgerMenu />
          </div>
          <div className={`decor__icons-group ${isPortfolioPath && 'decor_reduced__icons-group'}`}>
            <div className="decor__icon _icon">
              <a href="https://instagram.com/artdesign_81?igshid=MmVlMjlkMTBhMg==" target="_blank">
                <img src={instagram} alt="instagram" />
              </a>
            </div>
            <div className="decor__icon-vk _icon">
              <a href="https://vk.com/designalenalev" target="_blank">
                <img src={vk} alt="vk" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
