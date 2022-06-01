import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchEpisodesIMDB } from '../actions/actions';
import { IEpisodesRespIMDB, IEpisodesIMDBParams } from '../../types/IEpisodesIMDB';

interface IEpisodesIMDBState {
  episodesIMDB: IEpisodesIMDBParams[];
  isLoading: boolean;
  error: string;
}

const initialState: IEpisodesIMDBState = {
  episodesIMDB: [],
  isLoading: false,
  error: ''
};

export const episodesIMDBSlice = createSlice({
  name: 'episodesIMDB',
  initialState,
  reducers: {
    episodesOnUnmount: (state) => {
      state.episodesIMDB = [];
      state.error = '';
    }
  },
  extraReducers: {
    [fetchEpisodesIMDB.fulfilled.type]: (state, action: PayloadAction<IEpisodesRespIMDB>) => {
      state.isLoading = false;
      state.episodesIMDB = action.payload.episodes;
      state.error = action.payload.errorMessage;
    },
    [fetchEpisodesIMDB.pending.type]: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    [fetchEpisodesIMDB.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export default episodesIMDBSlice.reducer;
export const { episodesOnUnmount } = episodesIMDBSlice.actions;
