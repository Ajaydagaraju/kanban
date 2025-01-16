// lib/store.js
import { configureStore } from '@reduxjs/toolkit';
import boardsReducer from './slice/boardSlice';

export const store = configureStore({
  reducer: {
    board: boardsReducer,
  },
});

export default store;
