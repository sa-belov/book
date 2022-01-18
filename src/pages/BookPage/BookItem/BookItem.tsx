import React, { memo } from 'react';
import styles from './BookItem.module.sass';
import Button from '../../../shared/ui-kit/Button/Button';
import { useDispatch } from 'react-redux';
import { deleteActionCreator } from '../book.reducer';
import { ICreateBook } from '../BookPage';

interface IProps {
  onEdit: (id: ICreateBook['id']) => void;
  book: ICreateBook;
}

const BookItem = ({ book, onEdit }: IProps) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.book}>
      <span>{book.author}</span>
      <span>{book.title}</span>
      <div className={styles.buttons}>
        <Button onClick={() => dispatch(deleteActionCreator(book.id))}>Delete</Button>
        <Button onClick={() => onEdit(book.id)}>Edit</Button>
      </div>
    </div>
  );
};

export default memo(BookItem);
