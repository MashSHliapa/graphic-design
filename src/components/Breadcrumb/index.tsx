import { NavLink } from 'react-router-dom'
import './Breadcrumb.scss'

export function Breadcrumb(props: { children: React.ReactNode }) {
  return (
    <div className="breadcrumb">
      <ul className="breadcrumb__list">
        <li className="breadcrumb__item">
          <NavLink to="/" target="_top">на главную<span className="breadcrumb__slash">/</span></NavLink>
        </li>
        <li className="breadcrumb__item">
          <NavLink to="/portfolio" target="_top"> портфолио<span className="breadcrumb__slash">/</span></NavLink>
        </li>
        <li className="breadcrumb__item_active" aria-current="page">{props.children}</li>
      </ul>
    </div>
  )
}
