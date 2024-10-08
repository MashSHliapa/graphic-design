import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { Post } from '../../components/Post'
import { Breadcrumb } from '../../components/Breadcrumb'
import { Title } from '../../components/Title/Title'
import { GoTop } from '../../components/GoTop'
import { PostData } from '../../types/interfaces'
import './InfographicsPostsStories.scss'

export function InfographicsPostsStories() {
  const { data: posts } = useSelector((state: RootState) => state.infographicsPostsStories)

  const postsStories = posts.slice(0, 10).map((item: PostData) => <Post key={item.id} post={item} />)

  const infographics = posts.slice(10, 23).map((item: PostData) => <Post key={item.id} post={item} />)

  return (
    <div className="infographics-post-stories">
      <div className="infographics-post-stories__container _container">
        <div className="infographics-post-stories__body">
          <div className="infographics-post-stories__breadcrumb">
            <Breadcrumb>ИНФОГРАФИКА, пост и сторис</Breadcrumb>
          </div>
          <div className="infographics-post-stories__infographics infographics">
            <div className="infographics__title _title">
              <Title>ИНФОГРАФИКА</Title>
            </div>
            <ul className="infographics__list">
              {infographics.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="infographics-post-stories__post-stories post-stories">
            <div className="post-stories__title _title">
              <Title>Пост <span className="green-and">&</span> Сторис</Title>
            </div>
            <ul className="post-stories__list">
              {postsStories.map((item, index) => (
                <li key={index} className={`post-stories__item${index + 1}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="infographics-post-stories__up _up">
            <GoTop />
          </div>
        </div>
      </div>
    </div>
  )
}
