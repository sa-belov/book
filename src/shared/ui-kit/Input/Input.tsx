import { ChangeEvent, HTMLProps } from 'react';
import styles from './Input.module.sass';

interface IProps extends Omit<HTMLProps<HTMLInputElement>, 'onChange'> {
  label: string;
  onChange: (value: string, name?: string) => void;
}

const Input = ({ label, onChange, ...props }: IProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, props.name);
  };

  return (
    <div className={styles.formRow}>
      <input className={styles.input} {...props} onChange={handleChange} />
      <label htmlFor={props.name}>{label}</label>
    </div>
  );
};

export default Input;
