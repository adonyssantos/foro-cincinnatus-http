from flask import Flask, request, jsonify
from flask_cors import CORS
from db import Tasks

app = Flask(__name__)
CORS(app)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type: application/json'

@app.route('/tasks', methods=['GET'])
def get_tasks():
  tasks = Tasks['read']()

  return jsonify(tasks)

@app.route('/tasks/<string:id>', methods=['GET'])
def get_task(id):
  task = Tasks['read_one'](id)

  return jsonify(task)

@app.route('/tasks', methods=['POST'])
def create_task():
  task = request.get_json()
  tasks = Tasks['create'](task)

  return jsonify(tasks)   
    
if __name__ == '__main__':
  app.run(debug=True, port=5050)