import { NavLink } from 'react-router-dom'
import { useRef } from 'react'
import { createMainScroll } from '../../helpers/createMainScroll'
import './Navbar.scss'

export function Navbar() {
  const pageElement = useRef(null)

  function handleClickPageWithScroll() {
    createMainScroll(pageElement)
  }

  return (
    <div className="navbar">
      <nav className="navbar__body">
        <ul className="navbar__list" ref={pageElement}>
          <li className="navbar__item" >
            <NavLink to="/portfolio" className="navbar__link">Портфолио</NavLink>
          </li>
          <li className="navbar__item" onClick={handleClickPageWithScroll}>
            <NavLink to="/" className="navbar__link">Услуги</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/cost" className="navbar__link" >Цены</NavLink>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="#contacts">Контакты</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
