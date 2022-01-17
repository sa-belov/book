import styles from './Button.module.sass';
import React, { FC } from 'react';

interface IProps {
  children?: React.ReactNode;
}

const Button: FC<IProps> = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
