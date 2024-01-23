import { Title } from '../../components/Title'
import { InPortfolio } from '../../components/InPortfolio'
import poster1 from '../../images/posters/poster1.jpg'
import poster2 from '../../images/posters/poster2.jpg'
import poster3 from '../../images/posters/poster3.jpg'
import poster4 from '../../images/posters/poster4.jpg'
import poster5 from '../../images/posters/poster5.jpg'
import banner1 from '../../images/posters/banner1.jpg'
import banner2 from '../../images/posters/banner2.jpg'
import banner3 from '../../images/posters/banner3.jpg'
import './PostersAndBanners.scss'

export function PostersAndBanners() {
  return (
    <div className="posters-banners">
      <div className="posters-banners__container _container">
        <div className="posters-banners__body">
          <div className="posters-banners__posters posters">
            <div className="posters__title _title">
              <Title>афиши <span className="green-and">&</span> плакаты</Title>
            </div>
            <ul className="posters__list">
              <li className="posters__item1">
                <img src={poster1} alt="poster1" />
              </li>
              <li className="posters__item2">
                <img src={poster2} alt="poster2" />
              </li>
              <li className="posters__item3">
                <img src={poster3} alt="poster3" />
              </li>
              <li className="posters__item4">
                <img src={poster4} alt="poster4" />
              </li>
              <li className="posters__item5">
                <img src={poster5} alt="poster5" />
              </li>
            </ul>
          </div >

          <div className="posters-banners__banners banners">
            <div className="banners__title _title">
              <Title>баннеры</Title>
            </div>
            <ul className="banners__list">
              <li className="banners__item1">
                <img src={banner1} alt="banner1" />
              </li>
              <li className="banners__item2">
                <img src={banner2} alt="banner2" />
              </li>
              <li className="banners__item3">
                <img src={banner3} alt="banner3" />
              </li>
            </ul>
          </div>
        </div >
        <div className="posters__in-portfolio _in-portfolio">
          <InPortfolio />
        </div>
      </div >
    </div >
  )
}
