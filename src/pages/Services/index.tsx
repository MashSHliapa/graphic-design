import { NavLink } from 'react-router-dom'
import './Services.scss'
import { MainTheme } from '../../components/MainTheme'

export function Services() {
  return (
    <MainTheme>
      <div className="services">
        <div className="services__title _title-main">Мои Услуги</div>

        <div className="services__menu menu-main">
          <div className="menu-main__separator-main _separator"></div>
          <ul className="menu-main__list">
            <li className="menu-main__item">
              <NavLink to="/portfolio/flyers" target="_top" className="menu-main__link">ЛИСТОВКИ</NavLink>
            </li>
            <li className="menu-main__item">
              <NavLink to="/portfolio/cutaways" target="_top" className="menu-main__link" >Визитки</NavLink>
            </li>
            <li className="menu-main__item">
              <NavLink to="/portfolio/notebooks_and_menu" target="_top" className="menu-main__link"> БЛОКНОТЫ, МЕНЮ</NavLink>
            </li>
            <li className="menu-main__item">
              <NavLink to="/portfolio/notebooks_and_menu" target="_top" className="menu-main__link">ДИПЛОМЫ & БЛАГОДАРНОСТИ<br /> СЕРТИФИКАТЫ & Пригласительные</NavLink>
            </li>
            <li className="menu-main__item">
              <NavLink to="/portfolio/diplomas_and_certificates" className="menu-main__link" target="_top"> ПЛАКАТЫ, АФИШИ & БАННЕРЫ</NavLink>
            </li>
            <li className="menu-main__item">
              <NavLink to="/portfolio/stickers_and_tags" className="menu-main__link" target="_top">СТИКЕРЫ & БИРКИ</NavLink>
            </li>
            <li className="menu-main__item">
              <NavLink to="/portfolio/posts_and_stories" className="menu-main__link" target="_top"> ПОСТ & СТОРИС</NavLink>
            </li>
            <li className="menu-main__item">
              <NavLink to="/portfolio/logo"> ЛОГОТИПЫ</NavLink>
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
