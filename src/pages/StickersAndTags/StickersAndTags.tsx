import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { fetchStickersAndTags } from '../../redux/stickersAndTagsSlice';
import { Post } from '../../components/Post/Post';
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
import { Title } from '../../components/Title/Title';
import { GoToTop } from '../../components/GoToTop/GoToTop';
import { Loading } from '../../components/Loading/Loading';
import { RootState } from '../../redux/store';
import { DataResponse, PostData } from '../../types/interfaces';
import './StickersAndTags.scss';

export function StickersAndTags() {
  const { data: posts, loading, error } = useSelector((state: RootState) => state.stickersAndTags);
  const dispatch = useDispatch<ThunkDispatch<DataResponse, null, AnyAction>>();

  useEffect(() => {
    dispatch(fetchStickersAndTags());
  }, [dispatch]);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  const stickers = posts.slice(0, 6).map((item: PostData) => <Post key={item.id} post={item} />);

  const tags = posts.slice(6, 10).map((item: PostData) => <Post key={item.id} post={item} />);

  return (
    <div className="stickers-tags">
      <div className="stickers-tags__container _container">
        <div className="stickers-tags__body">
          <div className="stickers-tags__breadcrumb">
            <BreadCrumbs>стикеры и бирки</BreadCrumbs>
          </div>
          <div className="stickers-tags__title _title">
            <Title>
              стикеры <span className="green-and">&</span> бирки
            </Title>
          </div>
          <div className="stickers-tags__stickers stickers">
            <ul className="stickers__list">
              {stickers.map((item, index) => (
                <li key={index} className="stickers__item">
                  {item}
                </li>
              ))}
            </ul>
            <div className="sticker__tags tags">
              <ul className="tags__list">
                {tags.map((item, index) => (
                  <li key={index} className={`tags__item${index + 1}`}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="sticker-tags__go-to-top _go-to-top">
          <GoToTop />
        </div>
      </div>
    </div>
  );
}
