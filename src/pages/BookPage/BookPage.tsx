import React from 'react';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../redux/store.types';
import BookItem from './BookItem/BookItem';
import styles from './BookPage.module.sass';

const BookPage = () => {
  const books = useSelector((state: ReduxState) => state.book.books);

  const renderBooks = () => {
    return books.map((book) => <BookItem key={book.id} book={book} />);
  };

  return <div className={styles.content}>{renderBooks()}</div>;
};

export default BookPage;
