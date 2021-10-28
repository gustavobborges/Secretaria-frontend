import axios from 'axios'

const baseURL = 'http://localhost:8000';

const getPatients = async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:8000/patient/${id}`);
    return data;
  } catch (error) {
    console.log('Erro ao buscar pacientes: '.error)
  }
}

export default getPatients;