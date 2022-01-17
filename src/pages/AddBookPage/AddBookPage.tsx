import React, { useState } from 'react';
import Input from '../../shared/ui-kit/Input/Input';
import Button from '../../shared/ui-kit/Button/Button';

interface ICreateBook {
  author: string;
  title: string;
}

const AddBookPage = () => {
  const [state, setState] = useState<ICreateBook>(generateEmptyBook());

  const handleChange = (value: string, name: string) => {
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <Input label={'author'} onChange={handleChange} name={'author'} value={state.author} type={'text'} />
      <Input label={'title'} onChange={handleChange} name={'title'} value={state.title} type={'text'} />
      <Button>Add</Button>
    </div>
  );
};

const generateEmptyBook = () => ({ author: '', title: '' });

export default AddBookPage;
