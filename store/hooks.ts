import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { createTheme } from '@mui/material';

import { AppDispatch, RootState } from './store';
import { themeModeState, themeSettings } from './slices/theme';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useTheme = () => {
  const mode = useSelector(themeModeState);
  return createTheme(themeSettings(mode));
};
