import { Title } from '../../components/Title'
import { InPortfolio } from '../../components/InPortfolio'
import './Logo.scss'
import { useEffect } from 'react'
import { Post } from '../../components/Post'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLogo } from '../../redux/logoSlice'

export function Logo() {

  // const [posts, setPosts] = useState([])
  // useEffect(() => {
  //   fetch('http://localhost:8035/pictures')
  //     .then(res => res.json())
  //     .then(data => setPosts(data))
  // }, [])

  const { data: posts, loading, error } = useSelector(state => state.logo)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchLogo())
  }, [dispatch])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div className="text-danger">{error}</div>
  }

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
