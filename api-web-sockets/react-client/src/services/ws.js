import io from 'socket.io-client';

const socket = io('http://localhost:3030');

function sendMessage(message) {
  socket.emit('message', message);
}

function messageSuscribe(cb) {
  socket.on('message', message => {
    cb(message);
  });
}

function messageUnsubscribe() {
  socket.off('message');
}

export { sendMessage, messageSuscribe, messageUnsubscribe };
