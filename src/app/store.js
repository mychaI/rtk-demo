import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import foxReducer from '../features/fox/foxSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    fox: foxReducer
  },
});
