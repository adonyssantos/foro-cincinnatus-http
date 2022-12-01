Tasks = {}

Tasks['data'] = []

Tasks['add'] = lambda task: Tasks['data'].append(task)

Tasks['getAll'] = lambda: Tasks['data']

Tasks['get'] = lambda id: Tasks['data'][id]

Tasks['delete'] = lambda id: Tasks['data'].pop(id)

Tasks['update'] = lambda id, task: Tasks[ 'data'].__setitem__(id, task)

