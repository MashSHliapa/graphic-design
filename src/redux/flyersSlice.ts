import { createSlice } from '@reduxjs/toolkit'
import { DataInitialState } from '../types/interfaces'
// import { requestFlyers } from '../services/posts'

import flyer1 from '../images/flyers/flyer1.jpg'
import flyer2 from '../images/flyers/flyer2.jpg'
import flyer3 from '../images/flyers/flyer3.jpg'
import flyer4 from '../images/flyers/flyer4.jpg'
import flyer5 from '../images/flyers/flyer5.jpg'
import flyer6 from '../images/flyers/flyer6.jpg'
import flyer7 from '../images/flyers/flyer7.jpg'
import flyer8 from '../images/flyers/flyer8.jpg'
import flyer9 from '../images/flyers/flyer9.jpg'
import flyer10 from '../images/flyers/flyer10.jpg'

// const fetchFlyers = createAsyncThunk('flyers/fetchFluers', async () => {
//   return await requestFlyers()
// })

const flyersSlice = createSlice({
  name: 'flyers',
  initialState: {
    // loading: false,
    // error: null,
    data: [
      {
        id: 1,
        image: flyer1,
      },
      {
        id: 2,
        image: flyer2,
      },
      {
        id: 3,
        image: flyer3,
      },
      {
        id: 4,
        image: flyer4,
      },
      {
        id: 5,
        image: flyer5,
      },
      {
        id: 6,
        image: flyer6,
      },
      {
        id: 7,
        image: flyer7,
      },
      {
        id: 8,
        image: flyer8,
      },
      {
        id: 9,
        image: flyer9,
      },
      {
        id: 10,
        image: flyer10,
      }
    ]
  } as DataInitialState,
  reducers: {},
  // extraReducers: builder => {
  //   builder
  //     .addCase(fetchFlyers.pending, state => {
  //       state.loading = true
  //     })
  //     .addCase(fetchFlyers.fulfilled, (state, action) => {
  //       state.loading = false
  //       state.data = action.payload
  //     })
  //     .addCase(fetchFlyers.rejected, state => {
  //       state.loading = false
  //       state.error = 'что-то не так'
  //     })
  // }
})

// export { fetchFlyers }
export const flyersReducer = flyersSlice.reducer
