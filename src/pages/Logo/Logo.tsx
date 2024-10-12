// import { useEffect } from 'react'
import { useSelector } from 'react-redux'
// import { ThunkDispatch } from 'redux-thunk'
// import { AnyAction } from 'redux'
// import { fetchLogo } from '../../redux/logoSlice'
import { Post } from '../../components/Post'
import { Title } from '../../components/Title/Title'
import { GoToTop } from '../../components/GoToTop/GoToTop'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import { PostData } from '../../types/interfaces'
import { RootState } from '../../redux/store'
import './Logo.scss'

export function Logo() {
  const { data: posts } = useSelector((state: RootState) => state.logo)

  // const dispatch = useDispatch<ThunkDispatch<DataResponse, null, AnyAction>>()
  // useEffect(() => {
  //   dispatch(fetchLogo())
  // }, [dispatch])
  // if (loading) {
  //   return <div>Loading...</div>
  // }
  // if (error) {
  //   return <div className="text-danger">{error}</div>
  // }

  const logo = posts.map((item: PostData) => <Post key={item.id} post={item} />)

  return (
    <div className="logo">
      <div className="logo__container _container">
        <div className="logo__breadcrumb">
          <BreadCrumbs>логотипы</BreadCrumbs>
        </div>
        <div className="logo__title _title">
          <Title>логотипы</Title>
        </div>
        <ul className="logo__list">
          {logo.map((item, index) => (
            <li className="logo__item" key={index}>
              {item}
            </li>
          ))}
        </ul>
        <div className="logo__go-to-top _go-to-top">
          <GoToTop />
        </div>
      </div>
    </div>
  )
}
