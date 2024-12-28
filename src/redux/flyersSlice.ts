import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestFlyers } from '../services/posts';
import { DataInitialState } from '../types/interfaces';

const fetchFlyers = createAsyncThunk('flyers/fetchFluers', async () => {
  return await requestFlyers();
});

const flyersSlice = createSlice({
  name: 'flyers',
  initialState: {
    loading: false,
    error: null,
    data: [],
  } as DataInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFlyers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFlyers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.flyers;
    });
    builder.addCase(fetchFlyers.rejected, (state) => {
      state.loading = false;
      state.error = 'что-то не так';
    });
  },
});

export { fetchFlyers };
export const flyersReducer = flyersSlice.reducer;
