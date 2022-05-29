import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_KEY, BASE_URL_BBAPI, BASE_URL_IMDB, SERIES_ID_IMDB } from '../../constants/urls';
import { ICharacters } from '../../types/ICharacters';
import { IPosters } from '../../types/IPosters';
import { IQuote } from '../../types/IQuote';

export const fetchCharacters = createAsyncThunk('characters/fetchAll', async (category: string | void, thunkAPI) => {
  try {
    const response = await axios.get<ICharacters[]>(`${BASE_URL_BBAPI}characters`, {
      params: {
        category
      }
    });
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('An error occurred while loading characters');
  }
});

export const fetchCharacterByName = createAsyncThunk('characters/fetchByName', async (name: string, thunkAPI) => {
  try {
    const response = await axios.get<ICharacters[]>(`${BASE_URL_BBAPI}characters`, {
      params: {
        name
      }
    });
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('An error occurred while loading character');
  }
});

export const fetchPosters = createAsyncThunk('posters/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get<IPosters>(`${BASE_URL_IMDB}Posters/${API_KEY}/${SERIES_ID_IMDB}`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('An error occurred while loading posters');
  }
});

export const fetchRandomQuote = createAsyncThunk('quote/fetchRandomByAuthor', async (author: string, thunkAPI) => {
  try {
    const response = await axios.get<IQuote[]>(`${BASE_URL_BBAPI}quote/random`, {
      params: {
        author
      }
    });
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('An error occurred while loading quote');
  }
});
