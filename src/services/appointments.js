import axios from 'axios'

const baseURL = 'http://localhost:8000';

const getAppointments = async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:8000/appointment/${id}`);
    // console.log(data)
    // data.forEach(appointment => {
    // });
    // const appointment = {
    //   ...data,
    //   appointmentType: data.appointmentType.id,
    //   patient: data.patient.id,
    //   user: data.user.id
    // }
    // console.log(appointment);
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
    console.log('Erro ao buscar tipos de compromissos: '.error)
  }
}
  
export { getAppointments, getAppointmentsTypes };