import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../redux/store.types';
import BookItem from './BookItem/BookItem';
import styles from './BookPage.module.sass';
import Input from '../../shared/ui-kit/Input/Input';
import Button from '../../shared/ui-kit/Button/Button';
import { createActionCreator, editBookCreator, selectBookCreator } from './book.reducer';

export interface ICreateBook {
  id: number;
  author: string;
  title: string;
}

interface IBookState {
  draftBook: ICreateBook;
  inputMode: 'bookCreate' | 'bookEdit';
}

const BookPage = () => {
  const [state, setState] = useState<IBookState>({
    draftBook: generateEmptyBook(),
    inputMode: 'bookCreate',
  });
  const dispatch = useDispatch();
  const { books, selectedBook } = useSelector((state: ReduxState) => state.book);

  useEffect(() => {
    if (!selectedBook) return;

    setState((prev) => ({ ...prev, draftBook: selectedBook }));
  }, [selectedBook]);

  const handleChange = (value: string, name: string) => {
    setState((prev) => ({
      ...prev,
      draftBook: { ...prev.draftBook, [name]: value },
    }));
  };

  const addBookHandler = () => {
    dispatch(createActionCreator({ ...state.draftBook }));
    setState((prev) => ({ ...state, draftBook: generateEmptyBook() }));
  };

  const handleOrderEditStart = useCallback(
    (id: ICreateBook['id']) => {
      setState((prev) => ({ ...prev, inputMode: 'bookEdit' }));
      dispatch(selectBookCreator(id));
    },
    [dispatch]
  );

  const handleBookEditSave = () => {
    dispatch(editBookCreator({ ...state.draftBook }));
    setState((prev) => ({
      ...prev,
      inputMode: 'bookCreate',
      draftBook: generateEmptyBook(),
    }));
  };

  const renderSubmitButton = () => {
    const callback = state.inputMode === 'bookCreate' ? addBookHandler : handleBookEditSave;
    const text = state.inputMode === 'bookCreate' ? 'Create book' : 'Save';

    return <Button onClick={callback}>{text}</Button>;
  };

  const renderBooks = () => {
    return books.map((book) => <BookItem key={book.id} book={book} onEdit={handleOrderEditStart} />);
  };

  const renderForm = () => {
    return (
      <div className={styles.form}>
        <div className={styles.formContent}>
          <Input
            placeholder={'Author'}
            onChange={handleChange}
            name={'author'}
            value={state.draftBook.author}
            type={'text'}
          />
          <Input
            placeholder={'Title'}
            onChange={handleChange}
            name={'title'}
            value={state.draftBook.title}
            type={'text'}
          />
          <div className={styles.button}>{renderSubmitButton()}</div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.content}>
      {renderForm()}
      <div className={styles.books}>{renderBooks()}</div>
    </div>
  );
};

const generateEmptyBook = () => ({ author: '', title: '', id: -1 });

export default BookPage;
