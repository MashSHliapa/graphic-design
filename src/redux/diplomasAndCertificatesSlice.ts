import { createSlice } from '@reduxjs/toolkit'
import { DataInitialState } from '../types/interfaces'
import diploma1 from '../images/diplomas/diploma1.jpg'
import diploma2 from '../images/diplomas/diploma2.jpg'
import diploma3 from '../images/diplomas/diploma3.jpg'
import diploma4 from '../images/diplomas/diploma4.jpg'
import diploma5 from '../images/diplomas/diploma5.jpg'
import diploma6 from '../images/diplomas/diploma6.jpg'
import certificate1 from '../images/certificates/certificate1.jpg'
import certificate2 from '../images/certificates/certificate2.jpg'
import certificate3 from '../images/certificates/certificate3.jpg'
import certificate4 from '../images/certificates/certificate4.jpg'
import certificate5 from '../images/certificates/certificate5.jpg'
import certificate6 from '../images/certificates/certificate6.jpg'
import certificate7 from '../images/certificates/certificate7.jpg'

// import { requestDiplomasAndCertificates } from '../services/posts'
// const fetchDiplomasAndCertificates = createAsyncThunk(
//   'diplomasAndCertificates/fetchDiplomasAndCertificates', async () => {
//     return await requestDiplomasAndCertificates()
//   }
// )

const diplomasAndCertificatesSlice = createSlice({
  name: 'diplomasAndCertificates',
  initialState: {
    // loading: false,
    // error: null,
    data: [
      {
        id: 1,
        image: diploma1,
      },
      {
        id: 2,
        image: diploma2,
      },
      {
        id: 3,
        image: diploma3,
      },
      {
        id: 4,
        image: diploma4,
      },
      {
        id: 5,
        image: diploma5,
      },
      {
        id: 6,
        image: diploma6,
      },
      {
        id: 7,
        image: certificate1,
      },
      {
        id: 8,
        image: certificate2,
      },
      {
        id: 9,
        image: certificate3,
      },
      {
        id: 10,
        image: certificate4,
      },
      {
        id: 11,
        image: certificate5,
      },
      {
        id: 12,
        image: certificate6,
      },
      {
        id: 13,
        image: certificate7,
      },
    ]
  } as DataInitialState,
  reducers: {},
  // extraReducers: builder => {
  //   builder
  //     .addCase(fetchDiplomasAndCertificates.pending, state => {
  //       state.loading = true
  //     })
  //     .addCase(fetchDiplomasAndCertificates.fulfilled, (state, action) => {
  //       state.loading = false
  //       state.data = action.payload
  //     })
  //     .addCase(fetchDiplomasAndCertificates.rejected, state => {
  //       state.loading = false
  //       state.error = 'что-то не так'
  //     })
  // }
})

// export { fetchDiplomasAndCertificates }
export const diplomasAndCertificatesReducer = diplomasAndCertificatesSlice.reducer
