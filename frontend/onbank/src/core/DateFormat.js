const DateFormat = (date, shortData = false) => {
  console.log(date);
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
    return `${day}.${monthIndex+1}.${year}`;
  }
  return `${day} ${monthNames[monthIndex]} ${year}`;
};

export default DateFormat;
