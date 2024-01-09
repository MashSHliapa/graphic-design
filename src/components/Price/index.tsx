import { MainTheme } from '../MainTheme'
import './Price.scss'

export function Price() {

  return (
    <MainTheme>
      <div className="price">
        <div className="price__title _title-main">Прайс</div>
        <div className="price__menu menu-main">
          <div className="menu-main__separator-main menu-main__separator-main_long _separator"></div>
          <ul className="menu-main__list">

            <li className="menu-main__item menu-main__item_price">
              <span>ЛИСТОВКИ</span>
              <span className="menu-main__price">от 15$</span>
            </li>

            <li className="menu-main__item menu-main__item_price">
              <span>визитки</span>
              <span className="menu-main__price">от 5$</span>
            </li>

            <li className="menu-main__item menu-main__item_price">
              <span>блокноты</span>
              <span className="menu-main__price">от 18$</span>
            </li>

            <li className="menu-main__item menu-main__item_price">
              <span>МЕНЮ</span>
              <span className="menu-main__price">от 20$</span>
            </li>

            <li className="menu-main__item menu-main__item_price">
              <span>ДИПЛОМЫ, БЛАГОДАРНОСТИ</span>
              <span className="menu-main__price">от 8$</span>
            </li>

            <li className="menu-main__item menu-main__item_price">
              <span className='menu-main__link-reduced'>СЕРТИФИКАТЫ, Пригласительные</span>
              <span className="menu-main__price">от 8$</span>
            </li>

            <li className="menu-main__item menu-main__item_price">
              <span>ПЛАКАТЫ, АФИШИ</span>
              <span className="menu-main__price">от 15$</span>
            </li>

            <li className="menu-main__item menu-main__item_price">
              <span>БАННЕРЫ</span>
              <span className="menu-main__price">от 16$</span>
            </li>

            <li className="menu-main__item menu-main__item_price">
              <span>СТИКЕРЫ,БИРКИ</span>
              <span className="menu-main__price">от 3$</span>
            </li>

            <li className="menu-main__item menu-main__item_price">
              <span>ПОСТ & СТОРИС</span>
              <span className="menu-main__price">от 17$</span>
            </li>

            <li className="menu-main__item menu-main__item_price">
              <span>ЛОГОТИПЫ</span>
              <span className="menu-main__price">от 30$</span>
            </li>
          </ul>
        </div>
      </div>
    </MainTheme>
  )
}
