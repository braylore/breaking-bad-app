import { configureStore, combineReducers } from '@reduxjs/toolkit';
import postersReducer from './reducers/postersSlice';
import charactersReducer from './reducers/charactersSlice';
import quoteReducer from './reducers/quoteSlice';

const rootReducer = combineReducers({
  postersReducer,
  charactersReducer,
  quoteReducer
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
