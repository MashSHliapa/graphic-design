import telegram from '../../icons/telegram.svg'
import whatsapp from '../../icons/whatsApp.svg'
import viber from '../../icons/viber.svg'
import './Contacts.scss'

export function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts__body">
        <h5 className="contacts__title">Контактная информация</h5>
        <div className="contacts__data">
          <div className="contacts__phone">+375 29 859 71 18 </div>
          <div className="contacts__email">kb3399281@gmail.com </div>
        </div>
        <div className="contacts__extra-data">
          <h5 className="contacts__title">Дополнительные способы для
            связи со мной
          </h5>
          <div className="contacts__icons-group">
            <div className="icons-group-contacts__icon _icon">
              <a href="https://t.me/@LevkovaAlena" target="_blank">
                <img src={telegram} alt="telegram" />
              </a>
            </div>
            <div className="icons-group-contacts__icon _icon">
              <a href="https://api.whatsapp.com/send?phone=375298597118" target="_blank">
                <img src={whatsapp} alt="whatsapp" />
              </a>
            </div>
            <div className="icons-group-contacts__icon _icon">
              <a href="viber://chat?number=%2B375298597118" target="_blank">
                <img src={viber} alt="viber" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
