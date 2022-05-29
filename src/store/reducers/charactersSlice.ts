import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICharacters } from '../../types/ICharacters';
import { fetchCharacters, fetchCharacterByName } from '../actions/actions';

interface ICharactersState {
  character: ICharacters[];
  characters: ICharacters[];
  isLoading: boolean;
  error: string;
}

const initialState: ICharactersState = {
  character: [],
  characters: [],
  isLoading: false,
  error: ''
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCharacters.fulfilled.type]: (state, action: PayloadAction<ICharacters[]>) => {
      state.isLoading = false;
      state.characters = action.payload;
    },
    [fetchCharacters.pending.type]: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    [fetchCharacters.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchCharacterByName.fulfilled.type]: (state, action: PayloadAction<ICharacters[]>) => {
      state.isLoading = false;
      state.character = action.payload;
    },
    [fetchCharacterByName.pending.type]: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    [fetchCharacterByName.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export default charactersSlice.reducer;
