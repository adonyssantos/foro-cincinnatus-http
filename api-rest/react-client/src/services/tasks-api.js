import axios from 'axios';

const tasksApi = axios.create({
  baseURL: 'http://localhost:5050',
});

const getTasks = () => tasksApi.get('/tasks');
const getTaskById = taskId => tasksApi.get(`/tasks/${taskId}`);
const createTask = taskData => tasksApi.post('/tasks/', taskData);

export { getTasks, getTaskById, createTask };