import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IEpisodes } from '../../types/IEpisodes';
import { fetchEpisodes, fetchEpisodeById } from '../actions/actions';

interface IEpisodesState {
  episode: IEpisodes[];
  episodes: IEpisodes[];
  isLoading: boolean;
  error: string;
}

const initialState: IEpisodesState = {
  episode: [],
  episodes: [],
  isLoading: false,
  error: ''
};

export const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {
    episodeOnUnmount: (state) => {
      state.episode = [];
    }
  },
  extraReducers: {
    [fetchEpisodes.fulfilled.type]: (state, action: PayloadAction<IEpisodes[]>) => {
      state.isLoading = false;
      state.episodes = action.payload;
    },
    [fetchEpisodes.pending.type]: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    [fetchEpisodes.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchEpisodeById.fulfilled.type]: (state, action: PayloadAction<IEpisodes[]>) => {
      state.isLoading = false;
      state.episode = action.payload;
    },
    [fetchEpisodeById.pending.type]: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    [fetchEpisodeById.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export default episodesSlice.reducer;
export const { episodeOnUnmount } = episodesSlice.actions;
