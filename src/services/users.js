import axios from 'axios';

const login = axios.create({
  baseURL:"http://localhost:3004/users/login"
})

export default login;