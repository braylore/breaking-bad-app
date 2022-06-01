import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICharacters } from '../../types/ICharacters';
import { fetchCharacterByName } from '../actions/actions';

interface ISpecificCharacterState {
  character: ICharacters[];
  isLoading: boolean;
  error: string;
}

const initialState: ISpecificCharacterState = {
  character: [],
  isLoading: false,
  error: ''
};

export const specificCharacterSlice = createSlice({
  name: 'specificCharacter',
  initialState,
  reducers: {
    specificCharacterOnUnmount: (state) => {
      state.character = [];
    }
  },
  extraReducers: {
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

export default specificCharacterSlice.reducer;
export const { specificCharacterOnUnmount } = specificCharacterSlice.actions;
