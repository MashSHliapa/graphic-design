import './Header.scss'
import logo from '../../images/logo_header.png'
export function Header() {
  return (
    <header className="header">
      <div className="header__container _container">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header__menu menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a className="menu__link" href="#">Портфолио</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">Услуги</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">Цены</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">Контакты</a>
            </li>
          </ul>
        </div>
        <div className="header__red-rectangle red-rectangle"></div>
      </div>
    </header>
  )
}
