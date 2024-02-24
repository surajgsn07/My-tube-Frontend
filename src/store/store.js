import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice.js';
import uploadReducer from './uploadSlice.js';



export const store = configureStore({
  reducer: {
    auth: authReducer,
    upload: uploadReducer,
  },
});
