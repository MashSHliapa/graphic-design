import { Title } from '../../components/Title'
import { GoTop } from '../../components/GoTop'
import { Breadcrumb } from '../../components/Breadcrumb'
// import flyer from '../../images/flyers/flyer.jpg'
// import flyer2 from '../../images/flyers/flyer2.jpg'
// import flyer3 from '../../images/flyers/flyer3.jpg'
// import flyer4 from '../../images/flyers/flyer4.jpg'
// import flyer5 from '../../images/flyers/flyer5.jpg'
// import flyer6 from '../../images/flyers/flyer6.jpg'
// import flyer7 from '../../images/flyers/flyer7.jpg'
// import flyer8 from '../../images/flyers/flyer8.jpg'
// import flyer9 from '../../images/flyers/flyer9.jpg'
// import flyer10 from '../../images/flyers/flyer10.jpg'
import './Flyers.scss'
import { useEffect, useState } from 'react'
import { Post } from '../../components/Post'
import { PostData } from '../../types/interfaces'

export function Flyers() {


  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:8035/flyers')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  const flyer1 = posts.filter((item: PostData) => item.id === 1).map((item: PostData) => <Post key={item.id} post={item} />)
  const flyer2 = posts.filter((item: PostData) => item.id === 2).map((item: PostData) => <Post key={item.id} post={item} />)
  const flyer3 = posts.filter((item: PostData) => item.id === 3).map((item: PostData) => <Post key={item.id} post={item} />)
  const flyer4 = posts.filter((item: PostData) => item.id === 4).map((item: PostData) => <Post key={item.id} post={item} />)
  const flyer5 = posts.filter((item: PostData) => item.id === 5).map((item: PostData) => <Post key={item.id} post={item} />)
  const flyer6 = posts.filter((item: PostData) => item.id === 6).map((item: PostData) => <Post key={item.id} post={item} />)
  const flyer7 = posts.filter((item: PostData) => item.id === 7).map((item: PostData) => <Post key={item.id} post={item} />)
  const flyer8 = posts.filter((item: PostData) => item.id === 8).map((item: PostData) => <Post key={item.id} post={item} />)
  const flyer9 = posts.filter((item: PostData) => item.id === 9).map((item: PostData) => <Post key={item.id} post={item} />)
  const flyer10 = posts.filter((item: PostData) => item.id === 10).map((item: PostData) => <Post key={item.id} post={item} />)



  return (
    <div className="flyers">
      <div className="flyers__container _container">
        <div className="flyers__body">
          <div className="flyers__breadcrumb">
            <Breadcrumb>листовки</Breadcrumb>
          </div>
          <div className="flyers__title _title">
            <Title>Листовки</Title>
          </div>

          <div className="flyers__list">
            <div className="flyers__item1">{flyer1}</div>
            <div className="flyers__item2">{flyer2}</div>
            <div className="flyers__item3">{flyer3}</div>
            <div className="flyers__item-big">{flyer4}</div>
            <div className="flyers__item4">{flyer5}</div>
            <div className="flyers__item-small">{flyer6}</div>
            <div className="flyers__item5">{flyer7}</div>
            <div className="flyers__item6">{flyer8}</div>
            <div className="flyers__item7">{flyer9}</div>
            <div className="flyers__item8">{flyer10}</div>

            {/* <div className="flyers__item1">
              <img src={flyer} alt="flyer" />
            </div>
            <div className="flyers__item2">
              <img src={flyer2} alt="flyer" />
            </div>
            <div className="flyers__item3">
              <img src={flyer3} alt="flyer" />
            </div>
            <div className="flyers__item-big">
              <img src={flyer4} alt="flyer" />
            </div>
            <div className="flyers__item4">
              <img src={flyer5} alt="flyer" />
            </div>
            <div className="flyers__item-small">
              <img src={flyer6} alt="flyer" />
            </div>
            <div className="flyers__item5">
              <img src={flyer7} alt="flyer" />
            </div>
            <div className="flyers__item6">
              <img src={flyer8} alt="flyer" />
            </div>
            <div className="flyers__item7">
              <img src={flyer9} alt="flyer" />
            </div>
            <div className="flyers__item8">
              <img src={flyer10} alt="flyer" />
            </div> */}
          </div>
        </div>
        <div className="flyers__up _up">
          <GoTop />
        </div>
      </div>
    </div>
  )
}
