import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { fetchFlyers } from '../../redux/flyersSlice';
import { Post } from '../../components/Post/Post';
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
import { Title } from '../../components/Title/Title';
import { GoToTop } from '../../components/GoToTop/GoToTop';
import { RootState } from '../../redux/store';
import { DataResponse, PostData } from '../../types/interfaces';
import './Flyers.scss';

export function Flyers() {
  const { data: posts, loading, error } = useSelector((state: RootState) => state.flyers);
  const dispatch = useDispatch<ThunkDispatch<DataResponse, null, AnyAction>>();

  useEffect(() => {
    dispatch(fetchFlyers());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  const flyers = posts.map((item: PostData) => <Post key={item.id} post={item} />);

  return (
    <div className="flyers">
      <div className="flyers__container _container">
        <div className="flyers__breadcrumb">
          <BreadCrumbs>листовки</BreadCrumbs>
        </div>
        <div className="flyers__title _title">
          <Title>Листовки</Title>
        </div>
        <div className="flyers__list">
          {flyers.map((item, index) => (
            <div className={`flyers__item${index + 1}`} key={index}>
              {item}
            </div>
          ))}
        </div>
        <div className="flyers__go-to-top _go-to-top">
          <GoToTop />
        </div>
      </div>
    </div>
  );
}
