import { PORT } from './config.js';
import { Server as SocketServer } from 'socket.io';
import cors from 'cors';
import express from 'express';
import http from 'http';
import morgan from 'morgan';

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: '*',
  },
});

app.use(cors());
app.use(morgan('dev'));

io.on('connection', socket => {
  console.log(`Client with the id ${socket.id} is now connected!`);

  socket.on('message', message => {
    console.log(`Message from client ${socket.id}: ${message}`);
    socket.broadcast.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log(`Client with the id ${socket.id} just disconnected`);
  });
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
