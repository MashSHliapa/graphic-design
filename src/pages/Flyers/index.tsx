import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { fetchFlyers } from '../../redux/flyersSlice'
import { Post } from '../../components/Post'
import { Title } from '../../components/Title'
import { GoTop } from '../../components/GoTop'
import { Breadcrumb } from '../../components/Breadcrumb'
import { RootState } from '../../redux/store'
import { DataResponse, PostData } from '../../types/interfaces'
import './Flyers.scss'

export function Flyers() {

  const { data: posts, loading, error } = useSelector((state: RootState) => state.flyers)

  const dispatch = useDispatch<ThunkDispatch<DataResponse, null, AnyAction>>()

  useEffect(() => {
    dispatch(fetchFlyers())
  }, [dispatch])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div className="text-danger">{error}</div>
  }

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
          </div>
        </div>
        <div className="flyers__up _up">
          <GoTop />
        </div>
      </div>
    </div>
  )
}
