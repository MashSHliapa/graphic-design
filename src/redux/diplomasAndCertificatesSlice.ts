import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { DataInitialState } from '../types/interfaces'
import { requestDiplomasAndCertificates } from '../services/posts'


const fetchDiplomasAndCertificates = createAsyncThunk(
  'diplomasAndCertificates/fetchDiplomasAndCertificates', async () => {
    return await requestDiplomasAndCertificates()
  }
)

const diplomasAndCertificatesSlice = createSlice({
  name: 'diplomasAndCertificates',
  initialState: {
    loading: false,
    error: null,
    data: []
  } as DataInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchDiplomasAndCertificates.pending, state => {
        state.loading = true
      })
      .addCase(fetchDiplomasAndCertificates.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchDiplomasAndCertificates.rejected, state => {
        state.loading = false
        state.error = 'что-то не так'
      })
  }
})

export { fetchDiplomasAndCertificates }
export const diplomasAndCertificatesReducer = diplomasAndCertificatesSlice.reducer
