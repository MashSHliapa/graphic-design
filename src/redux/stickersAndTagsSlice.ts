import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestStickersAndTags } from '../services/posts';
import { DataInitialState } from '../types/interfaces';

const fetchStickersAndTags = createAsyncThunk('stickersAndTags/fetchStickersAndTags', async () => {
  return await requestStickersAndTags();
});

export const stickersAndTagsSlice = createSlice({
  name: 'stickersAndTags',
  initialState: {
    loading: false,
    error: null,
    data: [],
  } as DataInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStickersAndTags.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchStickersAndTags.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.stickersAndTags;
    });
    builder.addCase(fetchStickersAndTags.rejected, (state) => {
      state.loading = false;
      state.error = 'что-то не так';
    });
  },
});

export { fetchStickersAndTags };
export const setStickersAndTagsReducer = stickersAndTagsSlice.reducer;
