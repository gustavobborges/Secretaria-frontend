import moment from 'moment'

const formatDateTime = (date, type) => {
  let response;
  const newDate = moment(new Date(date)).format('YYYY-MM-DD HH:mm:ss');
  const dateArray = newDate.split(' ');

  if (type === 'date') {
    response = dateArray[0];
  } else if (type === 'time') {
    response = dateArray[1];
  }
  return response
  
}

export default formatDateTime;
