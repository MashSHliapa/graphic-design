import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { AnyAction } from '@reduxjs/toolkit'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { fetchDiplomasAndCertificates } from '../../redux/diplomasAndCertificatesSlice'
import { Post } from '../../components/Post'
import { Title } from '../../components/Title/Title'
import { GoToTop } from '../../components/GoToTop/GoToTop'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import { RootState } from '../../redux/store'
import { DataResponse, PostData } from '../../types/interfaces'
import './DiplomasAndCertificates.scss'

export function DiplomasAndCertificates() {

  const { data: posts, loading, error } = useSelector((state: RootState) => state.diplomasAndCertificates)

  const dispatch = useDispatch<ThunkDispatch<DataResponse, null, AnyAction>>()

  useEffect(() => {
    dispatch(fetchDiplomasAndCertificates())
  }, [dispatch])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div className="text-danger">{error}</div>
  }



  const diplomasPage = posts.slice(0, 6).map((item: PostData) => <Post key={item.id} post={item} />)
  const certificatesPage = posts.slice(6, 15).map((item: PostData) => <Post key={item.id} post={item} />)

  return (
    <div className="diplomas-certificates">
      <div className="diplomas-certificates__container _container">
        <div className="diplomas-certificates__body">
          <div className="diplomas-certificates__breadcrumb">
            <BreadCrumbs>дипломы и благодарности</BreadCrumbs>
          </div>
          <div className="diplomas-certificates__diplomas diplomas">
            <div className="diplomas__title _title">
              <Title>дипломы <span className="green-and">&</span> благодарности</Title>
            </div>
            <ul className="diplomas__list">
              {diplomasPage}
            </ul>
          </div>
          <div className="diplomas-certificates__certificate certificate">
            <div className="certificates__title _title">
              <Title>сертификаты <span className="green-and">&</span> пригласительные</Title>
            </div>
            <ul className="certificates__list">
              {certificatesPage}
            </ul>
          </div>
        </div>
        <div className="diplomas__up _up">
          <GoToTop />
        </div>
      </div>
    </div>
  )
}
