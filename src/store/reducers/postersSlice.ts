import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPosters, IPosterParams } from '../../types/IPosters';
import { fetchPosters } from '../actions/actions';

interface IPostersState {
  posters: IPosterParams[];
  isLoading: boolean;
  error: string;
}

const initialState: IPostersState = {
  posters: [],
  isLoading: false,
  error: ''
};

export const postersSlice = createSlice({
  name: 'posters',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosters.fulfilled.type]: (state, action: PayloadAction<IPosters>) => {
      state.error = action.payload.errorMessage;
      state.isLoading = false;
      state.posters = action.payload.backdrops.concat(action.payload.posters);
    },
    [fetchPosters.pending.type]: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    [fetchPosters.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export default postersSlice.reducer;
