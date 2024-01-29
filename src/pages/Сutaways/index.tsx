import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchCutaways } from '../../redux/cutawaysSlice'
import { Title } from '../../components/Title'
import { GoTop } from '../../components/GoTop'
import { Post } from '../../components/Post'
import { Breadcrumb } from '../../components/Breadcrumb'
import './Cutaways.scss'

export function Cutaways() {
  const { data: posts, loading, error } = useSelector(state => state.cutaways)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCutaways())
  }, [dispatch])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div className="text-danger">{error}</div>
  }
  const cutawaysPage = posts.map((item) => <Post key={item.id} post={item} />)

  return (
    <div className="cutaway">
      <div className="cutaway__container _container">
        <div className="cutaway__body">
          <div className="flyers__breadcrumb">
            <Breadcrumb>визитки</Breadcrumb>
          </div>
          <div className="cutaway__title _title">
            <Title>визитки</Title>
          </div>
          <ul className="cutaway__list">
            {cutawaysPage}
          </ul>
          <div className="cutaway__up _up">
            <GoTop />
          </div>
        </div>
      </div>
    </div>
  )
}
