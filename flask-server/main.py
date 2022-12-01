from flask import Flask, request
from flask_cors import CORS
from controllers import tasks_controllers, task_controllers

app = Flask(__name__)
CORS(app)

@app.route('/tasks', methods=['GET', 'POST'])
def tasks():
  return tasks_controllers[request.method]()
    
@app.route('/tasks/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def task(id):
  return task_controllers[request.method](id)

if __name__ == '__main__':
  app.run(debug=True, port=5050)