import { Title } from '../../components/Title/Title';
import { GoToMain } from '../../components/GoToMain/GoToMain';
import { GoToTop } from '../../components/GoToTop/GoToTop';
import phone from '../../icons/phone.svg';
import name from '../../images/name.svg';
import career from '../../images/career.svg';
import photo from '../../images/photo_price.jpg';
import './Prices.scss';

export function Prices() {
  return (
    <div className="prices">
      <div className="prices__container _container">
        <div className="prices__body">
          <div className="prices__profile">
            <div className="prices__image">
              <img src={photo} alt="" />
            </div>
            <div className="prices__data data">
              <div className="data__name">
                <img src={name} alt="name" />
              </div>
              <div className="data__career">
                <img src={career} alt="career" />
              </div>
            </div>
          </div>
          <div className="prices__title">
            <Title>цены</Title>
          </div>
          <div className="prices__info">
            <h4 className="prices__text">
              Заказы просчитываются индивидуально, исходя из Ваших пожеланий и объема работы. Для этого пришлите мне ТЗ
              (техническое задание) в произвольной форме:
            </h4>
            <ul className="prices__list">
              <li className="prices__item">
                Где вам необходимо обозначить вид{' '}
                <span className="prices__reduced">(например листовки, визитки, баннеры...)</span>, размер макета и его
                ориентацию <span className="prices__reduced">(горизонтальный или вертикальный)</span>.
              </li>
              <li className="prices__item">Предоставить текстовую информацию в Word.</li>
              <li className="prices__item">
                Предоставить графические элементы, если необходимо их использовать в макете (при их наличии).
              </li>
              <li className="prices__item">
                Указать дополнительные пожелания по оформлению или предоставить примеры{' '}
                <span className="prices__reduced">(референсы)</span> того, что Вам нравится.
              </li>
            </ul>
            <h4 className="prices__text-attention">
              <span className="prices__attention">Важно!</span> Принимаю информацию с четким, согласованным текстом!{' '}
              <br />
              <span className="prices__attention">Важно!</span> Все изменения текста{' '}
              <span className="note">и/или </span>добавления информации, которой не было в ТЗ, оплачиваются отдельно.
              <br />
              Подготовленное ТЗ нужно выслать мне на
              <span className="prices__viber">
                <a href="viber://chat?number=%2B375298597118" target="_blank">
                  {' '}
                  Viber
                </a>
              </span>
              , в
              <span className="prices__telegram">
                <a href="https://t.me/@LevkovaAlena" target="_blank">
                  {' '}
                  Telegram
                </a>
              </span>{' '}
              или в
              <span className="prices__whatsapp">
                <a href="https://api.whatsapp.com/send?phone=375298597118" target="_blank">
                  {' '}
                  Whatsapp
                </a>
              </span>
              . <br />
              *Если остались вопросы, Вы можете связаться со мной.
            </h4>
            <div className="prices__button-wrapper button">
              <a href="tel:+375298597118" className="button__button _button" target="_blank">
                <div className="button__text">связаться со мной</div>
                <div className="button__icon">
                  <img src={phone} alt="phone" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="prices__go-to-main">
          <GoToMain />
        </div>
        <div className="prices__go-to-top">
          <GoToTop />
        </div>
      </div>
    </div>
  );
}
