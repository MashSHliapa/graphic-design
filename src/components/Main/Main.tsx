import { Services } from '../../pages/Services/Services'
import { GoTop } from '../GoTop'
import name from '../../images/name.png'
import career from '../../images/career.png'
import photo from '../../images/main_photo.jpg'
import myPhoto from '../../images/my_photo.jpg'
import photoMobile from '../../images/photo_mobile.jpg'
import './Main.scss'

export function Main() {
  return (
    <main className="main">
      <div className="main__container _container">
        <div className="main__body">
          <div className="main__image">
            <img src={photo} alt="" />
          </div>
          <div className="main__image-mobile">
            <img src={photoMobile} alt="" />
          </div>
          <div className="main__data data">
            <div className="data__name">
              <img src={name} alt="name" />
            </div>
            <div className="data__career">
              <img src={career} alt="career" />
            </div>
          </div>
          <div className="main__about about">
            <div className="about__description">
              <div className="about__separator-about _separator"></div>
              <p className="about__text">
                <span>Обо мне</span><br />
                Меня зовут Алёна Левкова.<br />
                Я графический дизайнер<br />
                Обучалась дизайну в СГУ<br />
                Работала в редакции газеты и в рекламном агентстве 8 лет.<br />
                В дизайне с 2012 года<br />
                Владею программами:  CorelDraw, Photoshop, InDesign, Figma, Illustrator.
              </p>
            </div>
            <div className="about__my-photo">
              <img src={myPhoto} alt="photo" />
            </div>
          </div>
        </div>
      </div>
      <Services />
      <div className="post-stories__up _up">
        <GoTop />
      </div>
    </main>
  )
}
