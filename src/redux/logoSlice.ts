import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestLogos } from '../services/posts';
import { DataInitialState } from '../types/interfaces';

const fetchLogo = createAsyncThunk('logo/fetchLogo', async () => {
  return await requestLogos();
});

const logoSlice = createSlice({
  name: 'logo',
  initialState: {
    loading: false,
    error: null,
    data: [],
  } as DataInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLogo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchLogo.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.logo;
    });
    builder.addCase(fetchLogo.rejected, (state) => {
      state.loading = false;
      state.error = 'что-то не так';
    });
  },
});

export { fetchLogo };
export const logoReducer = logoSlice.reducer;
