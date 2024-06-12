import { configureStore } from '@reduxjs/toolkit';
import navBarSlice from './slices/navBarSlice';

export const createStore = () =>
  configureStore({
    reducer: {
      navBarState: navBarSlice,
    },
  });

export type StoreType = ReturnType<typeof createStore>;
export type RootState = ReturnType<StoreType['getState']>;
export type AppDispatch = StoreType['dispatch'];
