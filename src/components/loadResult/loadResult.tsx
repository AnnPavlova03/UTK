import { FC, useState } from 'react';
import styles from './loadResult.module.scss';
import { formatAmount } from '../../utils/setFormatAmount';

interface LoanResultProps {
  amount: number;
  period: number;
}

export const LoanResult: FC<LoanResultProps> = ({ amount, period }) => {
  const [isActive, setIsActive] = useState<boolean>(true);

  const monthlyPayment = amount / period;
  const yearlyPayment = monthlyPayment * 12;

  const toggleView = () => {
    setIsActive((prev) => !prev); 
  };

  return (
    <div className={styles.loanResult}>
      <h2 className={styles.subTitle}>Итого ваш платеж по кредиту:</h2>
      <div className={styles.toggleButtons}>
      <button
          className={`${styles.toggleButton} ${
            !isActive ? styles.toggleButton_active : ''
          }`}
          onClick={toggleView}
        >
          в год
        </button>
        <button
          className={`${styles.toggleButton} ${
            isActive ? styles.toggleButton_active : ''
          }`}
          onClick={toggleView}
        >
          в месяц
        </button>

      </div>
      <p className={styles.payment}>
        {`${formatAmount(
          (isActive ? monthlyPayment : yearlyPayment).toString()
        )} рублей`}
      </p>
    </div>
  );
};