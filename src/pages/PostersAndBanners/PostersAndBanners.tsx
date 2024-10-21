import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { fetchPostersAndBanners } from '../../redux/postersAndBannersSlice';
import { Post } from '../../components/Post/Post';
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
import { Title } from '../../components/Title/Title';
import { GoToTop } from '../../components/GoToTop/GoToTop';
import { RootState } from '../../redux/store';
import { DataResponse, PostData } from '../../types/interfaces';
import './PostersAndBanners.scss';

export function PostersAndBanners() {
  const { data: posts, loading, error } = useSelector((state: RootState) => state.postersAndBanners);
  const dispatch = useDispatch<ThunkDispatch<DataResponse, null, AnyAction>>();

  useEffect(() => {
    dispatch(fetchPostersAndBanners());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  const posters = posts.slice(0, 5).map((item: PostData) => <Post key={item.id} post={item} />);

  const banners = posts.slice(5, 8).map((item: PostData) => <Post key={item.id} post={item} />);

  return (
    <div className="posters-banners">
      <div className="posters-banners__container _container">
        <div className="posters-banners__body">
          <div className="posters-banners__breadcrumb">
            <BreadCrumbs>афиши и плакаты</BreadCrumbs>
          </div>
          <div className="posters-banners__posters posters">
            <div className="posters__title _title">
              <Title>
                афиши <span className="green-and">&</span> плакаты
              </Title>
            </div>
            <ul className="posters__list">
              {posters.map((item, index) => (
                <li key={index} className={`posters__item${index + 1}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="posters-banners__banners banners">
            <div className="banners__title _title">
              <Title>баннеры</Title>
            </div>
            <ul className="banners__list">
              {banners.map((item, index) => (
                <li key={index} className={`banners__item${index + 1}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="posters__go-to-top _go-to-top">
          <GoToTop />
        </div>
      </div>
    </div>
  );
}
