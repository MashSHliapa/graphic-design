import telegram from '../../images/telegram.png'
import whatsapp from '../../images/watsapp.png'
import './Contacts.scss'

export function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts__body">
        <div className="contacts__data">
          <div className="contacts__title">Контактная информация</div>
          <div className="contacts__phone">+375 29 859 71 18 </div>
          <div className="contacts__email">levkova.alena81@gmail.com </div>
        </div>

        <div className="contacts__extra-data">
          <div className="contacts__title">Дополнительные способы для
            связи со мной
          </div>
          <div className="contacts__icons-group icons-group1-contacts">
            <div className="icons-group1-contacts__icon">
              <a href="https://t.me/@LevkovaAlena" target="_blank">
                <img src={telegram} alt="telegram" />
              </a>
            </div>
            <div className="icons-group1-contacts__icon">
              <a href="https://api.whatsapp.com/send?phone=375298597118" target="_blank">
                <img src={whatsapp} alt="whatsapp" />
              </a>
            </div>
          </div>
        </div>

        <div className="contacts__unp">УНП КВ3399281</div>
      </div>
    </div>
  )
}
