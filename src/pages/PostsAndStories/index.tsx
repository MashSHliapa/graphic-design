import { Title } from '../../components/Title'
import stories1 from '../../images/stories/stories1.jpg'
import stories2 from '../../images/stories/stories2.jpg'
import stories3 from '../../images/stories/stories3.jpg'
import stories4 from '../../images/stories/stories4.jpg'
import stories5 from '../../images/stories/stories5.jpg'
import stories6 from '../../images/stories/stories6.jpg'
import stories7 from '../../images/stories/stories7.jpg'
import stories8 from '../../images/stories/stories8.jpg'
import stories9 from '../../images/stories/stories9.jpg'
import stories10 from '../../images/stories/stories10.jpg'
import { GoTop } from '../../components/GoTop'
import './PostsAndStories.scss'

export function PostsAndStories() {
  return (
    <div className="post-stories">
      <div className="post-stories__container _container">
        <div className="post-stories__body">
          <div className="post-post-stories__title _title">
            <Title>Пост <span className="green-and">&</span> Сторис</Title>
          </div>
          <div className="post-post-stories__box">
            <ul className="post-stories__list">
              <li className="post-stories__item1">
                <img src={stories1} alt="stories1" />
              </li>
              <li className="post-stories__item2">
                <img src={stories2} alt="stories2" />
              </li>
              <li className="post-stories__item3">
                <img src={stories3} alt="stories3" />
              </li>
              <li className="post-stories__item4">
                <img src={stories4} alt="stories4" />
              </li>
              <li className="post-stories__item5">
                <img src={stories5} alt="stories5" />
              </li>
              <li className="post-stories__item6">
                <img src={stories6} alt="stories6" />
              </li>
              <li className="post-stories__item7">
                <img src={stories7} alt="stories7" />
              </li>
              <li className="post-stories__item8">
                <img src={stories8} alt="stories8" />
              </li>
              <li className="post-stories__item9">
                <img src={stories9} alt="stories9" />
              </li>
              <li className="post-stories__item10">
                <img src={stories10} alt="stories10" />
              </li>
            </ul>
          </div>
          <div className="post-stories__up _up">
            <GoTop/>
          </div>
        </div>
      </div>
    </div>
  )
}
