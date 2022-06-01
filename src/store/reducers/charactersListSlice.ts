import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICharacters } from '../../types/ICharacters';
import { fetchCharacters } from '../actions/actions';
import { PayloadCharactersListFilter } from '../../types/PayloadCharactersList';

interface ICharactersListState {
  characters: ICharacters[];
  isLoading: boolean;
  error: string;
  filter: PayloadCharactersListFilter;
  searchQuery: string;
  currentPage: number;
}

const initialState: ICharactersListState = {
  characters: [],
  isLoading: false,
  error: '',
  filter: null,
  searchQuery: '',
  currentPage: 1
};

export const charactersListSlice = createSlice({
  name: 'charactersList',
  initialState,
  reducers: {
    currentPageChanged: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    searchQueryChanged: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    filterChanged: (state, action: PayloadAction<PayloadCharactersListFilter>) => {
      state.filter = action.payload;
    }
  },
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
    }
  }
});

export default charactersListSlice.reducer;
export const { currentPageChanged, filterChanged, searchQueryChanged } = charactersListSlice.actions;
