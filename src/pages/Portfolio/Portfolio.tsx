import { NavLink } from 'react-router-dom'
import { GoToMain } from '../../components/GoToMain/GoToMain.tsx'
import { Title } from '../../components/Title/Title.tsx'
import { GoToTop } from '../../components/GoToTop/GoToTop.tsx'
import vector from '../../icons/vector_here.svg'
import flyer from '../../images/portfolio/flyer1.jpg'
import cutaway from '../../images/portfolio/cutaway2.jpg'
import notebook from '../../images/portfolio/notebook3.jpg'
import diploma from '../../images/portfolio/diploma4.jpg'
import bord from '../../images/portfolio/bord5.jpg'
import sticker from '../../images/portfolio/sticker6.jpg'
import post from '../../images/portfolio/post7.jpg'
import logo from '../../images/portfolio/logo8.jpg'
import './Portfolio.scss'

export function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio__section">
        <div className="portfolio__container _container ">
          <div className="portfolio__info">
            <div className="portfolio__title" id="portfolio">
              <Title>Портфолио</Title>
            </div>
            <h5 className="portfolio__text">
              Все макеты сделаны по индивидуальным заказам. <br />
              К каждому проекту применён профессиональный подход.<br />
              Учтены пожелания заказчика. По итогу все макеты успешно реализованы.</h5>
            <h3 className="portfolio__subtitle">Вы можете ознакомиться с моими работами здеcь</h3>
            <div className="portfolio__vector-here">
              <img src={vector} alt="vector" />
            </div>
          </div>
        </div>
        <div className="portfolio__gallery gallery">
          <NavLink to="/portfolio/flyers" target="_top" className="gallery__item">
            <img src={flyer} alt="flyer" />
            <div className="gallery__menu">
              <div className="gallery__title">листовки</div>
            </div>
          </NavLink>
          <NavLink to="/portfolio/cutaways" target="_top" className="gallery__item">
            <img src={cutaway} alt="cutaway" />
            <div className="gallery__menu">
              <div className="gallery__title">визитки</div>
            </div>
          </NavLink>
          <NavLink to="/portfolio/price_menu_notebooks" target="_top" className="gallery__item">
            <img src={notebook} alt="notebook" />
            <div className="gallery__menu">
              <div className="gallery__title">ПРАЙС БЛОКНОТЫ МЕНЮ</div>
            </div>
          </NavLink>
          <NavLink to="/portfolio/diplomas_certificates" target="_top" className="gallery__item" >
            <img src={diploma} alt="diploma" />
            <div className="gallery__menu">
              <div className="gallery__title gallery__title_reduce">
                ДИПЛОМЫ БЛАГОДАРНОСТИ <span className='gallery__and'>&</span> СЕРТИФИКАТЫ пригласительные
              </div>
            </div>
          </NavLink>
          <NavLink to="/portfolio/posters_banners" target="_top" className="gallery__item">
            <img src={bord} alt="bord" />
            <div className="gallery__menu">
              <div className="gallery__title">
                АФИШИ <span className='gallery__and'>&</span> ПЛАКАТЫ баннеры
              </div>
            </div>
          </NavLink>
          <NavLink to="/portfolio/stickers_tags" target="_top" className="gallery__item">
            <img src={sticker} alt="sticker" />
            <div className="gallery__menu">
              <div className="gallery__title">
                СТИКЕРЫ <span className='gallery__and'>&</span> БИРКИ
              </div>
            </div>
          </NavLink>
          <NavLink to="/portfolio/infographics_posts_stories" target="_top" className="gallery__item">
            <img src={post} alt="post" />
            <div className="gallery__menu">
              <div className="gallery__title">
                инфографика ПОСТ <span className='gallery__and'>&</span> СТОРИС
              </div>
            </div>
          </NavLink>
          <NavLink to="/portfolio/logo" target="_top" className="gallery__item">
            <img src={logo} alt="logo" />
            <div className="gallery__menu">
              <div className="gallery__title">логотипы</div>
            </div>
          </NavLink>
        </div>
        <div className="portfolio__go-to-main">
          <GoToMain />
        </div>
        <div className="portfolio__go-to-top">
          <GoToTop />
        </div>
        <div className="portfolio__decor"></div>
      </div>
    </div>
  )
}
