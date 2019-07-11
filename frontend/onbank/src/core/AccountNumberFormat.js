import PropTypes from 'prop-types';

const AccountNumberFormat = (number = '') => {
  if (number) {
    const result = number.match(/[A-Z]{2}|(?:(?:\d{2}|\d{4})(?=(\d{4})*$))/g);
    return result ? result.join(' ') : '';
  }
  return '';
};

AccountNumberFormat.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default AccountNumberFormat;
