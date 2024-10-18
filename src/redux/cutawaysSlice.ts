import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestCutaways } from '../services/posts';
import { DataInitialState } from '../types/interfaces';

const fetchCutaways = createAsyncThunk('cutaways/fetchCutaways', async () => {
  return await requestCutaways();
});

export const cutawaysSlice = createSlice({
  name: 'cutaways',
  initialState: {
    loading: false,
    error: null,
    data: [],
  } as DataInitialState,

  reducers: {
    setCutaway: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCutaways.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCutaways.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCutaways.rejected, (state) => {
      state.loading = false;
      state.error = 'что-то не так';
    });
  },
});

export { fetchCutaways };
export const { setCutaway } = cutawaysSlice.actions;
export const cutawaysReducer = cutawaysSlice.reducer;
