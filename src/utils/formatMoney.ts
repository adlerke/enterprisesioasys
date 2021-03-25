import NumberFormat from 'react-number-format';

export default function formatMoney(value: number) {
  const formated = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'brl',
    currencyDisplay: 'code',
  });

  return formated;
}
