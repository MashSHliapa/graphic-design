import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { Post } from '../../components/Post'
import { Title } from '../../components/Title/Title'
import { GoTop } from '../../components/GoTop'
import { Breadcrumb } from '../../components/Breadcrumb'
import { PostData } from '../../types/interfaces'
import './InfographicsPostsStories.scss'

export function InfographicsPostsStories() {
  const { data: posts } = useSelector((state: RootState) => state.infographicsPostsStories)
  console.log(posts)

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
            <div className="infographics__box">
              <ul className="infographics__list">
                {infographics}
              </ul>
            </div>
          </div>
          <div className="infographics-post-stories__post-stories post-stories">
            <div className="post-stories__title _title">
              <Title>Пост <span className="green-and">&</span> Сторис</Title>
            </div>
            <div className="post-stories__box">
              <ul className="post-stories__list">
                {postsStories.map((post, index) => (
                  <li key={index} className={`post-stories__item${index + 1}`}>
                    {post}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="infographics-post-stories__up _up">
            <GoTop />
          </div>
        </div>
      </div>
    </div>
  )
}
