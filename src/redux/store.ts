import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../pages/BookPage/book.reducer';

const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});

export default store;
