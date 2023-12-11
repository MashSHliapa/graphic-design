import { NavLink } from 'react-router-dom'
import services from '../../images/services.jpg'
import './Services.scss'
export function Services() {
  return (
    <div className="services">
      <div className="services__container _container">
        <div className="services__body">
          <div className="services__title">Мои Услуги</div>
          <div className="services__menu">
            <div className="services__separator"></div>
            <ul className="services__list">
              <li className="services__item">
                <a className="services__link" href="#">ЛИСТОВКИ</a>
              </li>
              <li className="services__item">
                <a className="services__link" href="#">Визитки</a>
              </li>
              <li className="services__item">
                <a className="services__link" href="#"> БЛОКНОТЫ, МЕНЮ, КАТАЛОГИ</a>
              </li>
              <li className="services__item">
                <a className="services__link" href="#"> СЕРТИФИКАТЫ, ДИПЛОМЫ, БЛАГОДАРНОСТИ</a>
              </li>
              <li className="services__item">
                <a className="services__link" href="#"> ПЛАКАТЫ, БАННЕРЫ, АФИШИ</a>
              </li>
              <li className="services__item">
                <a className="services__link" href="#">СТИКЕРЫ, ЭТИКЕТКИ, БИРКИ</a>
              </li>
              <li className="services__item">
                <a className="services__link" href="#"> ПОСТ&СТОРИС</a>
              </li>
              <li className="services__item">
                <a className="services__link" href="#"> ЛОГОТИПЫ, ФИРМЕННЫЙ СТИЛЬ</a>
              </li>
            </ul>
          </div>
          <div className="services__buttons-group">
            <NavLink to="/portfolio" className="services__button" >портфолио</NavLink>
            <a href="#" className="services__button services__button_booking">заказать дизайн</a>
          </div>
        </div>
        <div className="services__image">
          <img src={services} alt="services" />
        </div>
        <div className="services__red-rectangle"></div>
      </div>
    </div>
  )
}
