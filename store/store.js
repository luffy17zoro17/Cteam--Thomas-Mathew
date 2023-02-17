

import blurReducer from '../reducers/blurSlice/blurSlice';
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
  reducer: {
    blurMode:blurReducer,
  },
});