import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { AnyAction } from 'redux'
import { fetchCutaways } from '../../redux/cutawaysSlice'
import { Post } from '../../components/Post'
import { Title } from '../../components/Title/Title'
import { GoToTop } from '../../components/GoToTop/GoToTop'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import { RootState } from '../../redux/store'
import { DataResponse, PostData } from '../../types/interfaces'
import './Cutaways.scss'


export function Cutaways() {
  const { data: posts, loading, error } = useSelector((state: RootState) => state.cutaways)

  const dispatch = useDispatch<ThunkDispatch<DataResponse, null, AnyAction>>()

  useEffect(() => {
    dispatch(fetchCutaways())
  }, [dispatch])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div className="text-danger">{error}</div>
  }
  const cutawaysPage = posts.map((item: PostData) => <Post key={item.id} post={item} />)

  return (
    <div className="cutaway">
      <div className="cutaway__container _container">
        <div className="cutaway__body">
          <div className="cutaway__breadcrumb">
            <BreadCrumbs>визитки</BreadCrumbs>
          </div>
          <div className="cutaway__title _title">
            <Title>визитки</Title>
          </div>
          <ul className="cutaway__list">
            {cutawaysPage}
          </ul>
          <div className="cutaway__up _up">
            <GoToTop />
          </div>
        </div>
      </div>
    </div>
  )
}
