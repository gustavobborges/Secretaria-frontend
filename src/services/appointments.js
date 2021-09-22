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

export default getAppointments;