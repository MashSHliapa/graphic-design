import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { Post } from '../../components/Post'
import { Breadcrumb } from '../../components/Breadcrumb'
import { Title } from '../../components/Title/Title'
import { GoTop } from '../../components/GoTop'
import { PostData } from '../../types/interfaces'
import './StickersAndTags.scss'

export function StickersAndTags() {
  const { data: posts } = useSelector((state: RootState) => state.stickersAndTags)

  const stickers = posts.slice(0, 6).map((item: PostData) => <Post key={item.id} post={item} />)

  const tags = posts.slice(6, 10).map((item: PostData) => <Post key={item.id} post={item} />)

  return (
    <div className="stickers-tags">
      <div className="stickers-tags__container _container">
        <div className="stickers-tags__body">
          <div className="flyers__breadcrumb">
            <Breadcrumb>стикеры и бирки</Breadcrumb>
          </div>
          <div className="stickers-tags__title _title">
            <Title>стикеры <span className="green-and">&</span> бирки</Title>
          </div>
          <div className="stickers-tags__stickers stickers">
            <ul className="stickers__list">
              {stickers.map((item, index) => (
                <li key={index} className="stickers__item">
                  {item}
                </li>
              ))}
            </ul>
            <div className="sticker__tags tags">
              <ul className="tags__list">
                {tags.map((item, index) => (
                  <li key={index} className={`tags__item${index + 1}`}>
                    {item}
                  </li>
                ))}
              </ul>
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
