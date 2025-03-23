import { FC } from 'react';
import styles from './button.module.scss';

type ButtonProps = {
  title: string;
  onClick: () => void;
  isModal?: boolean;
};

export const Button: FC<ButtonProps> = ({ title, onClick, isModal }) => {
  return (
    <>
      <button
        className={`${styles.button} ${isModal ? styles.buttonAccent : ''}`}
        onClick={onClick}
      >
        {title}
      </button>
    </>
  );
};
