import { Contacts } from '../Contacts/Contacts';
import instagram from '../../icons/instagram_footer.svg';
import vk from '../../icons/vk_footer.svg';
import logo from '../../images/logo_footer.svg';
import './Footer.scss';

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
            <h6 className="footer__copyright">
              Портфолио графического дизайнера Алёны Левковой {new Date().getFullYear()}
            </h6>
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
  );
}
