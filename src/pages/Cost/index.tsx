import { Title } from '../../components/Title'
import { Price } from '../../components/Price'
import { GoToMain } from '../../components/GoToMain'
import vector_right from '../../images/vector_right.png'
import telegram from '../../images/telegram.png'
import whatsapp from '../../images/watsapp.png'
import './Cost.scss'

export function Cost() {

  return (
    <div className="cost">
      <div className="cost__container _container">
        <div className="cost__body">
          <div className="cost__title">
            <Title>цены</Title>
          </div>

          <div className="cost__info">
              <div className="cost__text">
                Все цены приведеные в прайсе ориентировочные и не включают в себя покупку клипарта, работы иллюстратора и прочие расходы. <br />
                <p>Заказы просчитываются индивидуально в соответствии с Вашим техническим заданием.</p>
              </div>
            <div className="cost__text-with-contacts">
              <div className="cost__text">Узнать точную цену можно связавшись со мной удобным для Вас способом</div>

              <div className="cost__icons">
                <img src={vector_right} width={22} height={22} alt="vector_right" />
                <div className="cost__icons-group icons-group-contacts">
                  <div className="icons-group-contacts__icon _icon">
                    <a href="https://t.me/@LevkovaAlena" target="_blank">
                      <img src={telegram} width={40} height={40} alt="telegram" />
                    </a>
                  </div>
                  <div className="icons-group-contacts__icon _icon">
                    <a href="https://api.whatsapp.com/send?phone=375298597118" target="_blank">
                      <img src={whatsapp} width={40} height={40} alt="whatsapp" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cost__condition-box condition-box">
            <div className="condition-box__body">
              <div className="condition-box__title">Предварительно подготовьте и пришлите следующее:</div>
              <ul className="condition-box__list">
                <li className="condition-box__item">Бланк технического задания</li>
                <li className="condition-box__item">Понравившиеся Вам референсы <span className="condition-box__reduce">(картинки и/или фото)</span></li>
                <li className="condition-box__item">Ваши: логотип и/или фирменный стиль, прежние наработки <span className="condition-box__reduce">(при необходимости)</span></li>
              </ul>
            </div>
          </div>

          <div className="cost__button buttons-group">
            <a href="#" className="buttons-group__button buttons-group__button_booking">Скачать бланк ТЗ</a>
          </div>
        </div>
      </div>

      <Price />
      <div className="cost___go-to-main _go-to-main">
        <GoToMain />
      </div>
    </div>
  )
}
