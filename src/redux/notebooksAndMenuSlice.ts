import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { DataInitialState } from '../types/interfaces'
import { requestNotebooksAndMenu } from '../services/posts'

const fetchNotebooksAndMenu = createAsyncThunk('notebooksAndMenu/fetchNotebooksAndMenu', async () => {
  return await requestNotebooksAndMenu()
})

const notebooksAndMenuSlice = createSlice({
  name: "notebooksAndMenu",
  initialState: {
    loading: false,
    error: null,
    data: []
  } as DataInitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchNotebooksAndMenu.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchNotebooksAndMenu.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
    })
    builder.addCase(fetchNotebooksAndMenu.rejected, state => {
      state.loading = false
      state.error = 'что-то не так'
    })
  },
})


export { fetchNotebooksAndMenu }
export const notebooksAndMenuReducer = notebooksAndMenuSlice.reducer

