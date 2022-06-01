import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_KEY, BASE_URL_BBAPI, BASE_URL_IMDB, BB_ID_IMDB } from '../../constants/urls';
import { ICharacters } from '../../types/ICharacters';
import { IPosters } from '../../types/IPosters';
import { IQuote } from '../../types/IQuote';
import { IEpisodes } from '../../types/IEpisodes';
import { IEpisodesRespIMDB } from '../../types/IEpisodesIMDB';

export const fetchCharacters = createAsyncThunk('characters/fetchAll', async (category: string | null, thunkAPI) => {
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
    const response = await axios.get<IPosters>(`${BASE_URL_IMDB}Posters/${API_KEY}/${BB_ID_IMDB}`);
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

export const fetchEpisodes = createAsyncThunk('episodes/fetchAllOrById', async (_, thunkAPI) => {
  try {
    const response = await axios.get<IEpisodes[]>(`${BASE_URL_BBAPI}episodes`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('An error occurred while loading episodes');
  }
});

export const fetchEpisodeById = createAsyncThunk('episodes/fetchById', async (episodeId: string, thunkAPI) => {
  try {
    const response = await axios.get<IEpisodes[]>(`${BASE_URL_BBAPI}episodes/${episodeId}`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('An error occurred while loading episodes');
  }
});

interface IFetchSpisodesIMDBParams {
  seriesId: string;
  seasonNum: string;
}

export const fetchEpisodesIMDB = createAsyncThunk(
  'episodesIMDB/fetchSpecified',
  async ({ seriesId, seasonNum }: IFetchSpisodesIMDBParams, thunkAPI) => {
    try {
      const response = await axios.get<IEpisodesRespIMDB>(
        `${BASE_URL_IMDB}SeasonEpisodes/${API_KEY}/${seriesId}/${seasonNum}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('An error occurred while loading episodes');
    }
  }
);
