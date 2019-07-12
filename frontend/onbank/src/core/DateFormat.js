const DateFormat = (date, shortData = false) => {
  let day = date.getDate();
  if (day < 10) day = `0${day}`;
  let month = date.getMonth() + 1;
  if (month < 10) month = `0${month}`;
  const year = date.getFullYear();

  if (shortData) {
    return `${day}.${month}.${year}`;
  }
  return `${year}-${month}-${day}`;
};

export default DateFormat;
