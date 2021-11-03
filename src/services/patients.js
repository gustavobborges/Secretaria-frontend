import axios from 'axios'

const getPatients = async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:8000/patient/${id}`);
    return data;
  } catch (error) {
    console.log('Erro ao buscar pacientes: '.error)
  }
}

const createOrUpdatePatient = async (method, payload, id) => {
  const url = method === 'put' ? `http://localhost:8000/patient/${id}` : `http://localhost:8000/patient`;
  const data = await axios[method](url, payload);
  return data;
}

const deletePatient = async (id) => {
  try {
    const data = await axios.delete(`http://localhost:8000/patient/${id}`);
    return data;
  } catch (error) {
    console.log('Erro ao excluir paciente: '.error);
  }
}

export { createOrUpdatePatient, getPatients, deletePatient } ;