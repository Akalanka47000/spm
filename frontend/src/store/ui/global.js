import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showLoader: false,
  showSettingDrawer: false,
};

export const slice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleLoader(state, action) {
      state.showLoader = action.payload;
    },
    toggleSettingDrawer(state, action) {
      state.showSettingDrawer = action.payload || !state.showSettingDrawer;
    },
  },
});

export const { toggleLoader, toggleSettingDrawer } = slice.actions;

export default slice.reducer;
