const DateFormat = (date, shortData = false) => {
  const monthNames = [
    'Styczeń',
    'Luty',
    'Marzec',
    'Kwiecień',
    'Maj',
    'Czerwiec',
    'Lipiec',
    'Sierpień',
    'Wrzesień',
    'Październik',
    'Listopad',
    'Grudzień',
  ];

  let day = date.getDate();
  if (day < 10) day = `0${day}`;
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  if (shortData) {
    let month = date.getMonth() + 1;
    if (month < 10) month = `0${month}`;
    return `${day}.${month}.${year}`;
  }
  return `${day} ${monthNames[monthIndex]} ${year}`;
};

export default DateFormat;
