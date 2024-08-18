import { createSlice } from '@reduxjs/toolkit';
import { themeModeType, ThemeStateProps } from '@/types/theme';
import { ThemeOptions } from '@mui/material';
import { Mulish } from 'next/font/google';
import { RootState } from '../store';

const mulish = Mulish({ subsets: ['latin'] });

const initialState: ThemeStateProps = {
  mode: 'light',
};

export const themeSlice = createSlice({
  name: 'themeModeState',
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

export const themeModeState = (state: RootState) => state.themeModeState.mode;
export const { toggleThemeMode } = themeSlice.actions;
export default themeSlice.reducer;

export const themeSettings = (mode: themeModeType): ThemeOptions => {
  return {
    palette: {
      mode: mode,
      primary: {
        main: '#000000',
        light: '#343434',
        dark: '#28282B',
      },
    },
    typography: {
      fontFamily: mulish.style.fontFamily,
      button: {
        fontWeight: 'bold',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
            borderRadius: '9999px !important',
          },
        },
      },
    },
  };
};
