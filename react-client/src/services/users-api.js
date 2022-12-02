import axios from 'axios';

const usersApi = axios.create({
  baseURL: 'http://localhost:8080',
});

const getUsers = () => usersApi.get('/users');
const getUserById = userId => usersApi.get(`/users/${userId}`);
const createUser = userData => usersApi.post('/users', userData);

export { getUsers, getUserById, createUser };
