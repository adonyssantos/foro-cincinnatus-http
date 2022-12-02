import { createUser } from '../services/users-api';

export default function CreateUser() {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const user = Object.fromEntries(formData.entries());

    createUser(user).then(() => {
      form.reset();
      form.name.focus();
      alert('User created!');
    });
  }

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' id='name' required />
        <label htmlFor='age'>Age</label>
        <input type='text' name='age' id='age' required />
        <button type='submit'>Create User</button>
      </form>
    </div>
  );
}
