const express = require('express');
const https = require('https');
const fs = require('fs');
// const socketIO = require('socket.io');

// don't remove this.
const connection = require('./database');

const logger = require('./logger');

const startServer = () => {
  const router = require('../controllers/routes');

  const app = express();

  const server = https.createServer({
    key: fs.readFileSync('./certs/example.key'),
    cert: fs.readFileSync('./certs/example.crt'),
  }, app);

  app.use(express.json());

  // use morgan logger
  app.use(logger);

  // register all routes
  app.use(router);

  server.listen(3000, () => {
    console.log('listening on 3000');
  });
};

module.exports = startServer;

// const roomName = 'Webrtc';
// const io = socketIO(server);
//
// io.on('connection', (socket) => {
//   console.log('socket connected', socket.id);
//
//   socket.on('message', (data) => {
//     console.log(`Message: ${JSON.stringify(data)} ${socket.id}`);
//
//     if (data.action === 'register') {
//       socket.join(roomName);
//     }
//
//     if (data.action === 'sdpOffer') {
//       socket.to(roomName).emit('message', {action: 'sdpOffer', offer: data.offer});
//     }
//
//     if (data.action === 'iceCandidate') {
//       socket.to(roomName).emit('message', {action: 'iceCandidate', candidate: data.candidate});
//     }
//
//     if (data.action === 'sdpAnswer') {
//       socket.to(roomName).emit('message', {action: 'sdpAnswer', answer: data.answer});
//     }
//   });
//
//   socket.on('disconnect', () => {
//     console.log('disconnected', socket.id);
//     socket.leave(roomName);
//   });
// });
