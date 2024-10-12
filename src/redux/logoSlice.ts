import { createSlice } from '@reduxjs/toolkit'
// import { requestLogos } from '../services/posts'
import { DataInitialState } from '../types/interfaces'
import logo1 from '../images/logo/logo1.jpg'
import logo2 from '../images/logo/logo2.jpg'
import logo3 from '../images/logo/logo3.jpg'
import logo4 from '../images/logo/logo4.jpg'
import logo5 from '../images/logo/logo5.jpg'
import logo6 from '../images/logo/logo6.jpg'
import logo7 from '../images/logo/logo7.jpg'
import logo8 from '../images/logo/logo8.jpg'
import logo9 from '../images/logo/logo9.jpg'

// const fetchLogo = createAsyncThunk('logo/fetchLogo', async () => {
//   return await requestLogos()
// })

const logoSlice = createSlice({
  name: 'logo',
  initialState: {
    loading: false,
    error: null,
    data: [
      {
        id: 1,
        image: logo1,
      },
      {
        id: 2,
        image: logo2,
      },
      {
        id: 3,
        image: logo3,
      },
      {
        id: 4,
        image: logo4,
      },
      {
        id: 5,
        image: logo5,
      },
      {
        id: 6,
        image: logo6,
      },
      {
        id: 7,
        image: logo7,
      },
      {
        id: 8,
        image: logo8,
      },
      {
        id: 9,
        image: logo9,
      },
    ],
  } as DataInitialState,

  reducers: {},
  // extraReducers: builder => {
  //   builder.addCase(fetchLogo.pending, state => {
  //     state.loading = true
  //   })
  //   builder.addCase(fetchLogo.fulfilled, (state, action) => {
  //     state.loading = false
  //     state.data = action.payload
  //   })
  //   builder.addCase(fetchLogo.rejected, state => {
  //     state.loading = false
  //     state.error = 'что-то не так'
  //   })
  // }
})

// export { fetchLogo }
export const logoReducer = logoSlice.reducer
