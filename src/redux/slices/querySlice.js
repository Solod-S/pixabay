import { createSlice } from '@reduxjs/toolkit';

export const querySlice = createSlice({
  name: 'query',
  initialState: '',
  reducers: {
    setQuery(state, action) {
      return (state = action.payload);
    },
    clearQuery(state) {
      return (state = '');
    },
  },
});

export const { setQuery, clearQuery } = querySlice.actions;
