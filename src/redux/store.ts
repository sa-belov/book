import { combineReducers, createStore } from 'redux';
import bookPageReducer from '../pages/BookPage/book.reducer';

const reducer = combineReducers({
  book: bookPageReducer,
});

const store = createStore(reducer);

export default store;
