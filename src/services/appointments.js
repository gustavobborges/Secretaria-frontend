import axios from 'axios'

const baseURL = 'http://localhost:8000';

const createOrUpdateAppointment = async (method, payload, id) => {
  const url = method === 'put' ? `http://localhost:8000/appointment/${id}` : `http://localhost:8000/appointment`;
  const data = await axios[method](url, payload);
  return data;
}

const getAppointments = async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:8000/appointment/${id}`);
    return data;
  } catch (error) {
    console.log('Erro ao buscar compromissos: '.error);
  }
}

const getAppointmentsTypes = async () => {
  try {
    const { data } = await axios.get('http://localhost:8000/appointmentType');
    return data;
  } catch (error) {
    console.log('Erro ao buscar tipos de compromissos: '.error);
  }
}

const deleteAppointment = async (id) => {
  try {
    const data = await axios.delete(`http://localhost:8000/appointment/${id}`);
    return data;
  } catch (error) {
    console.log('Erro ao excluir compromissos: '.error);
  }
}
  
export { getAppointments, getAppointmentsTypes, createOrUpdateAppointment, deleteAppointment };