import { Title } from '../../components/Title'
import { Up } from '../../components/Up'
import item1 from '../../images/diplomas/item1.jpg'
import item2 from '../../images/diplomas/item2.jpg'
import item3 from '../../images/diplomas/item3.jpg'
import item4 from '../../images/diplomas/item4.jpg'
import item5 from '../../images/diplomas/item5.jpg'
import item6 from '../../images/diplomas/item6.jpg'
import './Diplomas.scss'

export function Diplomas() {
  return (
    <div className="diplomas">
      <div className="diplomas__container _container">
        <div className="diplomas__body">
          <div className="diplomas__title">
            <Title>дипломы & благодарности</Title>
          </div>
          <ul className="diplomas__list">
            <li className="diplomas__item">
              <img src={item1} alt="diploma" />
            </li>
            <li className="diplomas__item">
              <img src={item2} alt="diploma" />
            </li>
            <li className="diplomas__item">
              <img src={item3} alt="diploma" />
            </li>
            <li className="diplomas__item">
              <img src={item4} alt="diploma" />
            </li>
            <li className="diplomas__item">
              <img src={item5} alt="diploma" />
            </li>
            <li className="diplomas__item">
              <img src={item6} alt="diploma" />
            </li>
          </ul>
          <div className="diplomas__up">
            <Up />
          </div>
        </div>
      </div>
    </div>
  )
}
