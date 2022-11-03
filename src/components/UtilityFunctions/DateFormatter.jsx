const DateFormatter = (dateString) => {
  console.log(dateString);
  const date = dateString.substring(0, 10);
  const time = dateString.substring(11, 16);
  return [date, time];
};

export default DateFormatter;
