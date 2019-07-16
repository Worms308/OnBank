import PropTypes from 'prop-types';

const currencyFormat = (number = '') => {
  if ((number || number === 0) && !isNaN(number)) {
    const cost = parseFloat(number);
    return `${cost
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} PLN`;
  }
  return '';
};

currencyFormat.propTypes = {
  number: PropTypes.number.isRequired,
};

export default currencyFormat;
