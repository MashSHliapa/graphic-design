import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { DataInitialState } from '../types/interfaces'
import { requestFlyers } from '../services/posts'

const fetchFlyers = createAsyncThunk('flyers/fetchFluers', async () => {
  return await requestFlyers()
})

const flyersSlice = createSlice({
  name: 'flyers',
  initialState: {
    loading: false,
    error: null,
    data: []
  } as DataInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchFlyers.pending, state => {
        state.loading = true
      })
      .addCase(fetchFlyers.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchFlyers.rejected, state => {
        state.loading = false
        state.error = 'что-то не так'
      })
  }
})

export { fetchFlyers }
export const flyersReducer = flyersSlice.reducer
