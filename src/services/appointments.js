import axios from 'axios'

const baseURL = 'http://localhost:8000';

const getAppointments = async () => {
  try {
    const { data } = await axios.get('http://localhost:8000/appointment');
    return data;
  } catch (error) {
    console.log('Erro ao buscar compromissos: '.error)
  }
}

const getAppointmentsTypes = async () => {
  try {
    const { data } = await axios.get('http://localhost:8000/appointmentType');
    return data;
  } catch (error) {
    console.log('Erro ao buscar tipos compromissos: '.error)
  }
}
  
export { getAppointments, getAppointmentsTypes };