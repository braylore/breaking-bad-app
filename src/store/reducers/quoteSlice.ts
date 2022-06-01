import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchRandomQuote } from '../actions/actions';
import { IQuote } from '../../types/IQuote';

interface IQuoteState {
  quote: IQuote[];
  isLoading: boolean;
  error: string;
}

const initialState: IQuoteState = {
  quote: [],
  isLoading: false,
  error: ''
};

export const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    quoteOnUnmount: (state) => {
      state.quote = [];
    }
  },
  extraReducers: {
    [fetchRandomQuote.fulfilled.type]: (state, action: PayloadAction<IQuote[]>) => {
      state.isLoading = false;
      state.quote = action.payload;
    },
    [fetchRandomQuote.pending.type]: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    [fetchRandomQuote.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export default quoteSlice.reducer;
export const { quoteOnUnmount } = quoteSlice.actions;
