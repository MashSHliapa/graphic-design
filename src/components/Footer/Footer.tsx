import { Contacts } from '../Contacts/Contacts'
import instagram from '../../images/instagram.png'
import vk from '../../images/vk.png'
import logo from '../../images/logo-footer.png'
import './Footer.scss'

export function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="footer__container _container">
        <div className="footer__body">
          <div className="footer__contacts">
            <Contacts />
          </div>
          <div className="footer__social">
            <div className="footer__icon-group">

              <div className="footer__icon _icon">
                <a href="https://instagram.com/artdesign_81?igshid=MmVlMjlkMTBhMg==" target="_blank">
                  <img src={instagram} alt="instagram" />
                </a>
              </div>
              <div className="footer__icon footer__icon_vk _icon">
                <a href="https://vk.com/designalenalev" target="_blank">
                  <img src={vk} alt="vk" />
                </a>
              </div>
            </div>
            <h6 className="footer__copyright">Портфолио графического дизайнера Алёны Левковой 2024 ©</h6>
          </div>
          <div className="footer__data">
            <div className="footer__logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="footer__unp">УНП КВ3399281</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
