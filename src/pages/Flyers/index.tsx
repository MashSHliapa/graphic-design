import { Title } from '../../components/Title'
import { GoTop } from '../../components/GoTop'
import flyer from '../../images/flyers/flyer.jpg'
import flyer2 from '../../images/flyers/flyer2.jpg'
import flyer3 from '../../images/flyers/flyer3.jpg'
import flyer4 from '../../images/flyers/flyer4.jpg'
import flyer5 from '../../images/flyers/flyer5.jpg'
import flyer6 from '../../images/flyers/flyer6.jpg'
import flyer7 from '../../images/flyers/flyer7.jpg'
import flyer8 from '../../images/flyers/flyer8.jpg'
import flyer9 from '../../images/flyers/flyer9.jpg'
import flyer10 from '../../images/flyers/flyer10.jpg'
import './Flyers.scss'

export function Flyers() {
  return (
    <div className="flyers">
      <div className="flyers__container _container">
        <div className="flyers__body">
          <div className="flyers__title _title">
            <Title>Листовки</Title>
          </div>
          <div className="flyers__list">
            <div className="flyers__item1">
              <img src={flyer} alt="flyer" />
            </div>
            <div className="flyers__item2">
              <img src={flyer2} alt="flyer" />
            </div>
            <div className="flyers__item3">
              <img src={flyer3} alt="flyer" />
            </div>
            <div className="flyers__item-big">
              <img src={flyer4} alt="flyer" />
            </div>
            <div className="flyers__item4">
              <img src={flyer5} alt="flyer" />
            </div>
            <div className="flyers__item-small">
              <img src={flyer6} alt="flyer" />
            </div>
            <div className="flyers__item5">
              <img src={flyer7} alt="flyer" />
            </div>
            <div className="flyers__item6">
              <img src={flyer8} alt="flyer" />
            </div>
            <div className="flyers__item7">
              <img src={flyer9} alt="flyer" />
            </div>
            <div className="flyers__item8">
              <img src={flyer10} alt="flyer" />
            </div>
          </div>
        </div>
        <div className="flyers__up _up">
          <GoTop/>
        </div>
      </div>
    </div>
  )
}
