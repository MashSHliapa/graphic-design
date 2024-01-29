import { Title } from '../../components/Title'
import { GoTop } from '../../components/GoTop'
import { Breadcrumb } from '../../components/Breadcrumb'
import notebook1 from '../../images/notebooks/notebook1.jpg'
import notebook2 from '../../images/notebooks/notebook2.jpg'
import notebook3 from '../../images/notebooks/notebook3.jpg'
import notebook4 from '../../images/notebooks/notebook4.jpg'
import diary1 from '../../images/notebooks/diary1.jpg'
import diary2 from '../../images/notebooks/diary2.jpg'
import diary3 from '../../images/notebooks/diary3.jpg'
import diary4 from '../../images/notebooks/diary4.jpg'
import menu1 from '../../images/notebooks/menu/menu1.jpg'
import menu2 from '../../images/notebooks/menu/menu2.jpg'
import menu3 from '../../images/notebooks/menu/menu3.jpg'
import menu4 from '../../images/notebooks/menu/menu4.jpg'
import menu5 from '../../images/notebooks/menu/menu5.jpg'
import menu6 from '../../images/notebooks/menu/menu6.jpg'
import menu7 from '../../images/notebooks/menu/menu7.jpg'
import menu8 from '../../images/notebooks/menu/menu8.jpg'
import menu9 from '../../images/notebooks/menu/menu9.jpg'
import menu10 from '../../images/notebooks/menu/menu10.jpg'
import menu11 from '../../images/notebooks/menu/menu11.jpg'
import menu12 from '../../images/notebooks/menu/menu12.jpg'
import menu13 from '../../images/notebooks/menu/menu13.jpg'
import menu14 from '../../images/notebooks/menu/menu14.jpg'
import menu15 from '../../images/notebooks/menu/menu15.jpg'
import menu16 from '../../images/notebooks/menu/menu16.jpg'
import menu17 from '../../images/notebooks/menu/menu17.jpg'
import menu18 from '../../images/notebooks/menu/menu18.jpg'
import menu19 from '../../images/notebooks/menu/menu19.jpg'
import menu20 from '../../images/notebooks/menu/menu20.jpg'
import menu21 from '../../images/notebooks/menu/menu21.jpg'
import menu22 from '../../images/notebooks/menu/menu22.jpg'

import './NotebooksAndMenu.scss'

export function NotebooksAndMenu() {

  return (
    <div className="notebooks-menu">
      <div className="notebooks-menu__container _container">
        <div className="notebooks-menu__body">
          <div className="flyers__breadcrumb">
            <Breadcrumb>блокноты и меню</Breadcrumb>
          </div>
          <div className="notebooks-menu__notebooks notebooks">
            <div className="notebooks__title _title">
              <Title>блокноты</Title>
            </div>
            <ul className="notebooks__list">
              <li className="notebooks__item">
                <img src={notebook1} alt="notebook1" />
              </li>
              <li className="notebooks__item">
                <img src={notebook2} alt="notebook2" />
              </li>
              <li className="notebooks__item">
                <img src={notebook3} alt="notebook3" />
              </li>
              <li className="notebooks__item4">
                <img src={notebook4} alt="notebook4" />
              </li>
              <li className="notebooks__item">
                <img src={diary1} alt="notebook4" />
              </li>
              <li className="notebooks__item">
                <img src={diary2} alt="notebook4" />
              </li>
              <li className="notebooks__item">
                <img src={diary3} alt="notebook4" />
              </li>
              <li className="notebooks__item">
                <img src={diary4} alt="notebook4" />
              </li>
            </ul>
          </div>

          <div className="notebooks-menu__menu menu">
            <div className="menu__title _title">
              <Title>меню</Title>
            </div>
            <ul className="menu__list">
              <li className="menu__item">
                <img src={menu22} alt="menu22" />
              </li>
              <li className="menu__item">
                <img src={menu21} alt="menu21" />
              </li>
              <li className="menu__item">
                <img src={menu20} alt="menu20" />
              </li>
              <li className="menu__item">
                <img src={menu19} alt="menu19" />
              </li>
              <li className="menu__item">
                <img src={menu18} alt="menu18" />
              </li>
              <li className="menu__item">
                <img src={menu17} alt="menu17" />
              </li>
              <li className="menu__item">
                <img src={menu16} alt="menu16" />
              </li>
              <li className="menu__item">
                <img src={menu15} alt="menu15" />
              </li>
              <li className="menu__item">
                <img src={menu14} alt="menu14" />
              </li>
              <li className="menu__item">
                <img src={menu13} alt="menu13" />
              </li>
              <li className="menu__item">
                <img src={menu12} alt="menu12" />
              </li>
              <li className="menu__item">
                <img src={menu11} alt="menu11" />
              </li>
              <li className="menu__item">
                <img src={menu10} alt="menu10" />
              </li>
              <li className="menu__item">
                <img src={menu9} alt="menu9" />
              </li>
              <li className="menu__item">
                <img src={menu8} alt="menu8" />
              </li>
              <li className="menu__item">
                <img src={menu7} alt="menu7" />
              </li>
              <li className="menu__item">
                <img src={menu6} alt="menu6" />
              </li>
              <li className="menu__item">
                <img src={menu5} alt="menu5" />
              </li>
              <li className="menu__item">
                <img src={menu4} alt="menu4" />
              </li>
              <li className="menu__item">
                <img src={menu3} alt="menu3" />
              </li>
              <li className="menu__item">
                <img src={menu2} alt="menu2" />
              </li>
              <li className="menu__item">
                <img src={menu1} alt="menu1" />
              </li>
            </ul>
          </div>
        </div>
        <div className="notebooks-menu__up _up">
          <GoTop />
        </div>
      </div>
    </div>
  )
}
