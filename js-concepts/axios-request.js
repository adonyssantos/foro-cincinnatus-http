import axios from 'axios';

const tasksApi = axios.create({
  baseURL: 'http://localhost:5050',
});

const getTasks = () => tasksApi.get('/tasks');
const getTaskById = taskId => tasksApi.get(`/tasks/${taskId}`);
const createTask = taskData => tasksApi.post('/tasks', taskData);

// getTasks().then(({ data }) => console.log(data));
// getTaskById(1).then(({ data }) => console.log(data));
createTask({ title: 'New task', description: 'New task description' }).then(({ data }) => console.log(data));

const usersApi = axios.create({
  baseURL: 'http://localhost:8080',
});

const getUsers = () => usersApi.get('/users');
const getUserById = userId => usersApi.get(`/users/${userId}`);
const createUser = userData => usersApi.post('/users', userData);

// getUsers().then(({ data }) => console.log(data));
// getUserById(1).then(({ data }) => console.log(data));
createUser({ name: 'John', age: 25 }).then(({ data }) => console.log(data));
