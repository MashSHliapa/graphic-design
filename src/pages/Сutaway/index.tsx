import { Title } from '../../components/Title'
import cutaway1 from '../../images/cutaways/cutaway1.jpg'
import cutaway2 from '../../images/cutaways/cutaway2.jpg'
import cutaway3 from '../../images/cutaways/cutaway3.jpg'
import cutaway4 from '../../images/cutaways/cutaway4.jpg'
import cutaway5 from '../../images/cutaways/cutaway5.jpg'
import cutaway6 from '../../images/cutaways/cutaway6.jpg'
import cutaway7 from '../../images/cutaways/cutaway7.jpg'
import cutaway8 from '../../images/cutaways/cutaway8.jpg'
import cutaway9 from '../../images/cutaways/cutaway9.jpg'
import cutaway10 from '../../images/cutaways/cutaway10.jpg'
import cutaway11 from '../../images/cutaways/cutaway11.jpg'
import cutaway12 from '../../images/cutaways/cutaway12.jpg'
import './Cutaway.scss'
import { Up } from '../../components/Up'

export function Cutaway() {
  return (
    <div className="cutaway">
      <div className="cutaway__container _container">
        <div className="cutaway__body">
          <div className="cutaway__title">
            <Title>визитки</Title>
          </div>
          <ul className="cutaway__list">
            <li className="cutaway__item">
              <img src={cutaway1} alt="cutaway" />
            </li>
            <li className="cutaway__item">
              <img src={cutaway2} alt="cutaway" />
            </li>
            <li className="cutaway__item">
              <img src={cutaway3} alt="cutaway" />
            </li>
            <li className="cutaway__item">
              <img src={cutaway4} alt="cutaway" />
            </li>
            <li className="cutaway__item">
              <img src={cutaway5} alt="cutaway" />
            </li>
            <li className="cutaway__item">
              <img src={cutaway6} alt="cutaway" />
            </li>
            <li className="cutaway__item">
              <img src={cutaway7} alt="cutaway" />
            </li>
            <li className="cutaway__item">
              <img src={cutaway8} alt="cutaway" />
            </li>
            <li className="cutaway__item">
              <img src={cutaway9} alt="cutaway" />
            </li>
            <li className="cutaway__item">
              <img src={cutaway10} alt="cutaway" />
            </li>
            <li className="cutaway__item">
              <img src={cutaway11} alt="cutaway" />
            </li>
            <li className="cutaway__item">
              <img src={cutaway12} alt="cutaway" />
            </li>
          </ul>
          <div className="cutaway__up _up">
            <Up />
          </div>
        </div>
      </div>
    </div>

  )
}
