import { Contacts } from '../Contacts'
import instagram from '../../images/instagram.png'
import vk from '../../images/vk.png'
import logo from '../../images/logo-footer.png'
import './Footer.scss'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container _container">
        <div className="footer__body" id="сontacts">
          <div className="footer__row">

            <div className="footer__col">
              <Contacts />
            </div>

            <div className="footer__col">
              <div className="footer__social">
                <div className="footer__title">Социальные сети</div>
                <div className="footer__icon-group">
                  <div className="footer__icon">
                    <a href="https://instagram.com/artdesign_81?igshid=MmVlMjlkMTBhMg==" target="_blank">
                      <img src={instagram} alt="instagram" />
                    </a>
                    <div className="footer__icon-title">Instagram</div>
                  </div>
                  <div className="footer__icon footer__icon_vk">
                    <a href="https://vk.com/designalenalev" target="_blank">
                      <img src={vk} alt="vk" />
                    </a>
                    <div className="footer__icon-title">ВКонтакте</div>
                  </div>
                </div>
                <div className="footer__copyright">Портфолио графического дизайнера Алёны Левковой © Все права защищены.</div>
              </div>
            </div>

            <div className="footer__col">
              <div className="footer__data">
                <div className="footer__logo">
                  <img src={logo} alt="logo" />
                </div>
                <div className="footer__info">
                  <div className="footer__name">Alena levkova</div>
                  <div className="footer__name">GRAPHIC DESIGNER</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
