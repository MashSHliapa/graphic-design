import './Main.scss'
import name from '../../images/name.png'
import career from '../../images/career.png'
import photo from '../../images/main_photo.jpg'
import myPhoto from '../../images/my_photo.jpg'
import { Services } from '../../pages/Services'
import { GoToMain } from '../GoToMain'

export function Main() {
  return (
    <main className="main">
      <div className="main__container _container">
        <div className="main__body">
          <div className="main__image">
            <img src={photo} alt="" />
          </div>
          <div className="main__data">
            <div className="main__name">
              <img src={name} alt="name" />
            </div>
            <div className="main__career">
              <img src={career} alt="career" />
            </div>
          </div>


          <div className="main__about about">
            <div className="about__description">
              <div className="about__separator-about _separator"></div>
              <p className="about__text">
                <span>Обо мне</span><br />
                Меня зовут Алёна Левкова. Я графический дизайнер<br />
                Обучалась дизайну в Смоленском гуманитарном университете<br />
                Работала в редакции газеты “Единство” и в рекламном агентстве “АртФактор”<br />
                Трудовой стаж дизайнером 9 лет<br />
                Основные направления сейчас - дизайн полиграфии, оформление соцсетей, фирменный стиль, карточки для маркетплейсов<br />
                Владение программами:  CorelDraw, Photoshop, InDesign, Figma<br />
                Разбираюсь в допечатной подготовке и производственной части
              </p>
            </div>
            <div className="about__my-photo">
              <img src={myPhoto} alt="photo" />
            </div>
          </div>


          <div className="main__exposition">ЗДЕСЬ БУДЕТ ОТЛИЧНЫЙ ТЕКСТ ПРО МЕНЯ, ТО КТО ЧЕМ ЗАНИМАЮСЬ. ЧЕМ Я ПОМОГУ ВАШЕМУ БИЗНЕСУ СТАТЬ УСПЕШНЕЕ. СДЕЛАЮ ВАШ БРЕНД ОРИГИНАЛЬНЫМ
            И ВЫДЕЛИТ ЕГО СРЕДИ ВАШИХ КОНКУРЕНТОВ.
          </div>
        </div>
      </div>

      <Services />
      <div className="main___go-to-main _go-to-main">
        <GoToMain />
      </div>
    </main>

  )
}
