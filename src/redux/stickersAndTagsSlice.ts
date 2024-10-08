import { createSlice } from '@reduxjs/toolkit'
import stiker1 from '../images/stickers/1.jpg'
import stiker2 from '../images/stickers/2.jpg'
import stiker3 from '../images/stickers/3.jpg'
import stiker4 from '../images/stickers/4.jpg'
import stiker5 from '../images/stickers/5.jpg'
import stiker6 from '../images/stickers/6.jpg'
import stiker7 from '../images/stickers/sticker7.jpg'
import stiker8 from '../images/stickers/sticker8.jpg'
import stiker9 from '../images/stickers/sticker9.jpg'
import stiker10 from '../images/stickers/sticker10.jpg'

export const stickersAndTagsSlice = createSlice({
  name: 'stickersAndTags',
  initialState: {
    data: [
      {
        id: 1,
        image: stiker1,
      },
      {
        id: 2,
        image: stiker2,
      },
      {
        id: 3,
        image: stiker3,
      },
      {
        id: 4,
        image: stiker4,
      },
      {
        id: 5,
        image: stiker5,
      },
      {
        id: 6,
        image: stiker6,
      },
      {
        id: 7,
        image: stiker7,
      },
      {
        id: 8,
        image: stiker9,
      },
      {
        id: 9,
        image: stiker10,
      },
      {
        id: 10,
        image: stiker8,
      },


    ],
  },
  reducers: {
    setStickersAndTags: (state, action) => {
      state.data = action.payload
    }
  }
})

export const setStickersAndTagsReducer = stickersAndTagsSlice.reducer
