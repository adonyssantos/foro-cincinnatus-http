import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../services/users-api';

export default function AllUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(({ data }) => setUsers(data));
  }, []);

  if (users.length === 0) {
    return (
      <div>
        <h3>No hay usuarios disponibles</h3>
        <Link to='/create-user'>Crear usuario</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>All Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <b>ID:</b> {user.id} <br />
            <b>Name:</b> {user.name} <br />
            <b>Age:</b> {user.age} <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
