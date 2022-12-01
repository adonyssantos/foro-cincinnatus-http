from flask import Flask, request, jsonify
from flask_cors import CORS
from db import Tasks

app = Flask(__name__)
CORS(app) # TODO: fix CORS
cors = CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/tasks', methods=['GET', 'POST'])
def tasks():
  if request.method == 'GET':
    return jsonify(Tasks['read']())
  elif request.method == 'POST':
    task = request.get_json()
    tasks = Tasks['create'](task)
    return jsonify(tasks)
    
    
@app.route('/tasks/<string:id>', methods=['GET'])
def task(id):
  if request.method == 'GET':
    task = Tasks['read_one'](id)
    return jsonify(task)

if __name__ == '__main__':
  app.run(debug=True, port=5050)