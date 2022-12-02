import { createTask } from '../services/tasks-api';

export default function CreateTask() {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const task = Object.fromEntries(formData.entries());

    createTask(task).then(() => {
      form.reset();
      form.name.focus();
      alert('Task created!');
    });
  }

  return (
    <div>
      <h1>Create Task</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Title</label>
        <input type='text' name='title' id='title' required />
        <label htmlFor='description'>Description</label>
        <input type='text' name='description' id='description' required />
        <label htmlFor='author'>Author (ID)</label>
        <input type='text' name='author' id='author' required />
        <button type='submit'>Create Task</button>
      </form>
    </div>
  );
}
