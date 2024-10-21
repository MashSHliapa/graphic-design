import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestInfographicsPostsStories } from '../services/posts';
import { DataInitialState } from '../types/interfaces';

const fetchInfographicsPostsStories = createAsyncThunk(
  'infographicsPostsStories/fetchInfographicsPostsStories',
  async () => {
    return await requestInfographicsPostsStories();
  },
);

export const infographicsPostsStoriesSlice = createSlice({
  name: 'infographicsPostsStories',
  initialState: {
    loading: false,
    error: null,
    data: [],
  } as DataInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchInfographicsPostsStories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchInfographicsPostsStories.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchInfographicsPostsStories.rejected, (state) => {
      state.loading = false;
      state.error = 'что-то не так';
    });
  },
});

export { fetchInfographicsPostsStories };
export const infographicsPostsStoriesReducer = infographicsPostsStoriesSlice.reducer;
