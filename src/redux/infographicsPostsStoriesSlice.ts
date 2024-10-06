import { createSlice } from '@reduxjs/toolkit'
import stories1 from '../images/stories/stories1.jpg'
import stories2 from '../images/stories/stories2.jpg'
import stories3 from '../images/stories/stories3.jpg'
import stories4 from '../images/stories/stories4.jpg'
import stories5 from '../images/stories/stories5.jpg'
import stories6 from '../images/stories/stories6.jpg'
import stories7 from '../images/stories/stories7.jpg'
import stories8 from '../images/stories/stories8.jpg'
import stories9 from '../images/stories/stories9.jpg'
import stories10 from '../images/stories/stories10.jpg'
import infographics1 from '../images/infographics/infographics1.jpg'
import infographics2 from '../images/infographics/infographics2.jpg'
import infographics3 from '../images/infographics/infographics3.jpg'
import infographics4 from '../images/infographics/infographics4.jpg'
import infographics5 from '../images/infographics/infographics5.jpg'
import infographics6 from '../images/infographics/infographics6.jpg'
import infographics7 from '../images/infographics/infographics7.jpg'
import infographics8 from '../images/infographics/infographics8.jpg'
import infographics9 from '../images/infographics/infographics9.jpg'
import infographics10 from '../images/infographics/infographics10.jpg'
import infographics11 from '../images/infographics/infographics11.jpg'
import infographics12 from '../images/infographics/infographics12.jpg'

export const infographicsPostsStoriesSlice = createSlice({
  name: 'infographicsPostsStories',
  initialState: {
    data: [
      {
        id: 1,
        image: stories1,
      },
      {
        id: 2,
        image: stories2,
      },
      {
        id: 3,
        image: stories3,
      },
      {
        id: 4,
        image: stories4,
      },
      {
        id: 5,
        image: stories5,
      },
      {
        id: 6,
        image: stories6,
      },
      {
        id: 7,
        image: stories7,
      },
      {
        id: 8,
        image: stories8,
      },
      {
        id: 9,
        image: stories9,
      },
      {
        id: 10,
        image: stories10,
      },
      {
        id: 11,
        image: infographics1,
      },
      {
        id: 12,
        image: infographics2,
      },
      {
        id: 13,
        image: infographics3,
      },
      {
        id: 14,
        image: infographics4,
      },
      {
        id: 15,
        image: infographics5,
      },
      {
        id: 16,
        image: infographics6,
      },
      {
        id: 17,
        image: infographics7,
      },
      {
        id: 18,
        image: infographics8,
      },
      {
        id: 19,
        image: infographics9,
      },
      {
        id: 20,
        image: infographics10,
      },
      {
        id: 21,
        image: infographics11,
      },
      {
        id: 22,
        image: infographics12,
      },
    ],
  },
  reducers: {
    setInfographicsPostsStories: (state, action) => {
      state.data = action.payload
    }
  },
})

export const { setInfographicsPostsStories } = infographicsPostsStoriesSlice.actions
export const infographicsPostsStoriesReducer = infographicsPostsStoriesSlice.reducer
