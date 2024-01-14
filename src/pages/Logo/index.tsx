import { Title } from '../../components/Title'
import { InPortfolio } from '../../components/InPortfolio'
import './Logo.scss'
import { useState, useEffect } from 'react'
import { Post } from '../../components/Post'

export function Logo() {

  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('http://localhost:8035/pictures')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  const logoPage = posts.map((item) => <Post key={item.id} post={item} />)

  return (
    <div className="logo">
      <div className="logo__container _container">
        <div className="logo__body">
          <div className="logo__title _title">
            <Title>логотипы</Title>
          </div>
          <ul className="logo__list">
            {logoPage}
          </ul>
          <div className="logo__in-portfolio _in-portfolio">
            <InPortfolio />
          </div>
        </div>
      </div>
    </div>
  )
}
