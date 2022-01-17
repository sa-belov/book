import React from 'react';
import styles from './BookItem.module.sass';

const BookItem = ({ book }) => {
  return (
    <div className={styles.book}>
      <img src="/src/images/book.png" alt="book" />
      <span>{book.author}</span>
      <span>{book.title}</span>
    </div>
  );
};

export default BookItem;
