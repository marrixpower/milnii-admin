import { InitialState } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: InitialState = {
  isLoggedIn: true,
  accessToken: '',
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    enter: (state, { payload }: PayloadAction<string>) => {
      state.accessToken = payload;
      state.isLoggedIn = true;
    },
    exit: state => {
      state.isLoggedIn = false;
      state.accessToken = '';
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
