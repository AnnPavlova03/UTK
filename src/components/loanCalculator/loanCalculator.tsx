import React, { useCallback, useState } from 'react';
import styles from './LoanCalculator.module.scss';
import { Button } from '../button';
import { LoanResult } from '../loadResult/loadResult';
import { formatAmount } from '../../utils/setFormatAmount';

export const LoanCalculator = () => {
  const [amount, setAmount] = useState('');
  const [period, setPeriod] = useState(12);
  const [isCalculated, setIsCalculated] = useState(false);
  const [error, setError] = useState('');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const cleanedValue = value.replace(/[^0-9.]/g, '');
    const formattedValue = formatAmount(cleanedValue);
    setAmount(formattedValue);
  };

  const handlePeriodChange = useCallback((newPeriod: number) => {
    setPeriod(newPeriod);
  }, []);

  const handleCalculate = () => {
    if (!amount) {
      setError('Поле обязательно для заполнения');
      return;
    }
    setError('');
    setIsCalculated(true);
  };

  const handleSubmit = () => {
    console.log(1);
  };
  const cleanedAmount = parseFloat(amount.replace(/\s/g, ''));

  return (
    <div className={styles.loanCalculator}>
      <h1 className={styles.title}>Платежи по кредиту</h1>
      <p className={styles.text}>
        Введите сумму кредита и выберите срок, на который вы хотите его
        оформить.
        <br />
        Мы автоматически рассчитаем для вас ежемесячный платеж, чтобы вы могли
        лучше спланировать свои финансы.
      </p>
      <div className={styles.wrapper_input}>
        <h2 className={styles.subTitle}>Ваша сумма кредита</h2>
        <label>
          <input
            className={`${styles.input} ${error ? styles.input_error : ''}`}
            value={amount}
            onChange={handleAmountChange}
            placeholder="Введите данные"
            required
          />
        </label>
        {error && <p className={styles.error}>{error}</p>}
      </div>
      <h2
        className={`${styles.subTitle} ${styles.subTitle_accent}`}
        onClick={handleCalculate}
      >
        Рассчитать
      </h2>
      <div className={styles.wrapper_options}>
        <h2 className={styles.subTitle}>Количество месяцев?</h2>
        <div className={styles.options}>
          {[12, 24, 36, 48].map((option) => (
            <button
              key={option}
              className={`${styles.options_button} ${
                period === option ? styles.options_button_active : ''
              }`}
              onClick={() => handlePeriodChange(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      {isCalculated && <LoanResult amount={cleanedAmount} period={period} />}
      <div className={styles.buttonWrapper}>
        <Button title="Добавить" onClick={handleSubmit} isModal />
      </div>
    </div>
  );
};
