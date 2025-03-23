import ReactDOM from 'react-dom';
import styles from './modal.module.scss';
import { FC, useEffect, memo, ReactNode } from 'react';
import closeIcon from '../../assets/svg/close.svg';
type TModalProps = {
  children: ReactNode;
  onClose: () => void;
};

const modalRoot = document.getElementById('modal');

export const Modal: FC<TModalProps> = memo(({ children, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);
  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        {children}
        <button className={styles.closeButton} onClick={onClose}>
          <img src={closeIcon} alt="Закрыть" />
        </button>
      </div>
    </div>,
    modalRoot as HTMLDivElement
  );
});
