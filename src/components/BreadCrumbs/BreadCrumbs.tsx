import { NavLink } from 'react-router-dom'
import './BreadCrumbs.scss'

export function BreadCrumbs(props: { children: React.ReactNode }) {
  return (
    <div className="breadCrumbs">
      <ul className="breadCrumbs__list">
        <li className="breadCrumbs__item">
          <NavLink to="/" target="_top">на главную<span className="breadCrumbs__slash">/</span></NavLink>
        </li>
        <li className="breadCrumbs__item">
          <NavLink to="/portfolio" target="_top"> портфолио<span className="breadCrumbs__slash">/</span></NavLink>
        </li>
        <li className="breadCrumbs__item_active" aria-current="page">{props.children}</li>
      </ul>
    </div>
  )
}
