import { NavLink } from 'react-router-dom'
import logo from '../../images/logo_header.png'
import { useRef } from 'react'


import './Header.scss'
import { createMainScroll } from '../../helpers/createMainScroll'

export function Header() {

  const pageElement = useRef(null)

  function handleClickPageWithScroll() {
    createMainScroll(pageElement)
  }

  return (
    <header className="header">
      <div className="header__container _container">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header__menu menu">
          <ul className="menu__list" ref={pageElement}>
            <li className="menu__item" onClick={handleClickPageWithScroll}>
              <NavLink to="/portfolio" className="menu__link">Портфолио</NavLink>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">Услуги</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">Цены</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#сontacts">Контакты</a>
            </li>
          </ul>
        </div>
        <div className="header__red-rectangle red-rectangle"></div>
      </div>
    </header>
  )
}
