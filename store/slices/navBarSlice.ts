import { createSlice } from '@reduxjs/toolkit';
import { NavBarStateProps } from '@/types/header';
import { RootState } from '../store';

const initialState: NavBarStateProps = {
  isExpanded: false,
};

export const navBarSlice = createSlice({
  name: 'navBarState',
  initialState,
  reducers: {
    toggleNavbarState: (state) => {
      state.isExpanded = !state.isExpanded;
    },
  },
});

export const navBarState = (state: RootState) => state.navBarState.isExpanded;
export const { toggleNavbarState } = navBarSlice.actions;
export default navBarSlice.reducer;
