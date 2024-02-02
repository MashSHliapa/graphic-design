import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { AnyAction } from 'redux'
import { fetchNotebooksAndMenu } from '../../redux/notebooksAndMenuSlice'
import { Post } from '../../components/Post'
import { Title } from '../../components/Title'
import { GoTop } from '../../components/GoTop'
import { Breadcrumb } from '../../components/Breadcrumb'
import { RootState } from '../../redux/store'
import { DataResponse, PostData } from '../../types/interfaces'
import './NotebooksAndMenu.scss'

export function NotebooksAndMenu() {

  const { data: posts, loading, error } = useSelector((state: RootState) => state.notebooksAndMenu)

  const dispatch = useDispatch<ThunkDispatch<DataResponse, null, AnyAction>>()

  useEffect(() => {
    dispatch(fetchNotebooksAndMenu())
  }, [dispatch])


  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div className="text-danger">{error}</div>
  }

  const notebooksPage = posts.slice(0, 8).map((item: PostData) => <Post key={item.id} post={item} />)
  const menuPage = posts.slice(8, 30).map((item: PostData) => <Post key={item.id} post={item} />)

  return (
    <div className="notebooks-menu">
      <div className="notebooks-menu__container _container">
        <div className="notebooks-menu__body">
          <div className="flyers__breadcrumb">
            <Breadcrumb>блокноты и меню</Breadcrumb>
          </div>
          <div className="notebooks-menu__notebooks notebooks">
            <div className="notebooks__title _title">
              <Title>блокноты</Title>
            </div>
            <ul className="notebooks__list">
              {notebooksPage}
            </ul>
          </div>

          <div className="notebooks-menu__menu menu">
            <div className="menu__title _title">
              <Title>меню</Title>
            </div>
            <ul className="menu__list">
              {menuPage}
            </ul>
          </div>
        </div>
        <div className="notebooks-menu__up _up">
          <GoTop />
        </div>
      </div>
    </div>
  )
}
