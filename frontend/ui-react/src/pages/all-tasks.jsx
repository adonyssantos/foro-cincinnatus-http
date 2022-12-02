import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function AllTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks([]);
  }, []);

  if (tasks.length === 0) {
    return (
      <div>
        <h3>No hay tareas disponibles</h3>
        <Link to='/create-task'>Crear tarea</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>All Tasks</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <b>Title:</b> {task.name} <br />
            <b>Description:</b> <small>({task.description})</small>
            <Link to={`/user-details/${task.author}`}>View Author</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
