import { configureStore, combineReducers } from '@reduxjs/toolkit';
import postersReducer from './reducers/postersSlice';

const rootReducer = combineReducers({
  postersReducer
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
