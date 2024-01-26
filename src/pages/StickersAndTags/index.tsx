import { Title } from '../../components/Title'
import stiker1 from '../../images/stickers/1.jpg'
import stiker2 from '../../images/stickers/2.jpg'
import stiker3 from '../../images/stickers/3.jpg'
import stiker4 from '../../images/stickers/4.jpg'
import stiker5 from '../../images/stickers/5.jpg'
import stiker6 from '../../images/stickers/6.jpg'
import stiker7 from '../../images/stickers/sticker7.jpg'
import stiker8 from '../../images/stickers/sticker8.jpg'
import stiker9 from '../../images/stickers/sticker9.jpg'
import stiker10 from '../../images/stickers/sticker10.jpg'
import stiker11 from '../../images/stickers/sticker11.jpg'
import stiker12 from '../../images/stickers/sticker12.jpg'
import stiker13 from '../../images/stickers/sticker13.jpg'
import { GoTop } from '../../components/GoTop'
import './StickersAndTags.scss'

export function StickersAndTags() {
  return (
    <div className="stickers-tags">
      <div className="stickers-tags__container _container">
        <div className="stickers-tags__body">
          <div className="stickers-tags__title _title">
            <Title>стикеры <span className="green-and">&</span> бирки</Title>
          </div>

          <div className="stickers-tags__stickers stickers">
            <div className="stickers__box">
              <ul className="stickers__list">
                <li className="stickers__item">
                  <img src={stiker1} alt="sticker1" />
                </li>
                <li className="stickers__item">
                  <img src={stiker2} alt="sticker2" />
                </li>
                <li className="stickers__item">
                  <img src={stiker3} alt="sticker3" />
                </li>
                <li className="stickers__item">
                  <img src={stiker4} alt="sticker4" />
                </li>
                <li className="stickers__item">
                  <img src={stiker5} alt="sticker5" />
                </li>
                <li className="stickers__item">
                  <img src={stiker6} alt="sticker6" />
                </li>
              </ul>

              <div className="sticker__tags tags">
                <ul className="tags__list">
                  <li className="tags__item1">
                    <img src={stiker7} alt="tag2" />
                  </li>
                  <li className="tags__item2">
                    <img src={stiker8} alt="tag3" />
                  </li>
                  <li className="tags__item3">
                    <img src={stiker9} alt="tag4" />
                  </li>
                  <li className="tags__item4">
                    <img src={stiker10} alt="tag5" />
                  </li>
                  <li className="tags__item5">
                    <img src={stiker11} alt="tag6" />
                  </li>
                  <ul className="tags__item6">
                    <li className="tags__item7">
                      <img src={stiker12} alt="tag7" />
                    </li>
                    <li className="tags__item8">
                      <img src={stiker13} alt="tag8" />
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="sticker-tags__up _up">
          <GoTop />
        </div>
      </div>
    </div>
  )
}
