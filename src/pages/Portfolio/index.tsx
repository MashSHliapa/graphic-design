import vector from '../../images/portfolio/vector_here.png'
import flyer from '../../images/portfolio/flyer1.jpg'
import cutaway from '../../images/portfolio/cutaway2.jpg'
import notebook from '../../images/portfolio/notebook3.jpg'
import diploma from '../../images/portfolio/diploma4.jpg'
import bord from '../../images/portfolio/bord5.jpg'
import sticker from '../../images/portfolio/sticker6.jpg'
import post from '../../images/portfolio/post7.jpg'
import logo from '../../images/portfolio/logo8.jpg'
// import to_main from '../../images/portfolio/to_main.svg'
// import to_main from '../../components/images/to_main.png'
import './Portfolio.scss'
import { NavLink } from 'react-router-dom'
import { useRef } from 'react'
import { createPortfolioMenuScroll } from '../../helpers/createPortfolioMenuScroll.tsx'
import { GoToMain } from '../../components/GoToMain'

export function Portfolio() {

  const pageElement = useRef(null)

  function handleClickPageWithScroll() {
    createPortfolioMenuScroll(pageElement)
  }

  return (
    <div className="portfolio">
      <div className="portfolio__section">
        <div className="portfolio__container _container ">
          <div className="portfolio__body">
            <div className="portfolio__info">
              <div className="portfolio__title" id="portfolio">Портфолио</div>
              <div className="portfolio__text">Все макеты сделанные с душой.<br />
                К каждому проекту применён индивидуальный подход.<br />
                Учтены пожелания заказчика. По итогу все макеты реализованны и
                радуют своих заказчиков.</div>
              <div className="portfolio__subtitle">Вы можете ознакомиться с моими работами здеcь</div>
              <div className="portfolio__vector-here">
                <img src={vector} alt="vector" />
              </div>
            </div>
          </div>
        </div>
        <ul className="portfolio__gallery gallery" ref={pageElement}>
          <li className="gallery__item">
            <img src={flyer} alt="flyer" />
            <div className="gallery__menu">
              <div className="gallery__menu-item">
                <NavLink to="/portfolio/flyers" target="_top" className="gallery__menu-link" >листовки</NavLink>
              </div>
            </div>
          </li>
          <li className="gallery__item">
            <img src={cutaway} alt="cutaway" />
            <div className="gallery__menu">
              <div className="gallery__menu-item">
                <NavLink to="/portfolio/cutaway" target="_top" className="gallery__menu-link">визитки</NavLink>
              </div>
            </div>
          </li>
          <li className="gallery__item">
            <img src={notebook} alt="notebook" />
            <div className="gallery__menu">
              <div className="gallery__menu-item">
                <NavLink to="/portfolio/notebooks_menu" target="_top" className="gallery__menu-link">блокноты <span className='gallery__and'>&</span> меню</NavLink>
              </div>
            </div>
          </li>
          <li className="gallery__item" >
            <img src={diploma} alt="diploma" />
            <div className="gallery__menu">
              <div className="gallery__menu-item gallery__menu-item_reduce">
                <NavLink to="/portfolio/diplomas_and_certificates" className="gallery__menu-link" target="_top" >ДИПЛОМЫ, БЛАГОДАРНОСТИ <span className='gallery__and'>&</span> СЕРТИФИКАТЫ, пригласительные</NavLink>
              </div>
              {/* <div className="gallery__menu-item gallery__menu-item_reduce">
                <a className="gallery__menu-link" href="#">СЕРТИФИКАТЫ & пригласительные</a>
              </div> */}
            </div>
          </li>
          <li className="gallery__item">
            <img src={bord} alt="bord" />
            <div className="gallery__menu">
              <div className="gallery__menu-item">
                <NavLink to="/portfolio/posters" className="gallery__menu-link" target="_top" >АФИШИ, ПЛАКАТЫ <span className='gallery__and'>&</span>баннеры</NavLink>
              </div>
              {/* <div className="gallery__menu-item">
                <a className="gallery__menu-link" href="#">баннеры</a>
              </div> */}
            </div>
          </li>
          <li className="gallery__item" onClick={handleClickPageWithScroll}>
            <img src={sticker} alt="sticker" />
            <div className="gallery__menu">
              <div className="gallery__menu-item">
                <NavLink to="/portfolio/stickers" className="gallery__menu-link" >СТИКЕРЫ <span className='gallery__and'>&</span> БИРКИ</NavLink>
              </div>
            </div>
          </li>
          <li className="gallery__item" onClick={handleClickPageWithScroll}>
            <img src={post} alt="post" />
            <div className="gallery__menu">
              <div className="gallery__menu-item">
                <NavLink to="/portfolio/stories" className="gallery__menu-link" >ПОСТ <span className='gallery__and'>&</span> СТОРИС
                </NavLink>
              </div>
            </div>
          </li>
          <li className="gallery__item" onClick={handleClickPageWithScroll}>
            <img src={logo} alt="logo" />
            <div className="gallery__menu">
              <div className="gallery__menu-item">
                <NavLink to="/portfolio/logo" className="gallery__menu-link">логотипы</NavLink>
              </div>
            </div>
          </li>
        </ul>
        <div className="portfolio__go-to-main _go-to-main">
          <GoToMain />
        </div>
        <div className="portfolio__red-rectangle-portfolio _red-rectangle"></div>
      </div>
    </div>
  )
}
