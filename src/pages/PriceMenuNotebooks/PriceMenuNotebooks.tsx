import { useSelector } from 'react-redux'
// import { useEffect } from 'react'
// import { ThunkDispatch } from '@reduxjs/toolkit'
// import { AnyAction } from 'redux'
// import { fetchNotebooksAndMenu } from '../../redux/notebooksAndMenuSlice'
import { Post } from '../../components/Post'
import { Title } from '../../components/Title/Title'
import { GoToTop } from '../../components/GoToTop/GoToTop'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import { RootState } from '../../redux/store'
import { PostData } from '../../types/interfaces'
import './PriceMenuNotebooks.scss'

export function PriceMenuNotebooks() {
  const { data: posts } = useSelector((state: RootState) => state.priceMenuNotebooks)

  // const dispatch = useDispatch<ThunkDispatch<DataResponse, null, AnyAction>>()
  // useEffect(() => {
  //   dispatch(fetchNotebooksAndMenu())
  // }, [dispatch])
  // if (loading) {
  //   return <div>Loading...</div>
  // }
  // if (error) {
  //   return <div className="text-danger">{error}</div>
  // }

  const prices = posts.slice(0, 3).map((item: PostData) => <Post key={item.id} post={item} />)

  const menu = posts.slice(3, 15).map((item: PostData) => <Post key={item.id} post={item} />)

  const notebooks = posts.slice(15, 21).map((item: PostData) => <Post key={item.id} post={item} />)

  return (
    <div className="price-menu-notebooks">
      <div className="price-menu-notebooks__container _container">
        <div className="price-menu-notebooks__breadcrumb">
          <BreadCrumbs>блокноты и меню</BreadCrumbs>
        </div>
        <div className="price-menu-notebooks__price price">
          <div className="price__title _title">
            <Title>Прайс</Title>
          </div>
          <ul className="price__list">
            {prices.map((item, index) =>
              <li key={index} className="price__item">
                {item}
              </li>
            )}
          </ul>
        </div>
        <div className="price-menu-notebooks__menu menu">
          <div className="menu__title _title">
            <Title>меню</Title>
          </div>
          <ul className="menu__list">
            {menu.map((item, index) =>
              <li key={index} className="menu__item">
                {item}
              </li>
            )}
          </ul>
        </div>
        <div className="price-menu-notebooks__notebooks notebooks">
          <div className="notebooks__title _title">
            <Title>блокноты</Title>
          </div>
          <ul className="notebooks__list">
            {notebooks.map((item, index) =>
              <li key={index} className="notebooks__item">
                {item}
              </li>
            )}
          </ul>
        </div>
        <div className="price-menu-notebooks__go-to-top _go-to-top">
          <GoToTop />
        </div>
      </div>
    </div>
  )
}
