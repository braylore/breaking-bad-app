import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL_BBAPI } from '../../constants/urls';
import { ICharacters } from '../../types/ICharacters';

export const fetchAllCharacters = createAsyncThunk('characters/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get<ICharacters[]>(`${BASE_URL_BBAPI}/characters`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('An error occurred while loading characters');
  }
});

interface ICharactersState {
  characters: ICharacters[];
  isLoading: boolean;
  error: string;
}

const initialState: ICharactersState = {
  characters: [],
  isLoading: false,
  error: ''
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllCharacters.fulfilled.type]: (state, action: PayloadAction<ICharacters[]>) => {
      state.isLoading = false;
      state.characters = action.payload;
    },
    [fetchAllCharacters.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchAllCharacters.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export default charactersSlice.reducer;
