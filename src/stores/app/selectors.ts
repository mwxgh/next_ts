import { createSelector } from '@reduxjs/toolkit';

import { State } from './appSlice';
import { RootState } from '..';

const appSelector = (state: RootState) => state.app;

export const loadingSelector = createSelector(
  [appSelector],
  (state: State) => state.loading,
);

export const timeSelector = createSelector(
  [appSelector],
  (state: State) => state.time,
);

export const errorSelector = createSelector(
  [appSelector],
  (state: State) => state.error,
);
