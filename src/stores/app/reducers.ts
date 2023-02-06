import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

import { State, initialState } from './appSlice';

const reducers = {
  resetApp() {
    return initialState;
  },

  resetErrors(state: State) {
    state.error = null;
  },

  setError(state: State, action: PayloadAction<string | null>) {
    state.error = action.payload;
  },
};

export default reducers;
