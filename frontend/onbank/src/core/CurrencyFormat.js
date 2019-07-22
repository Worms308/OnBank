const currencyFormat = number => {
  const cost = parseFloat(number);
  return `${cost
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} PLN`;
};
export default currencyFormat;
