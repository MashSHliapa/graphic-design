import { MainTheme } from '../MainTheme'
import { NavLink } from 'react-router-dom'
import './Price.scss'

export function Price() {

  return (
    <MainTheme>
      <div className="price">
        <div className="price__title _title-main">Прайс</div>
        <div className="price__menu menu-main">
          <div className="menu-main__separator menu-main__separator_long"></div>
          <ul className="menu-main__list">

            <li className="menu-main__item menu-main__item_price">
              <span>ЛИСТОВКИ</span>
              <span className="menu-main__price">от 15$</span>
            </li>

            <li className="menu-main__item menu-main__item_price">
              <span>визитки</span>
              <span className="menu-main__price">от 15$</span>
            </li>

            <li className="menu-main__item menu-main__item_price">
              <span>блокноты</span>
              <span className="menu-main__price">от 15$</span>
            </li>

            <li className="menu-main__item menu-main__item_price">
              <span>МЕНЮ</span>
              <span className="menu-main__price">от 15$</span>
            </li>

            <li className="menu-main__item menu-main__item_price">
              <span>ДИПЛОМЫ, БЛАГОДАРНОСТИ</span>
              <span className="menu-main__price">от 15$</span>
            </li>

            <li className="menu-main__item menu-main__item_price">
              <span>СЕРТИФИКАТЫ, Пригласительные</span>
              <span className="menu-main__price">от 15$</span>
            </li>

            <li className="menu-main__item menu-main__item_price">
              <span>ПЛАКАТЫ, АФИШИ</span>
              <span className="menu-main__price">от 15$</span>
            </li>

            <li className="menu-main__item menu-main__item_price">
              <span>БАННЕРЫ</span>
              <span className="menu-main__price">от 15$</span>
            </li>

            <li className="menu-main__item menu-main__item_price">
              <span>СТИКЕРЫ,БИРКИ</span>
              <span className="menu-main__price">от 15$</span>
            </li>
            <li className="menu-main__item menu-main__item_price">
              <span>ПОСТ & СТОРИС</span>
              <span className="menu-main__price">от 15$</span>
            </li>
            <li className="menu-main__item menu-main__item_price">
              <span>ЛОГОТИПЫ</span>
              <span className="menu-main__price">от 15$</span>
            </li>



            {/* <li className="menu-main__item">
              Визитки<span>от</span> 5$
            </li>
            <li className="menu-main__item">
              БЛОКНОТЫ<span>от</span> 18$
            </li>
            <li className="menu-main__item">
              МЕНЮ.................................................<span>от</span> 20$
            </li>
            <li className="menu-main__item">
              ДИПЛОМЫ, БЛАГОДАРНОСТИ...............<span>от</span> 8$
            </li>
            <li className="menu-main__item">
              СЕРТИФИКАТЫ, Пригласительные....<span>от</span> 8$
            </li>
            <li className="menu-main__item">
              ПЛАКАТЫ, АФИШИ................................<span>от</span> 15$
            </li>
            <li className="menu-main__item">
              БАННЕРЫ............................................<span>от</span> 16$
            </li>
            <li className="menu-main__item">
              СТИКЕРЫ,БИРКИ.................................<span>от</span> 3$
            </li>
            <li className="menu-main__item">
              ПОСТ & СТОРИС..................................<span>от</span> 17$
            </li>
            <li className="menu-main__item">
              ЛОГОТИПЫ..........................................<span>от</span> 30$
            </li> */}
          </ul>
        </div>
      </div>

    </MainTheme>
  )
}
