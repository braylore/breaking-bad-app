import { configureStore, combineReducers } from '@reduxjs/toolkit';
import postersReducer from './reducers/postersSlice';
import specificCharacterReducer from './reducers/specificCharacterSlice';
import quoteReducer from './reducers/quoteSlice';
import episodesReducer from './reducers/episodesSlice';
import episodesIMDBReducer from './reducers/episodesIMDBSlice';
import charactersListReducer from './reducers/charactersListSlice';

const rootReducer = combineReducers({
  postersReducer,
  specificCharacterReducer,
  quoteReducer,
  episodesReducer,
  episodesIMDBReducer,
  charactersListReducer
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
