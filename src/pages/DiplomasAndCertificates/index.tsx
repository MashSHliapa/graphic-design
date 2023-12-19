import { Title } from '../../components/Title'
import { InPortfolio } from '../../components/InPortfolio'
import diploma1 from '../../images/diplomas/item1.jpg'
import diploma2 from '../../images/diplomas/item2.jpg'
import diploma3 from '../../images/diplomas/item3.jpg'
import diploma4 from '../../images/diplomas/item4.jpg'
import diploma5 from '../../images/diplomas/item5.jpg'
import diploma6 from '../../images/diplomas/item6.jpg'
import certificate1 from '../../images/certificates/certificate1.jpg'
import certificate2 from '../../images/certificates/certificate2.jpg'
import certificate3 from '../../images/certificates/certificate3.jpg'
import certificate4 from '../../images/certificates/certificate4.jpg'
import certificate5 from '../../images/certificates/certificate5.jpg'
import certificate6 from '../../images/certificates/certificate6.jpg'
import './DiplomasAndCertificates.scss'

export function DiplomasAndCertificates() {
  return (
    <div className="diplomas-certificates">
      <div className="diplomas-certificates__container _container">
        <div className="diplomas-certificates__body">
          <div className="diplomas-certificates__certificate certificate">
            <div className="certificates__title _title">
              <Title>дипломы <span className="green-and">&</span> благодарности</Title>
            </div>
            <ul className="certificates__list">
              <li className="certificates__item">
                <img src={certificate1} alt="certificate1" />
              </li>
              <li className="certificates__item">
                <img src={certificate2} alt="certificate2" />
              </li>
              <li className="certificates__item">
                <img src={certificate3} alt="certificate3" />
              </li>
              <li className="certificates__item">
                <img src={certificate4} alt="certificate4" />
              </li>
              <li className="certificates__item">
                <img src={certificate5} alt="certificate5" />
              </li>
              <li className="certificates__item">
                <img src={certificate6} alt="certificate6" />
              </li>
            </ul>
          </div>

          <div className="diplomas-certificates__diplomas diplomas">
            <div className="diplomas__title _title">
              <Title>сертификаты <span className="green-and">&</span> пригласительные</Title>
            </div>
            <ul className="diplomas__list">
              <li className="diplomas__item">
                <img src={diploma1} alt="diploma" />
              </li>
              <li className="diplomas__item">
                <img src={diploma2} alt="diploma" />
              </li>
              <li className="diplomas__item">
                <img src={diploma3} alt="diploma" />
              </li>
              <li className="diplomas__item">
                <img src={diploma4} alt="diploma" />
              </li>
              <li className="diplomas__item">
                <img src={diploma5} alt="diploma" />
              </li>
              <li className="diplomas__item">
                <img src={diploma6} alt="diploma" />
              </li>
            </ul>
            <div className="diplomas__in-portfolio _in-portfolio">
              <InPortfolio />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
