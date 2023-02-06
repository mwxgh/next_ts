import { createSlice } from '@reduxjs/toolkit';

import extraReducers from './extraReducers';
import reducers from './reducers';

export type State = {
  loading: boolean,
  time: string | null,
  error: string | null,
};

export const initialState: State = {
  loading: false,
  time: null,
  error: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers,
  extraReducers,
});

export const {
  resetApp,
  resetErrors,
  setError,
} = appSlice.actions;

export default appSlice.reducer;
