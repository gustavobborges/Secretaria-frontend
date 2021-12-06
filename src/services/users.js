import axios from 'axios';

const login = axios.create({
  baseURL:"http://localhost:3004/users/login"
})

const updateUser = async (payload, id) => {
  const userUpdated = axios.put(`http://localhost:8000/user/${id}`, payload)
  return userUpdated;
}

export default login;