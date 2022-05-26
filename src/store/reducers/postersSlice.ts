import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IPosters, IPosterParams } from '../../types/IPosters';
import { BASE_URL_IMDB, SERIES_ID_IMDB, API_KEY } from '../../constants/urls';

export const fetchPosters = createAsyncThunk('posters/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get<IPosters>(`${BASE_URL_IMDB}Posters/${API_KEY}/${SERIES_ID_IMDB}`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('An error occurred while loading posters');
  }
});

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
    },
    [fetchPosters.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export default postersSlice.reducer;
