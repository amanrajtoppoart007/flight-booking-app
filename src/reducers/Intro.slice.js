import {createSlice} from '@reduxjs/toolkit';

export const introSlice = createSlice({
  name: 'intro',
  initialState: {
    appIntro: false,
  },
  reducers: {
    setAppIntro: (state, action) => {
      state.appIntro = action.payload;
    },
  },
});

export const {setAppIntro} = introSlice.actions;

export default introSlice.reducer;
