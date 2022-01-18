import { AnyAction } from 'redux';

const CREATE_BOOK = 'CREATE_BOOK';
const DELETE_BOOK = 'DELETE_BOOK';
const SELECT_BOOK = 'SELECT_BOOK';
const EDIT_BOOK = 'EDIT_BOOK';

interface IBook {
  id: number;
  author: string;
  title: string;
}

export interface IBookState {
  books: IBook[];
  selectedBook: IBook | null;
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
  selectedBook: null,
};

const bookPageReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case CREATE_BOOK: {
      const created: IBook = {
        ...action.payload,
        id: Date.now(),
      };
      return {
        ...state,
        books: [...state.books, created],
      };
    }
    case DELETE_BOOK: {
      const newBooks = state.books.filter((order) => order.id !== action.payload);
      return {
        ...state,
        books: newBooks,
      };
    }
    case SELECT_BOOK: {
      const foundBook = state.books.find((book) => book.id === action.payload);
      if (!foundBook) return state;

      return { ...state, selectedBook: foundBook };
    }
    case EDIT_BOOK: {
      const bookIndex = state.books.findIndex((book) => book.id === action.payload.id);
      if (bookIndex === -1) return state;
      return {
        ...state,
        books: [...state.books.slice(0, bookIndex), action.payload, ...state.books.slice(bookIndex + 1)],
      };
    }
    default:
      return state;
  }
};

export const createActionCreator = (book: IBook) => ({
  type: CREATE_BOOK,
  payload: book,
});

export const deleteActionCreator = (id: number) => ({
  type: DELETE_BOOK,
  payload: id,
});

export const selectBookCreator = (id: IBook['id']) => ({
  type: SELECT_BOOK,
  payload: id,
});

export const editBookCreator = (book: IBook) => ({
  type: EDIT_BOOK,
  payload: book,
});

export default bookPageReducer;
