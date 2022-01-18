import { ChangeEvent, HTMLProps } from 'react';
import styles from './Input.module.sass';

interface IProps extends Omit<HTMLProps<HTMLInputElement>, 'onChange'> {
  onChange: (value: string, name?: string) => void;
}

const Input = ({ onChange, ...props }: IProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, props.name);
  };

  return <input className={styles.input} {...props} onChange={handleChange} />;
};

export default Input;
