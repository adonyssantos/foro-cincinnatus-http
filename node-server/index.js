import express from 'express';
import cors from 'cors';
import Users from './db.js';

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

// GET ALL USERS
app.get('/users', (_, res) => {
  res.json(Users.read());
});

// GET ONE USER
app.get('/users/:id', (req, res) => {
  res.json(Users.readOne(req.params.id));
});

// CREATE USER
app.post('/users', (req, res) => {
  Users.create(req.body);
  res.json(Users.read());
});

app.listen(port, () => {
  console.log(`Users server listening at http://localhost:${port}`);
});
