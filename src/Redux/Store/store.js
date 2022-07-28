import { configureStore } from '@reduxjs/toolkit';
import noteReducer from 'Redux/Reducer/noteReducer';

const store = configureStore({
  reducer: { noteReducer },
});

export default store;
