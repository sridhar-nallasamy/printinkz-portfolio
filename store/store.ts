import { configureStore } from '@reduxjs/toolkit';
import navBarSlice from './slices/navBarSlice';
import themeSlice from './slices/theme';

export const createStore = () =>
  configureStore({
    reducer: {
      navBarState: navBarSlice,
      themeModeState: themeSlice,
    },
  });

export type StoreType = ReturnType<typeof createStore>;
export type RootState = ReturnType<StoreType['getState']>;
export type AppDispatch = StoreType['dispatch'];
