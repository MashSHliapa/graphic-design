import { NavLink } from 'react-router-dom'
import { useRef } from 'react'
import { createMainScroll } from '../../helpers/createMainScroll'
import vector_up from '../../images/vector_up.png'
import './InPortfolio.scss'

export function InPortfolio() {

  // const pageElement = useRef(null)

  // function handleClickPageWithScroll() {
  //   createMainScroll(pageElement)
  // }
  return (
    <div className="in-portfolio">
      <div className="in-portfolio__container _container">
        <div className="in-portfolio__body">
          <div className="in-portfolio__vector">
            <img src={vector_up} alt="vector" />
          </div>
          <div className="in-portfolio__title">
            <NavLink to="/portfolio">в портфолио</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
