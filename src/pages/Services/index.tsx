import { NavLink } from 'react-router-dom'
import './Services.scss'
import { MainTheme } from '../../components/MainTheme'

export function Services() {
  return (
    <MainTheme>
      <div className="services__title">Мои Услуги</div>
      <div className="services__menu">
        <div className="services__separator"></div>
        <ul className="services__list">
          <li className="services__item">
            <NavLink to="/portfolio/flyers" target="_top" className="services__link">ЛИСТОВКИ</NavLink>
          </li>
          <li className="services__item">
            <NavLink to="/portfolio/cutaway" target="_top" className="services__link" >Визитки</NavLink>
          </li>
          <li className="services__item">
            <a className="services__link" href="#"> БЛОКНОТЫ, МЕНЮ</a>
          </li>
          <li className="services__item">
            <a className="services__link" href="#">ДИПЛОМЫ & БЛАГОДАРНОСТИ<br />  СЕРТИФИКАТЫ & Пригласительные</a>
          </li>
          <li className="services__item">
            <NavLink to="/portfolio/posters" className="services__link" target="_top"> ПЛАКАТЫ, АФИШИ & БАННЕРЫ</NavLink>
          </li>
          <li className="services__item">
            <NavLink to="/portfolio/stickers" className="services__link" target="_top">СТИКЕРЫ & БИРКИ</NavLink>
          </li>
          <li className="services__item">
            <NavLink to="/portfolio/stories" className="services__link" target="_top"> ПОСТ & СТОРИС</NavLink>
          </li>
          <li className="services__item">
            <a className="services__link" href="#"> ЛОГОТИПЫ</a>
          </li>
        </ul>
      </div>
      <div className="services__buttons-group buttons-group">
        <NavLink to="/portfolio" target="_top" className="buttons-group__button">портфолио</NavLink>
        <a href="#" className="buttons-group__button buttons-group__button_booking">заказать дизайн</a>
      </div>
    </MainTheme>
  )
}
