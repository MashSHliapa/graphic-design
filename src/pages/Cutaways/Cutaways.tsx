import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { fetchCutaways } from '../../redux/cutawaysSlice';
import { Post } from '../../components/Post/Post';
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
import { Title } from '../../components/Title/Title';
import { GoToTop } from '../../components/GoToTop/GoToTop';
import { RootState } from '../../redux/store';
import { DataResponse, PostData } from '../../types/interfaces';
import './Cutaways.scss';

export function Cutaways() {
  const { data: posts, loading, error } = useSelector((state: RootState) => state.cutaways);
  const dispatch = useDispatch<ThunkDispatch<DataResponse, null, AnyAction>>();

  useEffect(() => {
    dispatch(fetchCutaways());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  const cutaways = posts.map((item: PostData) => <Post key={item.id} post={item} />);

  return (
    <div className="cutaways">
      <div className="cutaways__container _container">
        <div className="cutaways__body">
          <div className="cutaways__breadcrumb">
            <BreadCrumbs>визитки</BreadCrumbs>
          </div>
          <div className="cutaways__title _title">
            <Title>визитки</Title>
          </div>
          <ul className="cutaways__list">
            {cutaways.map((item, index) => (
              <li key={index} className="cutaways__item">
                {item}
              </li>
            ))}
          </ul>
          <div className="cutaways__go-to-top _go-to-top">
            <GoToTop />
          </div>
        </div>
      </div>
    </div>
  );
}
