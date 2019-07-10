const AccountNumberFormat = number =>
  number.match(/[A-Z]{2}|(?:(?:\d{2}|\d{4})(?=(\d{4})*$))/g).join(' ');

export default AccountNumberFormat;
