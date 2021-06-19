import axios from 'axios'

const api = axios.create({
  baseURL:"https://the-secretary.herokuapp.com/api/appointments"
})

export default api;