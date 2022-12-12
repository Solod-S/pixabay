import { combineReducers } from '@reduxjs/toolkit';

import { querySlice } from './slices/querySlice';

export const rootReduser = combineReducers({
  query: querySlice.reducer,
});
