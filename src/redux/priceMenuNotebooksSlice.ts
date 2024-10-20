import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DataInitialState } from '../types/interfaces';
import { requestPriceMenuNotebooks } from '../services/posts';

const fetchPriceMenuNotebooks = createAsyncThunk('priceMenuNotebooks/fetchPriceMenuNotebooks', async () => {
  return await requestPriceMenuNotebooks();
});

const priceMenuNotebooksSlice = createSlice({
  name: 'priceMenuNotebooks',
  initialState: {
    loading: false,
    error: null,
    data: [],
  } as DataInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPriceMenuNotebooks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPriceMenuNotebooks.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPriceMenuNotebooks.rejected, (state) => {
      state.loading = false;
      state.error = 'что-то не так';
    });
  },
});

export { fetchPriceMenuNotebooks };
export const priceMenuNotebooksReducer = priceMenuNotebooksSlice.reducer;
