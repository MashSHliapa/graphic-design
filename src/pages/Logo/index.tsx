import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { fetchLogo } from '../../redux/logoSlice'
import { Post } from '../../components/Post'
import { Title } from '../../components/Title'
import { GoTop } from '../../components/GoTop'
import { Breadcrumb } from '../../components/Breadcrumb'
import { PostData } from '../../types/interfaces'
import { LogoResponse } from '../../types/interfaces'
import { RootState } from '../../redux/store'
import './Logo.scss'


export function Logo() {

  // const [posts, setPosts] = useState([])
  // useEffect(() => {
  //   fetch('http://localhost:8035/pictures')
  //     .then(res => res.json())
  //     .then(data => setPosts(data))
  // }, [])

  const { data: posts, loading, error } = useSelector((state: RootState) => state.logo)

  const dispatch = useDispatch<ThunkDispatch<LogoResponse, null, AnyAction>>()

  useEffect(() => {
    dispatch(fetchLogo())
  }, [dispatch])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div className="text-danger">{error}</div>
  }

  const logoPage = posts.map((item: PostData) => <Post key={item.id} post={item} />)

  return (
    <div className="logo">
      <div className="logo__container _container">
        <div className="logo__body">
          <div className="flyers__breadcrumb">
            <Breadcrumb>логотипы</Breadcrumb>
          </div>
          <div className="logo__title _title">
            <Title>логотипы</Title>
          </div>
          <ul className="logo__list">
            {logoPage}
          </ul>
          <div className="logo__up _up">
            <GoTop />
          </div>
        </div>
      </div>
    </div>
  )
}
