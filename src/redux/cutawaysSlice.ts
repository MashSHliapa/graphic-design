import { createSlice } from '@reduxjs/toolkit'
// import { requestCutaways } from '../services/posts'
import { DataInitialState } from '../types/interfaces'
import cutaway1 from '../images/cutaways/cutaway1.jpg'
import cutaway2 from '../images/cutaways/cutaway2.jpg'
import cutaway3 from '../images/cutaways/cutaway3.jpg'
import cutaway4 from '../images/cutaways/cutaway4.jpg'
import cutaway5 from '../images/cutaways/cutaway5.jpg'
import cutaway6 from '../images/cutaways/cutaway6.jpg'
import cutaway7 from '../images/cutaways/cutaway7.jpg'
import cutaway8 from '../images/cutaways/cutaway8.jpg'
import cutaway9 from '../images/cutaways/cutaway9.jpg'
import cutaway10 from '../images/cutaways/cutaway10.jpg'
import cutaway11 from '../images/cutaways/cutaway11.jpg'
import cutaway12 from '../images/cutaways/cutaway12.jpg'

// const fetchCutaways = createAsyncThunk('cutaways/fetchCutaways', async () => {
//   return await requestCutaways()
// })

export const cutawaysSlice = createSlice({
  name: 'cutaways',
  initialState: {
    // loading: false,
    // error: null,
    data: [
      {
        id: 1,
        image: cutaway1,
      },
      {
        id: 2,
        image: cutaway2,
      },
      {
        id: 3,
        image: cutaway3,
      },
      {
        id: 4,
        image: cutaway4,
      },
      {
        id: 5,
        image: cutaway5,
      },
      {
        id: 6,
        image: cutaway6,
      },
      {
        id: 7,
        image: cutaway7,
      },
      {
        id: 8,
        image: cutaway8,
      },
      {
        id: 9,
        image: cutaway9,
      },
      {
        id: 10,
        image: cutaway10,
      },
      {
        id: 11,
        image: cutaway11,
      },
      {
        id: 12,
        image: cutaway12,
      }
    ],
  } as DataInitialState,

  reducers: {
    setCutaway: (state, action) => {
      state.data = action.payload
    }
  },
  // extraReducers: builder => {
  //   builder.addCase(fetchCutaways.pending, state => {
  //     state.loading = true
  //   })
  //   builder.addCase(fetchCutaways.fulfilled, (state, action) => {
  //     state.loading = false
  //     state.data = action.payload
  //   })
  //   builder.addCase(fetchCutaways.rejected, state => {
  //     state.loading = false
  //     state.error = 'что-то не так'
  //   })
  // }
})

// export { fetchCutaways }
export const { setCutaway } = cutawaysSlice.actions
export const cutawaysReducer = cutawaysSlice.reducer
