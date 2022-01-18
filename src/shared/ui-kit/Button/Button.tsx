import styles from './Button.module.sass';
import React, { FC } from 'react';

const Button = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
