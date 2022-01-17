import { createSlice } from '@reduxjs/toolkit';

interface IBook {
  id: number;
  author: string;
  title: string;
}

export interface IBookState {
  books: IBook[];
}

const initialState: IBookState = {
  books: [
    {
      id: 1,
      author: 'Steven Skiena',
      title: 'The Algorithm Design Manual',
    },
    {
      id: 2,
      author: 'Aditya Bhargava',
      title: 'Grokking Algorithms',
    },
  ],
};

const slice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook(state, { payload }) {
      state.books.push(payload);
    },
  },
});

const bookReducer = slice.reducer;
export default bookReducer;
