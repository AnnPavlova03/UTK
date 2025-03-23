export const formatAmount = (value: string) => {
  const number = parseFloat(value.replace(/\s/g, ''));
  if (!isNaN(number)) {
    return number.toLocaleString('ru-RU');
  }
  return '';
};
