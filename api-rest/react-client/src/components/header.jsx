import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>My App</h1>
      <nav>
        <Link to='/all-tasks'>All Tasks</Link>
        <Link to='/all-users'>All Users</Link>
        <Link to='/create-task'>Create Task</Link>
        <Link to='/create-user'>Create User</Link>
      </nav>
    </header>
  );
}
