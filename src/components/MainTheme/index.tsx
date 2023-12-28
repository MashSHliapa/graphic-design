import services from '../../images/services.jpg'
import './MainTheme.scss'

export function MainTheme(props) {
  return (
    <div className="main-theme">
      <div className="main-theme__container _container">
        <div className="main-theme__body">{props.children}
          <div className="main-theme__image">
            <img src={services} alt="services" />
          </div>
          <div className="main-theme__red-rectangle-main _red-rectangle"></div>
        </div>
      </div>
    </div>
  )
}
