import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestPostersAndBanners } from '../services/posts';
import { DataInitialState } from '../types/interfaces';

const fetchPostersAndBanners = createAsyncThunk('postersAndBanners/fetchPostersAndBanners', async () => {
  return await requestPostersAndBanners();
});

export const postersAndBanners = createSlice({
  name: 'postersAndBanners',
  initialState: {
    loading: false,
    error: null,
    data: [],
  } as DataInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPostersAndBanners.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPostersAndBanners.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.postersAndBanners;
    });
    builder.addCase(fetchPostersAndBanners.rejected, (state) => {
      state.loading = false;
      state.error = 'что-то не так';
    });
  },
});

export { fetchPostersAndBanners };
export const postersAndBannersReducer = postersAndBanners.reducer;
