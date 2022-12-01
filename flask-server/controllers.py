from flask import request, jsonify
from db import Tasks

tasks_controllers = {
  'GET': lambda: jsonify(Tasks['getAll']()),
  'POST': lambda: Tasks['add'](request.json),
}

task_controllers = {
  'GET': lambda id: jsonify(Tasks['get'](id)),
  'PUT': lambda id: Tasks['update'](id, request.json),
  'DELETE': lambda id: Tasks['delete'](id),
}