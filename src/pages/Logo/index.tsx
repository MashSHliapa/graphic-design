import { Title } from '../../components/Title'
import { Up } from '../../components/Up'
import logo from '../../images/logo/logo.jpg'
import './Logo.scss'

export function Logo() {
  return (
    <div className="logo">
      <div className="logo__container _container">
        <div className="logo__body">
          <div className="logo__title">
            <Title>логотипы</Title>
          </div>
          <div className="logo__image">
            <img src={logo} alt="logo" />
          </div>
          <div className="logo__up">
            <Up />
          </div>
        </div>
      </div>
    </div>
  )
}
