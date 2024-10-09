import { createSlice } from '@reduxjs/toolkit'
import poster1 from '../images/posters/poster1.jpg'
import poster2 from '../images/posters/poster2.jpg'
import poster3 from '../images/posters/poster3.jpg'
import poster4 from '../images/posters/poster4.jpg'
import poster5 from '../images/posters/poster5.jpg'
import banner1 from '../images/posters/banner1.jpg'
import banner2 from '../images/posters/banner2.jpg'
import banner3 from '../images/posters/banner3.jpg'

export const postersAndBanners = createSlice({
  name: 'postersAndBanners',
  initialState: {
    data: [
      {
        id: 1,
        image: poster1,
      },
      {
        id: 2,
        image: poster2,
      },
      {
        id: 3,
        image: poster3,
      },
      {
        id: 4,
        image: poster4,
      },
      {
        id: 5,
        image: poster5,
      },
      {
        id: 6,
        image: banner1,
      },
      {
        id: 7,
        image: banner2,
      },
      {
        id: 8,
        image: banner3,
      },
    ],
  },
  reducers: {},
})

export const postersAndBannersReducer = postersAndBanners.reducer
