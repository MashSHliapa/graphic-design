import { NavLink } from 'react-router-dom'
import services from '../../images/services.jpg'
import servicesMobile from '../../images/services_mobile.jpg'
import './Services.scss'

export function Services() {
  return (
    <div className="services">
      <div className="services__container _container">
        <div className="services__body">
          <div className="services__box">
            <div className="services__image-mobile">
              <img src={servicesMobile} alt="services" />
            </div>
            <div className="services__data">
              <div className="services__services">
                <div className="services__title _title-main">Мои Услуги</div>
                <div className="services__menu">
                  <div className="services__separator _separator"></div>
                  <ul className="services__list">
                    <li className="services__item">
                      <NavLink to="/portfolio/flyers" target="_top" className="services__link">ЛИСТОВКИ</NavLink>
                    </li>
                    <li className="services__item">
                      <NavLink to="/portfolio/cutaways" target="_top" className="services__link" >Визитки</NavLink>
                    </li>
                    <li className="services__item">
                      <NavLink to="/portfolio/notebooks_and_menu" target="_top" className="services__link"> Прайс, МЕНЮ, БЛОКНОТЫ</NavLink>
                    </li>
                    <li className="services__item">
                      <NavLink to="/portfolio/notebooks_and_menu" target="_top" className="services__link">ДИПЛОМЫ & БЛАГОДАРНОСТИ<br /> СЕРТИФИКАТЫ & Пригласительные</NavLink>
                    </li>
                    <li className="services__item">
                      <NavLink to="/portfolio/diplomas_and_certificates" className="services__link" target="_top"> ПЛАКАТЫ & АФИШИ, БАННЕРЫ</NavLink>
                    </li>
                    <li className="services__item">
                      <NavLink to="/portfolio/stickers_and_tags" className="services__link" target="_top">СТИКЕРЫ & БИРКИ</NavLink>
                    </li>
                    <li className="services__item">
                      <NavLink to="/portfolio/posts_and_stories" className="services__link" target="_top"> ИНФОРГАФИКА, ПОСТ & СТОРИС</NavLink>
                    </li>
                    <li className="services__item">
                      <NavLink to="/portfolio/logo" className="services__link" target="_top"> ЛОГОТИПЫ</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="services__buttons">
                <NavLink to="/portfolio" target="_top" className="services__button">портфолио</NavLink>
              </div>
            </div>
          </div>
          <div className="services__theme">
            <div className="services__image">
              <img src={services} alt="services" />
            </div>
            <div className="services__red-rectangle _red-rectangle"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
