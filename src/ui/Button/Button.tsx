import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

export const Button = ({
  children,
  className,
  onClick,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <>
      <button
        className={classNames(styles.btn, className)}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    </>
  );
};
