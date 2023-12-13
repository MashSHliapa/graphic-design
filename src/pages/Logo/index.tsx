import { Title } from '../../components/Title'
import { InPortfolio } from '../../components/InPortfolio'
import logo1 from '../../images/logo/logo1.jpg'
import logo2 from '../../images/logo/logo2.jpg'
import logo3 from '../../images/logo/logo3.jpg'
import logo4 from '../../images/logo/logo4.jpg'
import logo5 from '../../images/logo/logo5.jpg'
import logo6 from '../../images/logo/logo6.jpg'
import logo7 from '../../images/logo/logo7.jpg'
import logo8 from '../../images/logo/logo8.jpg'
import logo9 from '../../images/logo/logo9.jpg'
import './Logo.scss'

export function Logo() {
  return (
    <div className="logo">
      <div className="logo__container _container">
        <div className="logo__body">
          <div className="logo__title _title">
            <Title>логотипы</Title>
          </div>
          <ul className="logo__list">
            <li className="logo__item">
              <img src={logo1} alt="logo" />
            </li>
            <li className="logo__item">
              <img src={logo2} alt="logo2" />
            </li>
            <li className="logo__item">
              <img src={logo3} alt="logo3" />
            </li>
            <li className="logo__item">
              <img src={logo4} alt="logo4" />
            </li>
            <li className="logo__item">
              <img src={logo5} alt="logo5" />
            </li>
            <li className="logo__item">
              <img src={logo6} alt="logo6" />
            </li>
            <li className="logo__item">
              <img src={logo7} alt="logo7" />
            </li>
            <li className="logo__item">
              <img src={logo8} alt="logo8" />
            </li>
            <li className="logo__item">
              <img src={logo9} alt="logo9" />
            </li>
          </ul>
          <div className="logo__in-portfolio _in-portfolio">
            <InPortfolio/>
          </div>
        </div>
      </div>
    </div>
  )
}
