import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestLogos } from '../services/posts'
import { DataInitialState } from '../types/interfaces'

const fetchLogo = createAsyncThunk('logo/fetchLogo', async () => {
  return await requestLogos()
  // const res = await fetch('http://localhost:8035/logos')
  // const res = await fetch('https://jsonplaceholder.typicode.com/photos')
  // const data = await res.json()
  // console.log(data)
  // return data
})

const logoSlice = createSlice({
  name: 'logo',
  initialState: {
    loading: false,
    error: null,
    data: [],
  } as DataInitialState,

  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchLogo.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchLogo.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
    })
    builder.addCase(fetchLogo.rejected, state => {
      state.loading = false
      state.error = 'что-то не так'
    })
  }
})

export { fetchLogo }
export const logoReducer = logoSlice.reducer
