import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchCutaways = createAsyncThunk('cutaways/fetchCutaways', async () => {
  const res = await fetch ('http://localhost:8035/cutaways')
  const data = await res.json()
  console.log(data)
  return data
})

const cutawaysSlice = createSlice({
  name: 'cutaways',
  initialState: {
    loading: false,
    error: null,
    data: [],
  }, reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCutaways.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchCutaways.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
    })
    builder.addCase(fetchCutaways.rejected, state => {
      state.loading = false
      state.error = 'что-то не так'
    })
  }
})

export { fetchCutaways }
export const cutawaysReducer = cutawaysSlice.reducer
