import vector from '../../images/portfolio/vector_here.png'
import flyer from '../../images/portfolio/flyer_1.jpg'
import cutaway from '../../images/portfolio/cutaway2.jpg'
import notebook from '../../images/portfolio/notebook3.jpg'
import diploma from '../../images/portfolio/diploma4.jpg'
import bord from '../../images/portfolio/bord5.jpg'
import sticker from '../../images/portfolio/sticker6.jpg'
import post from '../../images/portfolio/post7.jpg'
import logo from '../../images/portfolio/logo8.jpg'
import to_main from '../../images/portfolio/to_main.svg'
// import to_main from '../../components/images/to_main.png'
import './Portfolio.scss'

export function Portfolio() {

  return (
    <div className="portfolio">
      <div className="portfolio__section">
        <div className="portfolio__container _container ">
          <div className="portfolio__body">
            <div className="portfolio__info">
              <div className="portfolio__title">Портфолио</div>
              <div className="portfolio__text">Все макеты сделанные с душой.<br />
                К каждому проекту применён индивидуальным подходом.<br />
                Учтены пожелания заказчика. По итогу все макеты реализованны и
                радуют своих заказчиков.</div>
              <div className="portfolio__subtitle">Вы можете ознакомиться с моими работами здеcь</div>
              <div className="portfolio__vector-here">
                <img src={vector} alt="vector" />
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio__gallery gallery">
          <div className="gallery__item">
            <img src={flyer} alt="flyer" />
            <div className="gallery__menu">
              <div className="gallery__menu-item">
                <a className="gallery__menu-link" href="#">листовки</a>
              </div>
            </div>
          </div>
          <div className="gallery__item">
            <img src={cutaway} alt="cutaway" />
            <div className="gallery__menu">
              <div className="gallery__menu-item">
                <a className="gallery__menu-link" href="#">визитки</a>
              </div>
            </div>
          </div>
          <div className="gallery__item">
            <img src={notebook} alt="notebook" />
            <div className="gallery__menu">
              <div className="gallery__menu-item">
                <a className="gallery__menu-link" href="#">блокноты</a>
              </div>
              <div className="gallery__menu-item">
                <a className="gallery__menu-link" href="#">меню</a>
              </div>
              <div className="gallery__menu-item">
                <a className="gallery__menu-link" href="#">каталоги</a>
              </div>
            </div>
          </div>
          <div className="gallery__item">
            <img src={diploma} alt="diploma" />
            <div className="gallery__menu">
              <div className="gallery__menu-item">
                <a className="gallery__menu-link" href="#">сертификаты</a>
              </div>
              <div className="gallery__menu-item">
                <a className="gallery__menu-link" href="#">дипломы</a>
              </div>
              <div className="gallery__menu-item">
                <a className="gallery__menu-link" href="#">благодарности</a>
              </div>
            </div>
          </div>
          <div className="gallery__item">
            <img src={bord} alt="bord" />
            <div className="gallery__menu">
              <div className="gallery__menu-item">
                <a className="gallery__menu-link" href="#">афиши</a>
              </div>
              <div className="gallery__menu-item">
                <a className="gallery__menu-link" href="#">плакаты</a>
              </div>
              <div className="gallery__menu-item">
                <a className="gallery__menu-link" href="#">баннеры</a>
              </div>
            </div>
          </div>
          <div className="gallery__item">
            <img src={sticker} alt="sticker" />
            <div className="gallery__menu">
              <div className="gallery__menu-item">
                <a className="gallery__menu-link" href="#">стикеры</a>
              </div>
              <div className="gallery__menu-item">
                <a className="gallery__menu-link" href="#">бирки</a>
              </div>
            </div>
          </div>
          <div className="gallery__item">
            <img src={post} alt="post" />
            <div className="gallery__menu">
              <div className="gallery__menu-item">
                <a className="gallery__menu-link" href="#">ПОСТ & СТОРИС
                </a>
              </div>
            </div>
          </div>
          <div className="gallery__item">
            <img src={logo} alt="logo" />
            <div className="gallery__menu">
              <div className="gallery__menu-item">
                <a className="gallery__menu-link" href="#">логотипы</a>
              </div>
              <div className="gallery__menu-item">
                <a className="gallery__menu-link" href="#">фирменный стиль</a>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio__to-main">
          <img src={to_main} alt="to_main" />
          <div className="portfolio__to-main-text">
            <a href="#">на главную</a>
          </div>
        </div>
      </div>
    </div>
  )
}
