import { NavLink } from 'react-router-dom'
import to_main from '../../images/portfolio/to_main.svg'
import './GoToMain.scss'

export function GoToMain() {
  return (
    <div className="go-to-main__body">
      <img src={to_main} alt="to_main" />
      <div className="go-to-main__text">
        <NavLink to="/" target="_top">на главную</NavLink>
      </div>
    </div>
  )
}
