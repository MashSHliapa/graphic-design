import { Navbar } from '../Navbar/Navbar'
import { BurgerMenu } from '../BurgerMenu/BurgerMenu'
import logo from '../../images/logo_header.png'
import instagram from '../../images/instagram_s.png'
import vk from '../../images/vk.png'
import './Header.scss'

export function Header() {
  return (
    <header className="header">
      <div className="header__container _container">
        <div className="header__body">
          <div className="header__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="header__navbar">
            <Navbar />
          </div>
        </div>
        <div className="header__red-rectangle-header red-rectangle-header _red-rectangle">
          <div className="red-rectangle-header__burger-menu">
            <BurgerMenu />
          </div>
          <div className="red-rectangle-header__icons-group">
            <div className="red-rectangle-header__icon _icon">
              <a href="https://instagram.com/artdesign_81?igshid=MmVlMjlkMTBhMg==" target="_blank">
                <img src={instagram} alt="instagram" />
              </a>
            </div>
            <div className="red-rectangle-header__icon-vk _icon">
              <a href="https://vk.com/designalenalev" target="_blank">
                <img src={vk} alt="vk" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
