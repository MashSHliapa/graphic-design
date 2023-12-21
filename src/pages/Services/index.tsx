import { NavLink } from 'react-router-dom'
import './Services.scss'
import { MainTheme } from '../../components/MainTheme'

export function Services() {
  return (
    <MainTheme>
      <div className="services">
        <div className="services__title _title-main">Мои Услуги</div>

        <div className="services__menu menu-main">
          <div className="menu-main__separator"></div>
          <ul className="menu-main__list">
            <li className="menu-main__item">
              <NavLink to="/portfolio/flyers" target="_top" className="menu-main__link">ЛИСТОВКИ</NavLink>
            </li>
            <li className="menu-main__item">
              <NavLink to="/portfolio/cutaway" target="_top" className="menu-main__link" >Визитки</NavLink>
            </li>
            <li className="menu-main__item">
              <a className="menu-main__link" href="#"> БЛОКНОТЫ, МЕНЮ</a>
            </li>
            <li className="menu-main__item">
              <a className="menu-main__link" href="#">ДИПЛОМЫ & БЛАГОДАРНОСТИ<br />  СЕРТИФИКАТЫ & Пригласительные</a>
            </li>
            <li className="menu-main__item">
              <NavLink to="/portfolio/posters" className="menu-main__link" target="_top"> ПЛАКАТЫ, АФИШИ & БАННЕРЫ</NavLink>
            </li>
            <li className="menu-main__item">
              <NavLink to="/portfolio/stickers" className="menu-main__link" target="_top">СТИКЕРЫ & БИРКИ</NavLink>
            </li>
            <li className="menu-main__item">
              <NavLink to="/portfolio/stories" className="menu-main__link" target="_top"> ПОСТ & СТОРИС</NavLink>
            </li>
            <li className="menu-main__item">
              <a className="menu-main__link" href="#"> ЛОГОТИПЫ</a>
            </li>
          </ul>
        </div>

        <div className="services__buttons-group buttons-group">
          <NavLink to="/portfolio" target="_top" className="buttons-group__button">портфолио</NavLink>
          <a href="#" className="buttons-group__button buttons-group__button_booking">заказать дизайн</a>
        </div>
      </div>
    </MainTheme>
  )
}
