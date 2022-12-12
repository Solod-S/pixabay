import { configureStore } from '@reduxjs/toolkit';
import { rootReduser } from './rootReducer';

export const store = configureStore({
  reducer: rootReduser,
});
