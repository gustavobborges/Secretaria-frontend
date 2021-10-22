const formatDateTime = (date, type) => {
  let response;
  const dateArray = date.split('T');
  if (type === 'date') {
    response = dateArray[0];
  } else if (type === 'time') {
    response = dateArray[1].substring(0, dateArray[1].length - 8);
  }
  return response
}

export default formatDateTime;
