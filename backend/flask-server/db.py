data = []

def read_tasks():
  return data

def read_one_task(id):
  # get the element with the id in data or None if not found
  task = next((task for task in data if task['id'] == id), None)

  return task

def create_task(task):
  newTask = {
      'id': str(len(data) + 1),
      **task,
    }

  data.append(newTask)

  return data

Tasks = {
  'create': create_task,
  'read': read_tasks,
  'read_one': read_one_task,
}
