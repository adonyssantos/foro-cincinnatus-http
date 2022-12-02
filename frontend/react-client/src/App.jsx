import Layout from './layout';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import AllTasks from './pages/all-tasks';
import AllUsers from './pages/all-users';
import CreateTask from './pages/create-task';
import CreateUser from './pages/create-user';
import UserDetails from './pages/user-details';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate to='/all-tasks' />} />
        <Route path='/all-tasks' element={<AllTasks />} />
        <Route path='/all-users' element={<AllUsers />} />
        <Route path='/create-task' element={<CreateTask />} />
        <Route path='/create-user' element={<CreateUser />} />
        <Route path='/user-details/:id' element={<UserDetails />} />
        <Route path='*' element={<Navigate to='/all-tasks' />} />
      </Routes>
    </Layout>
  );
}

export default App;
