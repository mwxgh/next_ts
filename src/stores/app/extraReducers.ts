import { ActionReducerMapBuilder } from '@reduxjs/toolkit';

import { State } from './appSlice';
import { fetchSomeData } from './thunks';

function buildDumpHandler(builder: ActionReducerMapBuilder<State>) {
  builder.addCase(fetchSomeData.pending, (state) => {
    state.loading = true;
    state.error = null;
  });

  builder.addCase(fetchSomeData.fulfilled, (state, action) => {
    state.loading = false;
    state.error = null;
    state.time = action.payload.response.datetime;
  });

  builder.addCase(fetchSomeData.rejected, (state) => {
    state.loading = false;
  });
}

function extraReducers(builder: ActionReducerMapBuilder<State>) {
  buildDumpHandler(builder);
}

export default extraReducers;
